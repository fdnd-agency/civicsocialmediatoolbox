<script>
  import ProgressStepper from '$lib/components/ProgressStepper.svelte';
  import Cards from '$lib/components/Cards.svelte';

  const steps = [
    { href: '/begijpen/step1' },
    { href: '/begijpen/step2' },
    { href: '/begijpen/step3' },
  ];
  const current = 1; // we are on step 2
  const cards = data.cards;
  let { data } = $props();

</script>

<Cards cards={data.cards} />
<ProgressStepper {steps} {current} />
