<script>
	import BackgroundAnimation from '$lib/components/effects/BackgroundAnimation.svelte';
	// local binding for the animation speed (default matches component default)
	let speed = 0.03;
</script>

<BackgroundAnimation bind:speed />

<main style="position:relative; z-index:1; padding:4rem; color:var(--text,#111);">
	<h1>Three.js particle background — test page</h1>
	<p>This page demonstrates the particle waves background. Content sits above the animation.</p>

	<section style="margin-top:2rem;">
		<label for="speed">Animation speed: {speed.toFixed(3)}</label>
		<input id="speed" type="range" min="0" max="0.2" step="0.005" bind:value={speed} style="width:100%;" />
		<div style="font-size:0.9rem; color:var(--muted,#666); margin-top:0.5rem;">Drag to slow down or speed up the animation. 0 = paused.</div>
	</section>
</main>