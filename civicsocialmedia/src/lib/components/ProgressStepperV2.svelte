<script>
  export let currentStep = 1;
// list with all steps 
  const steps = [
    { id: 1, label: 'Step 1', href: '/begijpen/step1' },
    { id: 2, label: 'Step 2', href: '/begijpen/step2' },
    { id: 3, label: 'Step 3', href: '/begijpen/step3' }
  ];
</script>

<nav class="stepper">
  <ul class="steps">
    {#each steps as step}
      <!-- steps already finished -->
      <!-- current step -->
      <li
        class="step"
        class:done={step.id < currentStep}
        class:current={step.id === currentStep}
      >
        <a href={step.href}>
          <div class="icon"></div>
          <div class="label">{step.label}</div>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .stepper {
    max-width: 40rem;
    margin: 0 auto;
    margin-top: 2rem;
  }

  .steps {
        /* base sizes */

    --size: 4rem;
    --gap: 2rem;
    --line-h: 0.5rem;

    display: grid;
    grid-auto-flow: column;
    column-gap: var(--gap);
    list-style: none;
    margin: 0 auto;
    padding: 0 0.75rem;
    width: max-content;
    position: relative;
    justify-items: center;

    
    /* grey line behind the steps */
    &::before {
      content: "";
      background: var(--neutral-color-grey-500);
      position: absolute;
      top: calc(var(--size) / 2);
      left: calc(var(--size) / 2);
      right: calc(var(--size) / 2);
      height: var(--line-h);
      transform: translateY(-50%);
      z-index: 0;
    }

    .step {
      position: relative;
      width: var(--size);
/* colored progress line over the grey line */
      &.done::after {
        content: "";
        position: absolute;
        top: calc(var(--size) / 2);
        width: calc(var(--size) + var(--gap));
        height: var(--line-h);
        background: var(--accents-color-teal);
        transform: translateY(-50%);
        z-index: 1;
      }
/* last step has no line after it */
      &:last-child::after {
        display: none;
      }

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .icon {
        width: var(--size);
        height: var(--size);
        display: grid;
        place-items: center;
        position: relative;
        z-index: 2;
      }

      &.done .icon,
      &.current .icon {
        background: var(--accents-color-teal)
      }

      &:not(.done):not(.current) .icon {
        background: var(--accents-color-blue);

        &::before {
          content: "";
          width: 2rem;
          height: 2rem;
          background: var(--neutral-color-white);
        }
      }

      .label {
        margin-top: 0.35rem;
        font-size: 0.8rem;
        color: var(--neutral-color-black);
      }

      &.done .icon::after,
      &.current .icon::after {
        content: "✓";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        color: var(--neutral-color-white);
        z-index: 3;
      }
    }

    @media (min-width: 64em) {
      --size: 4rem;
      --gap: 4rem;
      --line-h: 0.5rem;
      padding: 0 1rem;

      .step {
        width: auto;

        .label {
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }

        &.done .icon::after,
        &.current .icon::after {
          font-size: 1.5rem;
        }
      }
    }
  }
  /* -------------------------------
     prefers-reduced-motion
     Small left-right animation only
     when user did not turn on Reduce motion
  -------------------------------- */

 @keyframes stepper-tilt {
  0%   { transform: rotate(2deg); }
  50%  { transform: rotate(5deg); }
  100% { transform: rotate(2deg); }
}

@media (prefers-reduced-motion: no-preference) {
  .steps .step.current .icon {
    animation: stepper-tilt 1.4s ease-in-out infinite;
  }
}

@media (prefers-reduced-motion: reduce) {
  .steps .step.current .icon {
    animation: none;
    transform: none;
  }
}
 /* -------------------------------
     prefers-color-scheme (dark mode)
  -------------------------------- */

@media (prefers-color-scheme: dark) {
  .steps::before {
    background: var(--neutral-color-grey-500);
  }

  .steps .step .label {
    color: var(--neutral-color-white);
  }

 
  .steps .step:not(.done):not(.current) .icon::before {
    background: var(--neutral-color-grey-500);
  }
}



/* -------------------------------
   prefers-contrast
   more  = strong shadow on steps + inherit text style
   less  = no shadow, softer text
-------------------------------- */

@media (prefers-contrast: more) {
  .steps::before {
    box-shadow: 6px 8px 14px var(--neutral-color-grey-500);
  }

  .steps .step.done::after {
    box-shadow: 3px 2px 4px  var(--neutral-color-grey-500);
  }

  .steps .step .icon {
    box-shadow:
      6px 8px 14px var(--neutral-color-black);           
  }

  .steps .step .label {
    font-style: inherit;
  }
}

@media (prefers-contrast: less) {
  .steps {
    box-shadow: none;
  }
  .steps::before,
  .steps .step.done::after,
  .steps .step .icon {
    box-shadow: none;
  }
}

</style>