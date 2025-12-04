<script>
  import ProgressStepper from '$lib/components/ProgressStepper.svelte';
  const steps = [
    { href: '/begrijpen/step1' },
    { href: '/begrijpen/step2' },
    { href: '/begrijpen/step3' },
  ];
  const current = 2; 
</script>

<ProgressStepper {steps} {current} />
