<script>

    import Cards from '$lib/components/Cards.svelte';
    import ProgressStepper from '$lib/components/ProgressStepper.svelte';
    let { data } = $props();

    const steps = [
        { href: '/begijpen/step1' },
        { href: '/begijpen/step2' },
        { href: '/begijpen/step3' },
    ];
    const current = 1; // we are on step 2
    const cards = data.cards;
</script>

<main>

    <h2>1. Begrijpen</h2>

    <ProgressStepper {steps} {current} />
    <p>Verken de 6 community archetypes en de bijbehorende behoeften van communities en organisaties, daarna  kies 1 of 2 archetypes die het beste passen bij jou community en/of organisatie.</p>
    <Cards cards={data.cards} />

</main>

<style>
    main {
        padding: 3em;
    }

    h2{
        text-align: left;
        padding-left: .5em;
    }
    
    p{
        padding-left: 1em;
    }

</style>