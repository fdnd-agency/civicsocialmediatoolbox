<script>
	import '$lib/assets/styles/stylesheet.css';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import { onMount } from "svelte";
  	import { gsap } from "gsap";
  	import SplitText from "gsap/SplitText";

	export let children;


	onMount(() => {
		let split = new SplitText(".intro-text", { type: "chars" });
		const tl = gsap.timeline();
		
		tl.from(split.chars, {
		duration: 1,
		opacity: 0,
		y: 50,
		stagger: 0.05, //https://gsap.com/resources/getting-started/Staggers/
		ease: "power2.out" 
		})

		.to('.intro', {
			autoAlpha: 0, 
			duration: 1,
			ease: 'power4.out'
		})

	});
</script>

<Header />

<main>
	{@render children?.()}
	<section class="intro">
		<h1 class="intro-text">Civic Social Media</h1>
	</section>
</main>

<Footer />
