<script>
  import { goto } from '$app/navigation';
  import StepLogo from '$lib/components/StepLogo.svelte';            
  import StepLogoProgress from '$lib/components/StepLogoProgress.svelte'; 

  // you set these from your page
  export let steps = [  ];
  export let current = 0; // 0-based: which step we are on

  // how far to fill the blue line (0..1)
  $: f = steps.length > 1 ? current / (steps.length - 1) : 0;

  // click a logo -> go to its href 
  function go(i) {
    const s = steps[i];
    if (s && s.href) goto(s.href);
  }
</script>

<nav class="stepper">
  <ul class="list" style="--f:{f}">
    {#each steps as step, i}
      <li>
        <button
          class="btn {i <= current ? 'on' : ''}"
          type="button"
          on:click={() => go(i)}
        >
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

  /* the row itself handles sizes/colors + draws the line */
  .list {
    /* tweak here */
    --logo: 2rem;       /* scales with root font-size, nice */
    --railH: 0.5rem;    /* line height */

    /* --f comes from inline style (0..1) */

    position: relative;
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
  }

  /* grey rail: from center of first logo to center of last */
  .list::before {
    content: "";
    position: absolute;
    left: calc(var(--logo) / 2);
    right: calc(var(--logo) / 2);
    top: calc(var(--logo) / 2 - var(--railH) / 2);
    height: var(--railH);
    background: var(--neutral-color-grey-400);
    border-radius: 999px;
    z-index: 0;
  }

  /* blue progress fill, width uses --f (0..1) */
  .list::after {
    content: "";
    position: absolute;
    left: calc(var(--logo) / 2);
    top: calc(var(--logo) / 2 - var(--railH) / 2);
    height: var(--railH);
    width: calc((100% - var(--logo)) * var(--f));
    background: var(--accents-color-teal);
    border-radius: 999px;
    z-index: 0;
  }

  /* keep LI dumb; spacing from parent flex gap */
  .list li { display: contents; }

 .btn {
  width: var(--logo);
  height: var(--logo);
  padding: 0;                 /* remove default padding */
  margin: 0;
  background: transparent;    /* no background */
  border: 0;                  /* no border */
  box-shadow: none;           /* no shadow glow */
  outline: none;              /* no outline */
  appearance: none;           /* remove native styles */
  -webkit-appearance: none;   /* Safari */
  -moz-appearance: none;      /* Firefox */
  -webkit-tap-highlight-color: transparent; /* mobile tap highlight */
  
  display: grid;
  place-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;                 /* stay above the rails */
  line-height: 0;             /* avoid extra line height space */
}

/* extra safety for Firefox’ inner focus border */
button::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/* no focus ring on click/keyboard */
.btn:focus,
.btn:focus-visible,
.btn:active {
  outline: none;
  box-shadow: none;
}

/* keep your SVG size only */
.btn :global(svg) {
  width: 100%;
  height: 100%;
  display: block;
  /* no stroke/border added here */
}

  /* a bit bigger on wider screens */
  @media (min-width: 48em) {
    .list { --logo: 50px; --railH: 8px; }
  }
  @media (min-width: 64em) {
    .list { --logo: 80px; --railH: 10px; gap: 10em; }
  }
</style>
