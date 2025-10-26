<script>
  // SvelteKit navigate helper (used when a step has an href)
  import { goto } from '$app/navigation';


  import StepLogo from '$lib/components/StepLogo.svelte';            
  import StepLogoProgress from '$lib/components/StepLogoProgress.svelte'; 


  // steps = array 
  export let steps = [];
  // current = which step we are on 
  export let current = 0;

  // Reactive progress value f in [0..1]
  // - 0 when at first step
  // - 1 when at last step
  // Used by CSS to set the green line width.
  $: f = steps.length > 1 ? current / (steps.length - 1) : 0;

  // Click handler: if the step has a link, go there.
  function go(i) {
    const s = steps[i];
    if (s && s.href) goto(s.href);
  }
</script>

<!-- 
     The  grey line and the green progress fill are drawn in CSS on .list
     using ::before (grey rail) and ::after (blue fill). We pass progress via --f. -->
<nav class="stepper">
  <ul class="list" style="--f:{f}">
    {#each steps as step, i}
      <li>
        
        <button
          class="btn {i <= current ? 'on' : ''}"
          type="button"
          on:click={() => go(i)}
        >
          <!-- Show the checked logo for done/current steps; otherwise show the base logo. -->
          {#if i <= current}
            <StepLogoProgress />
          {:else}
            <StepLogo />
          {/if}
        </button>
      </li>
    {/each}
  </ul>
</nav>


