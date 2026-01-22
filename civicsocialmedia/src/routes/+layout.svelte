<script>
	import '$lib/assets/styles/stylesheet.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	export let children;
</script>

<Header />

<main>
	{@render children?.()}
</main>

<Footer />
