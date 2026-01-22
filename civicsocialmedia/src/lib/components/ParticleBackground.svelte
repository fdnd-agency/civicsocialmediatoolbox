<script>
// @ts-nocheck
import { onMount, onDestroy } from 'svelte';

/** @type {any} */
let THREE = null;
/** @type {any} */
let camera;
/** @type {any} */
let scene;
/** @type {any} */
let renderer;
/** @type {any} */
let particles;
/** @type {any} */
let overlayEl;
let count = 0;
let mouseX = 0, mouseY = 0;
let windowHalfX = 0, windowHalfY = 0;

export let speed = 0.03;
export let mouseControl = false;

const SEPARATION = 100, AMOUNTX = 60, AMOUNTY = 45;

const vertexShader = `
attribute float scale;
void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = scale * ( 250.0 / - mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;
}`;

const fragmentShader = `
uniform vec3 color;
void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float thickness = 0.12;
    float halfLength = 0.45;
    float v = smoothstep(thickness + 0.02, thickness - 0.02, abs(uv.x)) *
              smoothstep(halfLength + 0.02, halfLength - 0.02, abs(uv.y));
    float h = smoothstep(thickness + 0.02, thickness - 0.02, abs(uv.y)) *
              smoothstep(halfLength + 0.02, halfLength - 0.02, abs(uv.x));
    float alpha = max(v, h);
    if (alpha <= 0.01) discard;
    gl_FragColor = vec4(color, alpha);
}`;

function init() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    const width = window.innerWidth;
    const height = window.innerHeight * 0.5;

    camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
    camera.position.z = 1000;

    scene = new THREE.Scene();

    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    let i = 0, j = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
            positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
            positions[i + 1] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
            positions[i + 2] = 0;
            scales[j] = 1;
            i += 3;
            j++;
        }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const material = new THREE.ShaderMaterial({
        uniforms: {
            color: { value: new THREE.Color(0xffd700) }
        },
        vertexShader,
        fragmentShader,
        transparent: true,
        depthTest: false,
        blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.setAnimationLoop(animate);

    overlayEl = document.createElement('div');
    overlayEl.className = 'particle-bg-overlay';
    overlayEl.appendChild(renderer.domElement);
    document.body.appendChild(overlayEl);

    window.addEventListener('resize', onWindowResize);
    if (mouseControl) window.addEventListener('pointermove', onPointerMove);
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    const width = window.innerWidth;
    const height = window.innerHeight * 0.5;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

/** @param {any} event */
function onPointerMove(event) {
    if (event.isPrimary === false) return;
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
}

function animate() {
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    if (mouseControl) {
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
    }
    camera.lookAt(scene.position);

    const positions = particles.geometry.attributes.position.array;
    const scales = particles.geometry.attributes.scale.array;
    const basePositions = particles.geometry.attributes.position.array.slice();

    let i = 0, j = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
            const z = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
            positions[i + 2] = z;
            scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 20 + (Math.sin((iy + count) * 0.5) + 1) * 20;
            i += 3;
            j++;
        }
    }

    particles.geometry.attributes.position.needsUpdate = true;
    particles.geometry.attributes.scale.needsUpdate = true;
    renderer.render(scene, camera);
    count += speed;
}

function cleanup() {
    if (typeof window === 'undefined') return;
    
    if (renderer) renderer.setAnimationLoop(null);
    window.removeEventListener('resize', onWindowResize);
    if (mouseControl) window.removeEventListener('pointermove', onPointerMove);
    
    if (particles) {
        particles.geometry.dispose();
        particles.material.dispose();
        scene.remove(particles);
    }
    if (renderer) {
        renderer.dispose();
    }
    if (overlayEl?.parentNode) {
        overlayEl.parentNode.removeChild(overlayEl);
    }
}

onMount(async () => {
    const mod = await import('three');
    THREE = mod;
    init();
});

onDestroy(() => {
    cleanup();
});
</script>

<style>
:global(.particle-bg-overlay) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
}

:global(.particle-bg-overlay canvas) {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
