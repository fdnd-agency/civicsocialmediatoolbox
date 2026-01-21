<script>
  import ProgressStepper from '$lib/components/ProgressStepper.svelte';
  import Formulier from '$lib/components/Formulier.svelte'; 

  const steps = [
    { href: '/begrijpen/step1' },
    { href: '/begrijpen/step2' },
    { href: '/begrijpen/step3' },
  ];
  const current = 0; 
</script>

<ProgressStepper {steps} {current} />

<Formulier /> 


