<script>
  import ProgressStepper from '$lib/components/ProgressStepper.svelte';
  import Cards from '$lib/components/Cards.svelte';

  const steps = [
    { href: '/begrijpen/step1' },
    { href: '/begrijpen/step2' },
    { href: '/begrijpen/step3' },
  ];
  const current = 1; // we are on step 2
  const cards = data.cards;
  let { data } = $props();

</script>

<Cards cards={data.cards} />
<ProgressStepper {steps} {current} />
