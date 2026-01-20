<script>
  import ProgressStepperV2 from '$lib/components/ProgressStepperV2.svelte';
  import Cards from '$lib/components/Cards.svelte';
  export let data;

  const toolkitItems = data.toolkitItems ?? [];
  const cards = data.cards;
  const currentStep = 2; // the current step number the user on it
  const toolkitItem = toolkitItems.find(i => Number(i.id) === currentStep) ?? null;
</script>

<main>
  <ProgressStepperV2 {currentStep} />
    <h2>1. Begrijpen</h2>
    <p>Verken de 6 community archetypes en de bijbehorende behoeften van communities en organisaties, daarna  kies 1 of 2 archetypes die het beste passen bij jou community en/of organisatie.</p>
  <Cards cards={data.cards} />
</main>

<style>
main {
    padding: 3em;
}

h2 {
    text-align: left;
    padding-left: .5em;
}

p {
    padding-left: 1em;
}
/* @media (prefers-color-scheme: dark) {
    main {
        background-color: var(--neutral-color-black);
    }
} */
</style>

