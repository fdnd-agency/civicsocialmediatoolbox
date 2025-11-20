<script>
  import ProgressStepper from '$lib/components/ProgressStepper.svelte';
  const steps = [
    { href: '/begijpen/step1' },
    { href: '/begijpen/step2' },
    { href: '/begijpen/step3' },
  ];
  const current = 0; 
</script>

<ProgressStepper {steps} {current} />
