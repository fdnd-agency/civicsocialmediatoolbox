<script>
  // SvelteKit navigate helper (used when a step has an href)
  import { goto } from '$app/navigation';


  import StepLogo from '$lib/assets/StepLogo.svelte';            
  import StepLogoProgress from '$lib/assets/StepLogoProgress.svelte'; 


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


<style>
  .stepper {
    display: flex;
    justify-content: center;
    padding-top: 5em;
  }

  .list {
    --width: 2rem;   
    --hight: 0.5rem; 

    /* --f comes from inline style (0..1) */

    position: relative;
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;

    /* grey rail: from center of first logo to center of last */
    &::before {
      content: "";
      position: absolute;
      left: calc(var(--width) / 2);
      right: calc(var(--width) / 2);
      top: calc(var(--width) / 2 - var(--height) / 2);
      height: var(--hight);
      background: var(--neutral-color-grey-400);
      border-radius: 999px;
      z-index: 0;
    }

    /* green progress fill, width uses --f  */
    &::after {
      content: "";
      position: absolute;
      left: calc(var(--width) / 2);
      top: calc(var(--width) / 2 - var(--height) / 2);
      height: var(--height);
      width: calc((100% - var(--width)) * var(--f));
      background: var(--accents-color-teal);
      border-radius: 999px;
      z-index: 0;
    }

    
    li { display: contents; }


    .btn {
      width: var(--width);
      height: var(--width);
      padding: 0;
      margin: 0;
      background: transparent;
      border: 0;
      -webkit-tap-highlight-color: transparent;

      display: grid;
      place-items: center;
      cursor: pointer;
      position: relative;
      z-index: 1;   
      line-height: 0; 

      :global(svg) {
        width: 100%;
        height: 100%;
        display: block;
      }
    }


    @media (min-width: 48em) {
      & { --width: 50px; --height: 8px; }
    }
    @media (min-width: 64em) {
      & { --width: 80px; --height: 10px; gap: 10em; }
    }
  }
</style>

