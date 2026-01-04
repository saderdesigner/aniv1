import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Text } from 'troika-three-text';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import gsap from 'gsap';

// --- Configuration ---
const CONFIG = {
    starCount: 50000,
    textLine1: "Happy 1st Wedding Anniversary",
    textLine2: "05/01/2024 - 05/01/2025",
    transitionDuration: 3,
    sunColor: 0xffcc33,
    starColors: ['#ffffff', '#ffd700', '#6366f1', '#a855f7', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
    thickness: 0.7,
    fontSize1: 6,
    fontSize2: 3,
    starSize: 1,
    defaultCameraZ: 80,
    zoomedInZ: 40,
    zoomedOutZ: 120,
    imageCount: 10,
    trailLength: 20,
    fallingStarsCount: 100
};

// --- Global State ---
let isTextState = false;
let isAnimatingTransition = false;
let targetRotationY = 0;
let targetRotationX = 0;
let currentRotationY = 0;
let currentRotationX = 0;
let targetCameraZ = CONFIG.defaultCameraZ;
let isMouseDragging = false;
let flipCounter = 0;
const FLIP_THRESHOLD = 15;

// --- Pinch-to-Grab State ---
let isPinching = false;
let pinchStartHand = { x: 0, y: 0, depth: 0 };
let pinchStartScene = { rotX: 0, rotY: 0, camZ: 0 };

// --- Scene Setup ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020617);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.set(0, 0, CONFIG.defaultCameraZ);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#three-canvas'),
    antialias: true,
    powerPreference: "high-performance"
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// --- Post-Processing (Selective Bloom) ---
const BLOOM_LAYER = 1;
const bloomLayer = new THREE.Layers();
bloomLayer.set(BLOOM_LAYER);

const darkMaterial = new THREE.MeshBasicMaterial({ color: 'black' });
const materials = {};

const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 0.4, 0.85);

// Bloom Composer (Only for Layer 1)
const bloomComposer = new EffectComposer(renderer);
bloomComposer.renderToScreen = false;
bloomComposer.addPass(renderScene);
bloomComposer.addPass(bloomPass);

// Final Composer (Combines Bloom with non-bloom)
const finalComposer = new EffectComposer(renderer);
finalComposer.addPass(renderScene);

// Shader to mix the bloom texture with the original scene
const mixPass = {
    uniforms: {
        baseTexture: { value: null },
        bloomTexture: { value: bloomComposer.renderTarget2.texture }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D baseTexture;
        uniform sampler2D bloomTexture;
        varying vec2 vUv;
        void main() {
            gl_FragColor = (texture2D(baseTexture, vUv) + texture2D(bloomTexture, vUv));
        }
    `
};

const mixShader = new THREE.ShaderMaterial({
    uniforms: mixPass.uniforms,
    vertexShader: mixPass.vertexShader,
    fragmentShader: mixPass.fragmentShader,
    defines: {}
});

const finalPass = new ShaderPass(mixShader, "baseTexture");
finalPass.needsSwap = true;
finalComposer.addPass(finalPass);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.addEventListener('start', () => { isMouseDragging = true; });
controls.addEventListener('end', () => { isMouseDragging = false; });

// --- Hands Setup ---
let handLandmarker;
const video = document.createElement('video');
video.style.display = 'none';
document.body.appendChild(video);

async function initHands() {
    const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");
    handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
            delegate: "GPU"
        },
        runningMode: "VIDEO",
        numHands: 1
    });
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    video.play();
    predictWebcam();
}

function predictWebcam() {
    if (handLandmarker && video.readyState >= 2) {
        const results = handLandmarker.detectForVideo(video, performance.now());
        if (results.landmarks && results.landmarks.length > 0) {
            const hand = results.landmarks[0];
            const handedness = results.handednesses[0][0].label;

            if (!isMouseDragging && !isAnimatingTransition) {
                // 1. Pinch Detection (Thumb Tip to Index Tip)
                const thumbTip = hand[4];
                const indexTip = hand[8];
                const pinchDist = Math.sqrt(Math.pow(indexTip.x - thumbTip.x, 2) + Math.pow(indexTip.y - thumbTip.y, 2));
                const currentlyPinching = pinchDist < 0.08;

                if (currentlyPinching) {
                    const wrist = hand[0];
                    const indexMCP = hand[5];
                    const handDepth = Math.sqrt(Math.pow(indexMCP.x - wrist.x, 2) + Math.pow(indexMCP.y - wrist.y, 2));

                    if (!isPinching) {
                        // Pinch Started: Store initial states
                        isPinching = true;
                        pinchStartHand = { x: hand[0].x, y: hand[0].y, depth: handDepth };
                        pinchStartScene = { rotX: targetRotationX, rotY: targetRotationY, camZ: targetCameraZ };
                    } else {
                        // While Pinching: Apply Relative Delta
                        const deltaX = hand[0].x - pinchStartHand.x;
                        const deltaY = hand[0].y - pinchStartHand.y;

                        // Map Delta X to Rotation Y (left/right) - Slowed down
                        targetRotationY = pinchStartScene.rotY + (-deltaX * Math.PI * 0.8);
                        // Map Delta Y to Rotation X (up/down) - Slowed down
                        targetRotationX = pinchStartScene.rotX + (deltaY * Math.PI * 0.4);
                    }
                } else {
                    isPinching = false;
                }
            } else {
                isPinching = false;
            }

            const indexMCP = hand[5];
            const pinkyMCP = hand[17];
            const padding = 0.1;
            const inSafeZone = (
                indexMCP.x > padding && indexMCP.x < (1 - padding) &&
                indexMCP.y > padding && indexMCP.y < (1 - padding) &&
                pinkyMCP.x > padding && pinkyMCP.x < (1 - padding) &&
                pinkyMCP.y > padding && pinkyMCP.y < (1 - padding)
            );

            if (inSafeZone) {
                let currentFlipped = (handedness === "Right") ? indexMCP.x > pinkyMCP.x : indexMCP.x < pinkyMCP.x;
                if (currentFlipped !== isTextState && !isAnimatingTransition) {
                    flipCounter++;
                    if (flipCounter >= FLIP_THRESHOLD) {
                        triggerTransition(currentFlipped);
                        flipCounter = 0;
                    }
                } else flipCounter = 0;
            } else flipCounter = 0;
        } else flipCounter = 0;
    }
    requestAnimationFrame(predictWebcam);
}

// --- Scene Objects ---
scene.add(new THREE.AmbientLight(0xffffff, 0.2));
const sunLight = new THREE.PointLight(CONFIG.sunColor, 1500, 300);
scene.add(sunLight);

const sunGroup = new THREE.Group();
const sunMesh = new THREE.Mesh(
    new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshStandardMaterial({ color: CONFIG.sunColor, emissive: CONFIG.sunColor, emissiveIntensity: 5 })
);
sunMesh.layers.enable(BLOOM_LAYER);
sunGroup.add(sunMesh);
scene.add(sunGroup);

// --- 100k Stars ---
const starGeometry = new THREE.SphereGeometry(CONFIG.starSize, 4, 4);
const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.3 });
const stars = new THREE.InstancedMesh(starGeometry, starMaterial, CONFIG.starCount);
stars.layers.enable(BLOOM_LAYER);

const dummy = new THREE.Object3D();
const starPositions = { universe: [], text: [] };
const starCurrentPositions = [];

for (let i = 0; i < CONFIG.starCount; i++) {
    const radius = 10 + Math.random() * 70;
    const angle = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 20;
    const ux = Math.cos(angle) * radius;
    const uz = Math.sin(angle) * radius;
    starPositions.universe.push({ x: ux, y: y, z: uz });
    starCurrentPositions.push({ x: ux, y: y, z: uz });
    stars.setColorAt(i, new THREE.Color(CONFIG.starColors[Math.floor(Math.random() * CONFIG.starColors.length)]));
}
scene.add(stars);

// Text Points Sampling
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const w = 2048; const h = 512;
canvas.width = w; canvas.height = h;
ctx.fillStyle = 'black'; ctx.fillRect(0, 0, w, h);
ctx.fillStyle = 'white'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
ctx.font = `bold ${w / 25}px Arial`; ctx.fillText(CONFIG.textLine1, w / 2, h / 2 - 60);
ctx.font = `bold ${w / 40}px Arial`; ctx.fillText(CONFIG.textLine2, w / 2, h / 2 + 80);
const rawPixels = ctx.getImageData(0, 0, w, h).data;
const pixels = [];
for (let py = 0; py < h; py += 4) {
    for (let px = 0; px < w; px += 4) {
        if (rawPixels[(py * w + px) * 4] > 128) pixels.push({ x: (px - w / 2) * 0.08, y: -(py - h / 2) * 0.08 });
    }
}
for (let i = 0; i < CONFIG.starCount; i++) {
    const p = pixels[Math.floor(Math.random() * pixels.length)];
    starPositions.text.push({ x: p.x, y: p.y, z: (Math.random() - 0.5) * CONFIG.thickness + 50 });
}

// --- Anniversary Images ---
const textureLoader = new THREE.TextureLoader();
const imageMeshes = [];
const floatingImageData = [];
const trailStarCount = CONFIG.imageCount * CONFIG.trailLength;
const trailMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.1, 4, 4), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 2, transparent: true, opacity: 0.8 }), trailStarCount);
trailMesh.layers.enable(BLOOM_LAYER);
scene.add(trailMesh);

for (let i = 1; i <= CONFIG.imageCount; i++) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), new THREE.MeshBasicMaterial({ map: textureLoader.load(`assets/images/${i}.jpg`), side: THREE.DoubleSide, transparent: true }));
    const radius = 60 + Math.random() * 15; // 3/4 of universe radius (80)
    const angle = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 30;
    mesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    scene.add(mesh);
    const laneWidth = 240 / CONFIG.imageCount;
    const laneCenterX = -120 + (i - 1) * laneWidth + (laneWidth / 2);
    const startX = laneCenterX + (Math.random() - 0.5) * 10;
    const startZ = (Math.random() - 0.5) * 40;

    imageMeshes.push(mesh);
    floatingImageData.push({
        radius, angle, yOffset: y,
        speed: 0.005 + Math.random() * 0.01,
        riseSpeed: 2 + Math.random() * 4,
        startX,
        startZ,
        laneCenterX,
        delay: 0.1 + Math.random() * 2,
        active: false,
        trailPositions: Array.from({ length: CONFIG.trailLength }, () => new THREE.Vector3())
    });
}

// --- Falling Stars (Text State only) ---
const fallingStarsGeometry = new THREE.SphereGeometry(0.15, 4, 4);
const fallingStarsMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 2, transparent: true, opacity: 0.8 });
const fallingStarsMesh = new THREE.InstancedMesh(fallingStarsGeometry, fallingStarsMaterial, CONFIG.fallingStarsCount);
fallingStarsMesh.layers.enable(BLOOM_LAYER);
scene.add(fallingStarsMesh);

const fallingStarsData = Array.from({ length: CONFIG.fallingStarsCount }, () => ({
    x: (Math.random() - 0.5) * 400,
    y: (Math.random() - 0.5) * 300,
    z: (Math.random() - 0.5) * 100 + 40,
    vx: 0.2 + Math.random() * 0.3,
    vy: -0.2 - Math.random() * 0.3
}));

function triggerTransition(toText) {
    if (isAnimatingTransition) return;
    isAnimatingTransition = true;
    isTextState = toText;
    const targets = toText ? starPositions.text : starPositions.universe;

    // GSAP-driven Image Transitions
    const shuffledIndices = Array.from({ length: CONFIG.imageCount }, (_, i) => i);
    for (let i = shuffledIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
    }

    imageMeshes.forEach((mesh, i) => {
        const data = floatingImageData[i];
        if (toText) {
            // Pick a random lane for the initial launch
            const laneIndex = shuffledIndices[i];
            const laneWidth = 240 / CONFIG.imageCount;
            data.laneCenterX = -120 + laneIndex * laneWidth + (laneWidth / 2);
            data.startX = data.laneCenterX + (Math.random() - 0.5) * 10;

            // GSAP to Bottom (Pre-flight)
            gsap.to(mesh.position, {
                x: data.startX, y: -80, z: data.startZ,
                duration: 1.5, ease: "power2.inOut",
                onComplete: () => { mesh.visible = false; }
            });
            // Sequential Stagger Delay based on shuffled order
            const orderIndex = shuffledIndices.indexOf(i);
            data.active = false;
            data.delay = 1 + orderIndex * 2 + Math.random();
        } else {
            // GSAP back to Universe: Structured shell on the outer edge (60-80 radius)
            const radius = 60 + (i * 2);
            const angle = (i / CONFIG.imageCount) * Math.PI * 2;
            const y = (Math.random() - 0.5) * 20;

            data.radius = radius;
            data.angle = angle;
            data.yOffset = y;
            data.active = false;

            mesh.visible = true;
            gsap.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 1 });
            gsap.to(mesh.position, {
                x: Math.cos(angle) * radius, y: y, z: Math.sin(angle) * radius,
                duration: 2, ease: "power3.out"
            });
        }
    });

    targets.forEach((target, i) => {
        gsap.to(starCurrentPositions[i], { x: target.x, y: target.y, z: target.z, duration: CONFIG.transitionDuration, ease: "power4.inOut", delay: Math.random() * 0.5, onComplete: i === CONFIG.starCount - 1 ? () => isAnimatingTransition = false : null });
    });
    gsap.to(sunGroup.scale, { x: toText ? 0 : 1, y: toText ? 0 : 1, z: toText ? 0 : 1, duration: 2 });
    gsap.to(sunLight, { intensity: toText ? 0 : 1500, duration: 2 });
    if (toText) { targetCameraZ = 100; targetRotationY = 0; targetRotationX = 0; }
}

function animate() {
    if (!isAnimatingTransition && !isTextState && !isMouseDragging) {
        currentRotationY += (targetRotationY - currentRotationY) * 0.05;
        currentRotationX += (targetRotationX - currentRotationX) * 0.05;
        scene.rotation.y = currentRotationY;
        scene.rotation.x = currentRotationX;
        camera.position.z += (targetCameraZ - camera.position.z) * 0.03;
    } else if (isTextState && !isMouseDragging) {
        scene.rotation.y *= 0.9; scene.rotation.x *= 0.9;
        camera.position.z += (100 - camera.position.z) * 0.05;
    }

    for (let i = 0; i < CONFIG.starCount; i++) {
        const p = starCurrentPositions[i];
        dummy.position.set(p.x, p.y, p.z);
        dummy.updateMatrix();
        stars.setMatrixAt(i, dummy.matrix);
    }
    stars.instanceMatrix.needsUpdate = true;

    for (let i = 0; i < CONFIG.fallingStarsCount; i++) {
        const d = fallingStarsData[i];
        if (isTextState) {
            d.x += d.vx;
            d.y += d.vy;
            if (d.x > 200 || d.y < -150) {
                d.x = -200 + Math.random() * 50;
                d.y = 150 + Math.random() * 50;
            }
            dummy.position.set(d.x, d.y, d.z);
            dummy.scale.setScalar(1);
        } else {
            dummy.scale.setScalar(0);
        }
        dummy.updateMatrix();
        fallingStarsMesh.setMatrixAt(i, dummy.matrix);
    }
    fallingStarsMesh.instanceMatrix.needsUpdate = true;

    let trailGlobalIndex = 0;
    for (let i = 0; i < CONFIG.imageCount; i++) {
        const mesh = imageMeshes[i];
        const data = floatingImageData[i];
        if (!isTextState) {
            // Universe State: Static positions (set during init), just billboard
            mesh.visible = true;
        } else {
            if (!data.active) {
                if (!isAnimatingTransition) {
                    if (data.delay > 0) data.delay -= 0.016;
                    else {
                        data.active = true;
                        mesh.visible = true;
                        mesh.scale.setScalar(0);
                        gsap.to(mesh.scale, { x: 3.5, y: 3.5, z: 3.5, duration: 1, ease: "back.out(1.7)" });
                        mesh.position.set(data.startX, -70, data.startZ);
                    }
                }
            } else {
                mesh.position.y += data.riseSpeed * 0.016;
                // Start scaling out as it nears the top
                if (mesh.position.y > 40 && mesh.material.opacity > 0 && !data.isScalingOut) {
                    data.isScalingOut = true;
                    gsap.to(mesh.material, {
                        opacity: 0, duration: 1, onComplete: () => {
                            mesh.material.opacity = 1;
                            mesh.position.y = -100;
                            // Pick a NEW random lane for variety
                            const laneIndex = Math.floor(Math.random() * CONFIG.imageCount);
                            const laneWidth = 240 / CONFIG.imageCount;
                            data.laneCenterX = -120 + laneIndex * laneWidth + (laneWidth / 2);
                            mesh.position.x = data.laneCenterX + (Math.random() - 0.5) * 10;
                            mesh.position.z = (Math.random() - 0.5) * 40;
                            data.isScalingOut = false;
                            data.active = false; // Prepare to re-stagger (or set active true for instant loop)
                            data.delay = 1 + Math.random() * 2;
                        }
                    });
                }
            }
        }
        if (mesh.visible) mesh.lookAt(camera.position);

        // Trail Logic
        if (isTextState) {
            // In text view, trail is strictly behind (below) the image
            for (let j = 0; j < CONFIG.trailLength; j++) {
                dummy.position.copy(mesh.position);
                dummy.position.y -= j * 0.5; // Stream downwards
                dummy.position.z -= 0.1; // Slightly behind plane
                dummy.scale.setScalar((1.0 - (j / CONFIG.trailLength)) * 1.5);
                dummy.updateMatrix();
                trailMesh.setMatrixAt(trailGlobalIndex++, dummy.matrix);
            }
        } else {
            // In universe view, use old billboarding trail logic
            for (let j = CONFIG.trailLength - 1; j > 0; j--) data.trailPositions[j].copy(data.trailPositions[j - 1]);
            data.trailPositions[0].copy(mesh.position);
            for (let j = 0; j < CONFIG.trailLength; j++) {
                const tPos = data.trailPositions[j];
                dummy.position.copy(tPos);
                dummy.scale.setScalar(1.0 - (j / CONFIG.trailLength));
                dummy.updateMatrix();
                trailMesh.setMatrixAt(trailGlobalIndex++, dummy.matrix);
            }
        }
    }
    trailMesh.instanceMatrix.needsUpdate = true;
    if (isMouseDragging) controls.update();

    // Selective Bloom Render Loop
    scene.traverse(darkenNonBloom);
    bloomComposer.render();
    scene.traverse(restoreMaterial);

    finalComposer.render();
    requestAnimationFrame(animate);
}

function darkenNonBloom(obj) {
    if (obj.isMesh && bloomLayer.test(obj.layers) === false) {
        materials[obj.uuid] = obj.material;
        obj.material = darkMaterial;
    }
}

function restoreMaterial(obj) {
    if (materials[obj.uuid]) {
        obj.material = materials[obj.uuid];
        delete materials[obj.uuid];
    }
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
});

initHands();
animate();
