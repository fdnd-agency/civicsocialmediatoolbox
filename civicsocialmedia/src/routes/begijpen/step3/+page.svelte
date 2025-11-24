<script>
  import ProgressStepperV2 from '$lib/components/ProgressStepperV2.svelte';
  export let data;
  const toolkitItems = data.toolkitItems ?? [];

  const currentStep = 3; // the current step number the user on it
  const toolkitItem = toolkitItems.find(i => Number(i.id) === currentStep) ?? null;
</script>
<main>
<ProgressStepperV2 {currentStep} />

{#if toolkitItem}
  <h1>1. {toolkitItem.title}</h1>
  <p>{toolkitItem.subtitle}</p>
{:else}
  <p>Geen data gevonden voor deze stap.</p>
{/if}

  
</main>

<style>
    main {
        padding: 2em;
    }

    h2{
        padding-left: .5em;
    }
    
</style>
