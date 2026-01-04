import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Text } from 'troika-three-text';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import gsap from 'gsap';

// --- Configuration ---
const CONFIG = {
    starCount: 100000,
    textLine1: "Happy 1st Wedding Anniversary",
    textLine2: "05/01/2024 - 05/01/2025",
    transitionDelay: 5,
    transitionDuration: 3,
    sunColor: 0xffcc33,
    starColors: ['#ffffff', '#ffd700', '#6366f1', '#a855f7', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#000000', '#ffffff', '#ffd700', '#6366f1', '#a855f7', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#000000'],
    thickness: 0.7,
    fontSize1: 6,
    fontSize2: 4,
    debugMode: false,
    starSize: 0.05 // Decreased particle size
};

// --- Scene Setup ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020617);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 70);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#three-canvas'),
    antialias: true,
    powerPreference: "high-performance"
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ReinhardToneMapping;

// --- Post-Processing ---
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
bloomPass.threshold = 0.2;
bloomPass.strength = 1.2;
bloomPass.radius = 0.5;

const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// --- Lighting ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const pointLights = [];
const lightColors = [0x6366f1, 0xa855f7, 0xffd700];
lightColors.forEach((color, i) => {
    const light = new THREE.PointLight(color, 400, 150);
    light.position.set((i - 1) * 40, (i - 1) * 30, 20);
    scene.add(light);
    pointLights.push(light);
});

const sunLight = new THREE.PointLight(CONFIG.sunColor, 2000, 300);
scene.add(sunLight);

// --- The Sun ---
const sunGroup = new THREE.Group();
const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
const sunMaterial = new THREE.MeshStandardMaterial({
    color: CONFIG.sunColor,
    emissive: CONFIG.sunColor,
    emissiveIntensity: 5 // Higher intensity for better bloom
});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
sunGroup.add(sunMesh);

const glowGeometry = new THREE.SphereGeometry(2.3, 32, 32);
const glowMaterial = new THREE.MeshBasicMaterial({
    color: CONFIG.sunColor,
    transparent: true,
    opacity: 0.4
});
const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
sunGroup.add(glowMesh);
scene.add(sunGroup);

// --- Stars (InstancedMesh) ---
const starGeometry = new THREE.SphereGeometry(CONFIG.starSize, 6, 6); // Low segments for 50k particles
const starMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.3
});
const stars = new THREE.InstancedMesh(starGeometry, starMaterial, CONFIG.starCount);

const dummy = new THREE.Object3D();
const starData = [];

for (let i = 0; i < CONFIG.starCount; i++) {
    const radius = 10 + Math.random() * 60;
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.05 + Math.random() * 0.08;
    const yOffset = (Math.random() - 0.5) * 15;

    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    starData.push({ x, y: yOffset, z, radius, angle, speed, yOffset });

    dummy.position.set(x, yOffset, z);
    dummy.updateMatrix();
    stars.setMatrixAt(i, dummy.matrix);

    const color = new THREE.Color(CONFIG.starColors[Math.floor(Math.random() * CONFIG.starColors.length)]);
    stars.setColorAt(i, color);
}
scene.add(stars);

// --- Layout Points ---
function generateTextPoints(text1, text2, count) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const w = 2048;
    const h = 512;
    canvas.width = w;
    canvas.height = h;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.font = `bold ${w / 25}px Arial`;
    ctx.fillText(text1, w / 2, h / 2 - 60);

    ctx.font = `bold ${w / 35}px Arial`;
    ctx.fillText(text2, w / 2, h / 2 + 80);

    const imageData = ctx.getImageData(0, 0, w, h).data;
    const pixels = [];

    for (let y = 0; y < h; y += 2) {
        for (let x = 0; x < w; x += 2) {
            if (imageData[(y * w + x) * 4] > 128) {
                pixels.push({
                    x: (x - w / 2) * 0.07, // Slightly smaller scale for high density
                    y: -(y - h / 2) * 0.07,
                });
            }
        }
    }

    const points = [];
    for (let i = 0; i < count; i++) {
        const pixel = pixels[Math.floor(Math.random() * pixels.length)];
        points.push({
            x: pixel.x,
            y: pixel.y,
            z: (Math.random() - 0.5) * CONFIG.thickness
        });
    }
    return points;
}

const targetPoints = generateTextPoints(CONFIG.textLine1, CONFIG.textLine2, CONFIG.starCount);

// --- Transition ---
let isTransforming = false;

setTimeout(() => {
    isTransforming = true;

    targetPoints.forEach((target, i) => {
        gsap.to(starData[i], {
            x: target.x,
            y: target.y,
            z: target.z,
            duration: CONFIG.transitionDuration,
            ease: "power3.inOut",
            delay: Math.random() * 1.5,
        });
    });

    gsap.to(sunGroup.scale, { x: 0, y: 0, z: 0, duration: 2 });
    gsap.to(sunLight, { intensity: 0, duration: 2 });
    gsap.to(camera.position, { z: 80, duration: 4, ease: "power2.inOut" });
}, CONFIG.transitionDelay * 1000);

// --- Animation Loop ---
const clock = new THREE.Clock();

function animate() {
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    if (!isTransforming) {
        sunGroup.scale.setScalar(1 + Math.sin(elapsed * 2) * 0.05);
        glowMesh.material.opacity = 0.4 + Math.sin(elapsed * 3) * 0.1;

        for (let i = 0; i < CONFIG.starCount; i++) {
            const data = starData[i];
            data.angle += data.speed * delta;
            data.x = Math.cos(data.angle) * data.radius;
            data.z = Math.sin(data.angle) * data.radius;

            dummy.position.set(data.x, data.y, data.z);
            dummy.updateMatrix();
            stars.setMatrixAt(i, dummy.matrix);
        }
    } else {
        for (let i = 0; i < CONFIG.starCount; i++) {
            const data = starData[i];
            dummy.position.set(data.x, data.y, data.z);
            dummy.updateMatrix();
            stars.setMatrixAt(i, dummy.matrix);
        }
    }

    stars.instanceMatrix.needsUpdate = true;
    controls.update();
    composer.render(); // Use composer for post-processing
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    composer.setSize(width, height);
});

animate();
