<script>
// @ts-nocheck
// Background animation with gold plus particles
// Based on: https://threejs.org/examples/#webgl_points_waves

import { onMount, onDestroy } from 'svelte';

let THREE = null;
let container = null;
let camera = null;
let scene = null;
let renderer = null;
let particles = null;
let basePositions = null;

let count = 0;
export let speed = 0.03;
export let mouseControl = false;

const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
let windowHalfX = 0, windowHalfY = 0;
let mouseX = 0, mouseY = 0;

// Vertex shader - makes points bigger/smaller based on distance
const vertexShader = `attribute float scale;

void main() {

    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

    gl_PointSize = scale * ( 300.0 / - mvPosition.z );

    gl_Position = projectionMatrix * mvPosition;

}`;

// Fragment shader - draws plus '+' shape for each particle
const fragmentShader = `uniform vec3 color;

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
}
`;

function init() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    // Clean up any old overlays
    try {
        const existing = document.querySelectorAll('.particle-bg-overlay');
        existing.forEach((el) => el.parentNode && el.parentNode.removeChild(el));
    } catch (e) {}

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;

    scene = new THREE.Scene();

    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array( numParticles * 3 );
    const scales = new Float32Array( numParticles );

    let i = 0, j = 0;

    // Create particle grid
    for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
        for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
            positions[ i ] = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
            positions[ i + 1 ] = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
            positions[ i + 2 ] = 0;
            scales[ j ] = 1;
            i += 3;
            j ++;
        }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
    geometry.setAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) );
    basePositions = new Float32Array( positions );

    const material = new THREE.ShaderMaterial( {
        uniforms: { color: { value: new THREE.Color( 0xffd700 ) } },
        vertexShader,
        fragmentShader,
        transparent: true,
        depthTest: false,
        blending: THREE.AdditiveBlending
    } );

    particles = new THREE.Points( geometry, material );
    scene.add( particles );

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight * 0.3 );
    renderer.setClearColor( 0x000000, 0 );
    renderer.setAnimationLoop( animate );
    
    // Append to body so it dont take space
    try {
        const overlayEl = document.createElement('div');
        overlayEl.className = 'particle-bg-overlay';
        overlayEl.appendChild( renderer.domElement );
        document.body.appendChild( overlayEl );
    } catch (e) {
        if ( container ) container.appendChild( renderer.domElement );
    }

    window.addEventListener( 'resize', onWindowResize );
    if ( mouseControl ) window.addEventListener( 'pointermove', onPointerMove );
}

function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight * 0.3;

    windowHalfX = width / 2;
    windowHalfY = height / 2;

    if ( camera ) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
    if ( renderer ) renderer.setSize( width, height );
}

function onPointerMove( event ) {
    if ( event.isPrimary === false ) return;
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
}

function animate() {
    render();
}

function render() {
    if ( !camera || !particles || !basePositions ) return;

    camera.position.x += ( mouseX - camera.position.x ) * .05;
    if ( mouseControl ) {
        camera.position.y += ( - mouseY - camera.position.y ) * .05;
    }
    camera.lookAt( scene.position );

    const positions = particles.geometry.attributes.position.array;
    const scales = particles.geometry.attributes.scale.array;

    let i = 0, j = 0;

    for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
        for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
            const bx = basePositions[ i ];
            const by = basePositions[ i + 1 ];
            const z = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
                      ( Math.sin( ( iy + count ) * 0.5 ) * 50 );

            positions[ i ] = bx;
            positions[ i + 1 ] = by;
            positions[ i + 2 ] = z;

            scales[ j ] = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 20 +
                          ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 20;

            i += 3;
            j ++;
        }
    }

    particles.geometry.attributes.position.needsUpdate = true;
    particles.geometry.attributes.scale.needsUpdate = true;

    renderer.render( scene, camera );
    count += speed;
}

function cleanup() {
    try {
        if ( renderer ) renderer.setAnimationLoop( null );
        window.removeEventListener( 'resize', onWindowResize );
        if ( mouseControl ) window.removeEventListener( 'pointermove', onPointerMove );

        if ( particles ) {
            particles.geometry.dispose();
            if ( particles.material ) particles.material.dispose();
            scene.remove( particles );
            particles = null;
        }

        if ( renderer ) {
            if ( renderer.domElement && renderer.domElement.parentNode ) {
                renderer.domElement.parentNode.removeChild( renderer.domElement );
            }
            renderer.dispose();
            renderer = null;
        }

        camera = null;
        scene = null;
    } catch (e) {
        console.warn('BackgroundAnimation cleanup error', e);
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

<div class="particle-bg" bind:this={container} aria-hidden="true"></div>

<style>
.particle-bg {
    display: none !important;
}

:global(body > .particle-bg-overlay) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30vh;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
    background: transparent;
}

:root {
    --particle-cut-depth: 12%;
}

/* Wavy bottom edge */
:global(body > .particle-bg-overlay) {
    --notchY: calc(100% - var(--particle-cut-depth));
    clip-path: polygon(
        0 0,
        100% 0,
        100% var(--notchY),
        90% var(--notchY),
        85% 100%,
        60% var(--notchY),
        50% 100%,
        40% var(--notchY),
        15% var(--notchY),
        10% 100%,
        0 var(--notchY)
    );
}

:global(body > .particle-bg-overlay > canvas) {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
