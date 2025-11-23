<script>
  export let currentStep = 1;

  const steps = [
    { id: 1, label: 'Step 1', href: '/begijpen/step1' },
    { id: 2, label: 'Step 2', href: '/begijpen/step2' },
    { id: 3, label: 'Step 3', href: '/begijpen/step3' }
  ];
</script>

<nav class="stepper">
  <ul class="steps">
    {#each steps as step}
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
