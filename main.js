import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Text } from 'troika-three-text';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import gsap from 'gsap';

// --- Configuration ---
const CONFIG = {
    starCount: 100000,
    textLine1: "Happy 1st Wedding Anniversary",
    textLine2: "05/01/2024 - 05/01/2025",
    transitionDuration: 3,
    sunColor: 0xffcc33,
    starColors: ['#ffffff', '#ffd700', '#6366f1', '#a855f7', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
    thickness: 0.7,
    fontSize1: 6,
    fontSize2: 3,
    starSize: 0.05,
    defaultCameraZ: 80,
    zoomedInZ: 40,
    zoomedOutZ: 120
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
const FLIP_THRESHOLD = 15; // Number of frames to stabilize flip

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

// --- Post-Processing ---
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 0.4, 0.85);
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);

// Enable OrbitControls
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
    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );
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

let lastWasFlipped = false;

function predictWebcam() {
    if (handLandmarker && video.readyState >= 2) {
        const results = handLandmarker.detectForVideo(video, performance.now());
        if (results.landmarks && results.landmarks.length > 0) {
            const hand = results.landmarks[0];
            const handedness = results.handednesses[0][0].label;

            if (!isMouseDragging && !isAnimatingTransition) {
                // Reverted X mapping: 0.5 - handX
                const handX = hand[0].x;
                const handY = hand[0].y;

                targetRotationY = (0.5 - handX) * Math.PI * 1.5;
                targetRotationX = (handY - 0.5) * Math.PI * 0.5;

                // Zoom Tracking
                const wrist = hand[0];
                const middleTip = hand[12];
                const dist = Math.sqrt(Math.pow(middleTip.y - wrist.y, 2) + Math.pow(middleTip.x - wrist.x, 2));
                if (dist > 0.4) {
                    targetCameraZ = CONFIG.zoomedInZ;
                } else if (dist < 0.2) {
                    targetCameraZ = CONFIG.zoomedOutZ;
                } else {
                    targetCameraZ = CONFIG.defaultCameraZ;
                }
            }

            // 3. Stabilized Flip Detection (Backhand vs Palm)
            // Using MCP joints (5 and 17) for better stability
            const indexMCP = hand[5];
            const pinkyMCP = hand[17];

            // Boundary Guard: Only process flip if hand is in the "Safe Zone" (center 80% of frame)
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
                } else {
                    flipCounter = 0;
                }
            } else {
                // Reset counter if hand leaves the safe zone to prevent edge-triggers
                flipCounter = 0;
            }
        } else {
            // Reset counter if no hand is detected
            flipCounter = 0;
        }
    }
    requestAnimationFrame(predictWebcam);
}

// --- Scene Objects ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const sunLight = new THREE.PointLight(CONFIG.sunColor, 1500, 300);
scene.add(sunLight);

const sunGroup = new THREE.Group();
const sunMesh = new THREE.Mesh(
    new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshStandardMaterial({ color: CONFIG.sunColor, emissive: CONFIG.sunColor, emissiveIntensity: 5 })
);
sunGroup.add(sunMesh);
scene.add(sunGroup);

const starGeometry = new THREE.SphereGeometry(CONFIG.starSize, 4, 4);
const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.3 });
const stars = new THREE.InstancedMesh(starGeometry, starMaterial, CONFIG.starCount);

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

    const color = new THREE.Color(CONFIG.starColors[Math.floor(Math.random() * CONFIG.starColors.length)]);
    stars.setColorAt(i, color);
}

// Text Generation
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const w = 2048; const h = 512;
canvas.width = w; canvas.height = h;
ctx.fillStyle = 'black'; ctx.fillRect(0, 0, w, h);
ctx.fillStyle = 'white'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
ctx.font = `bold ${w / 25}px Arial`; ctx.fillText(CONFIG.textLine1, w / 2, h / 2 - 60);
ctx.font = `bold ${w / 40}px Arial`; ctx.fillText(CONFIG.textLine2, w / 2, h / 2 + 80);
const imageData = ctx.getImageData(0, 0, w, h).data;
const pixels = [];
for (let py = 0; py < h; py += 4) {
    for (let px = 0; px < w; px += 4) {
        if (imageData[(py * w + px) * 4] > 128) {
            pixels.push({ x: (px - w / 2) * 0.08, y: -(py - h / 2) * 0.08 });
        }
    }
}
for (let i = 0; i < CONFIG.starCount; i++) {
    const p = pixels[Math.floor(Math.random() * pixels.length)];
    starPositions.text.push({
        x: p.x, y: p.y, z: (Math.random() - 0.5) * CONFIG.thickness + 50
    });
}
scene.add(stars);

function triggerTransition(toText) {
    if (isAnimatingTransition) return;
    isAnimatingTransition = true;
    isTextState = toText;
    const targets = toText ? starPositions.text : starPositions.universe;

    targets.forEach((target, i) => {
        gsap.to(starCurrentPositions[i], {
            x: target.x, y: target.y, z: target.z,
            duration: CONFIG.transitionDuration, ease: "power4.inOut",
            delay: Math.random() * 0.5,
            onComplete: i === CONFIG.starCount - 1 ? () => { isAnimatingTransition = false; } : null
        });
    });

    gsap.to(sunGroup.scale, { x: toText ? 0 : 1, y: toText ? 0 : 1, z: toText ? 0 : 1, duration: 2 });
    gsap.to(sunLight, { intensity: toText ? 0 : 1500, duration: 2 });

    if (toText) {
        targetCameraZ = 100;
        targetRotationY = 0;
        targetRotationX = 0;
    }
}

function animate() {
    if (!isAnimatingTransition && !isTextState && !isMouseDragging) {
        // Smoother interpolation for hand control
        currentRotationY += (targetRotationY - currentRotationY) * 0.05;
        currentRotationX += (targetRotationX - currentRotationX) * 0.05;
        scene.rotation.y = currentRotationY;
        scene.rotation.x = currentRotationX;

        camera.position.z += (targetCameraZ - camera.position.z) * 0.03;
    } else if (isTextState && !isMouseDragging) {
        scene.rotation.y *= 0.9;
        scene.rotation.x *= 0.9;
        camera.position.z += (100 - camera.position.z) * 0.05;
    }

    for (let i = 0; i < CONFIG.starCount; i++) {
        const p = starCurrentPositions[i];
        dummy.position.set(p.x, p.y, p.z);
        dummy.updateMatrix();
        stars.setMatrixAt(i, dummy.matrix);
    }

    stars.instanceMatrix.needsUpdate = true;
    if (isMouseDragging) {
        controls.update();
    }
    composer.render();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
});

initHands();
animate();
