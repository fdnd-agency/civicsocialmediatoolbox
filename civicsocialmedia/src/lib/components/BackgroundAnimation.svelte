<script>
/**
 * This is a Svelte component that creates a cool background animation with particles.
 * It uses Three.js to make a bunch of plus-shaped particles that move like waves.
 * The particles are gold colored and look like they're floating in 3D space.
 * This component is for making the background look fancy on a webpage.
 * insperation: https://threejs.org/examples/#webgl_points_waves
 */

import { onMount, onDestroy } from 'svelte';
/** @type {any} */
let THREE = null;

/** @type {HTMLElement | null} */
let container = null;

/** @type {any | null} */
let camera = null;
/** @type {any | null} */
let scene = null;
/** @type {any | null} */
let renderer = null;
/** @type {any | null} */
let particles = null;
/** @type {Float32Array | null} */
let basePositions = null;

let count = 0;
/**
 * Animation speed (how much `count` increases each frame). Lower = slower.
 * Exported so parent components can bind to it: <ParticleBackground bind:speed />
 */
export let speed = 0.03;
/**
 * Whether pointer movement should affect the camera. Set to false to disable mouse interaction.
 */
export let mouseControl = false;
const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
/** @type {number} */
let windowHalfX = 0, windowHalfY = 0;
/** @type {number} */
let mouseX = 0, mouseY = 0;

/**
 * This is the vertex shader code. It's like a small program that runs on the GPU.
 * It tells how to draw each particle point. It makes the points bigger or smaller based on distance.
 */
const vertexShader = `attribute float scale;

void main() {

    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

    gl_PointSize = scale * ( 300.0 / - mvPosition.z );

    gl_Position = projectionMatrix * mvPosition;

}`;

/**
 * This is the fragment shader code. It decides the color and shape of each particle.
 * It draws a plus '+' shape inside each point, with soft edges using smoothstep.
 */
const fragmentShader = `uniform vec3 color;

// Render a plus '+' shape inside the point sprite using smoothstep for soft edges.
void main() {
    // uv coordinates centered in [-0.5, 0.5]
    vec2 uv = gl_PointCoord - vec2(0.5);

    // parameters controlling plus thickness and arm length
    float thickness = 0.12; // half-thickness of the bars
    float halfLength = 0.45; // how far arms extend from center (0..0.5)

    // vertical bar alpha
    float v = smoothstep(thickness + 0.02, thickness - 0.02, abs(uv.x)) *
              smoothstep(halfLength + 0.02, halfLength - 0.02, abs(uv.y));

    // horizontal bar alpha
    float h = smoothstep(thickness + 0.02, thickness - 0.02, abs(uv.y)) *
              smoothstep(halfLength + 0.02, halfLength - 0.02, abs(uv.x));

    float alpha = max(v, h);

    if (alpha <= 0.01) discard;

    gl_FragColor = vec4(color, alpha);
}
`;

/**
 * This function sets up everything for the animation.
 * It creates the camera, scene, particles, and renderer.
 * It also adds event listeners for window resize and mouse movement.
 */
function init() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    // remove any leftover overlay elements from previous runs (dev HMR)
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

    // Create a vertical wall: X across, Y down, Z = 0 (depth will be animated)
    for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

        for ( let iy = 0; iy < AMOUNTY; iy ++ ) {

            positions[ i ] = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 ); // x
            positions[ i + 1 ] = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 ); // y
            positions[ i + 2 ] = 0; // z (depth) — we'll animate this to give wall effect

            scales[ j ] = 1;

            i += 3;
            j ++;

        }

    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
    geometry.setAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) );
    // keep a copy of the original positions so we can create radial/spherical motion
    basePositions = new Float32Array( positions );

    const material = new THREE.ShaderMaterial( {

        uniforms: {
            color: { value: new THREE.Color( 0xffd700 ) },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
        depthTest: false,
        blending: THREE.AdditiveBlending

    } );

    particles = new THREE.Points( geometry, material );
    scene.add( particles );

    // ensure the container is in-flow and positioned properly so it scrolls with the page
    try {
        if ( container ) {
            container.style.position = 'relative';
            container.style.top = '0px';
            container.style.left = '0px';
            container.style.width = '100%';
            container.style.pointerEvents = 'none';
        }
    } catch (e) {
        // ignore
    }

    // use a transparent background so the page background shows through
    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    // size the renderer to the container (we render only in the top 30% area)
    const width = container ? container.clientWidth : window.innerWidth;
    const height = container ? container.clientHeight : window.innerHeight;
    renderer.setSize( width, height );
    // make sure clear alpha is 0 so canvas is transparent
    renderer.setClearColor( 0x000000, 0 );
    // ensure the canvas sits correctly inside the container
    if ( renderer.domElement ) {
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        renderer.domElement.style.display = 'block';
    }
    // use animation loop so Svelte/HMR won't conflict with rAF cleanup
    renderer.setAnimationLoop( animate );
    // append canvas into the component container so it stays in-page and scrolls with content
    if ( container ) container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize );
    if ( mouseControl ) window.addEventListener( 'pointermove', onPointerMove );
}

/**
 * This function is called when the window is resized.
 * It updates the camera and renderer to match the new window size.
 */
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    // recompute based on the container height (since it's 50% of viewport)
    const width = container ? container.clientWidth : window.innerWidth;
    const height = container ? container.clientHeight : window.innerHeight;

    windowHalfX = width / 2;
    windowHalfY = height / 2;

    if ( camera ) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    if ( renderer ) renderer.setSize( width, height );

    // nothing else to update — renderer is appended to the in-flow container which will scroll with the page
}

/** @param {PointerEvent|any} event */
function onPointerMove( event ) {
    if ( event.isPrimary === false ) return;
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
}

/**
 * This is the animation loop function. It calls render every frame.
 */
function animate() {
    render();
}

/**
 * This function updates the positions and scales of the particles each frame.
 * It makes them move in waves and changes their size.
 * Then it renders the scene with the camera.
 */
function render() {
    if ( !camera || !particles ) return;
    if ( !basePositions ) return;

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

                // Wall-style motion: keep X and Y from basePositions, animate Z (depth)
                const bx = basePositions[ i ];
                const by = basePositions[ i + 1 ];

                // similar wave behavior as the original example but on depth axis
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

/**
 * This function cleans up everything when the component is destroyed.
 * It removes event listeners, disposes of Three.js objects, and removes the canvas from the DOM.
 */
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
        // nothing extra to remove — renderer DOM element was removed above
    } catch (e) {
        // ignore cleanup errors
        console.warn('ParticleBackground cleanup error', e);
    }
}

onMount(async () => {
    // import three only in the browser to avoid SSR/runtime errors
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
/* This is the CSS for the particle background container.
   It positions the div absolutely so the Three.js canvas can be inside it.
   The height is 30% of the viewport height, and it's at the top.
   It has a z-index of 0 so it's behind other content.
   Pointer events are none so clicks go through to the page.
   Overflow is hidden to clip anything outside.
   Background is transparent so the page shows through. */
.particle-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 30vh;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
    background: transparent;
}

/* This sets a CSS variable for how deep the cut is in the clip-path. */
:root {
    /* default cut depth relative to container height */
    --particle-cut-depth: 12%;
}
/* This clip-path makes the background have a wavy bottom edge.
   It creates a polygon shape that cuts into the bottom like a mountain range.
   This makes the particle background look like it's behind a wavy foreground. */
.particle-bg {
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

</style>
