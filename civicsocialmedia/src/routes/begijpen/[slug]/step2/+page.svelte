<script>
  //  we keep the stepper on STEP 2 here
  import ProgressStepper from '$lib/components/ProgressStepper.svelte';

  //  data comes from our server load above (already has body!)
  export let data;
  const { items = [], assets = '' } = data ?? {};

  //  stepper links (change if your routes change)
  const steps = [
    { href: '/begijpen/care/step1' },
    { href: '/begijpen/care/step2' },
    { href: '/begijpen/care/step3' }
  ];
  const current = 1; // 0-based → step 2

  //  build image URL from posterimage id (server gave us `assets`)
  const img = (id) => (id ? `${assets}/${id}` : '');

  // which card is open right now
  let selected = null;

  // some bodies are wrapped in <article ...> ... </article>, we strip only that
  function cleanBody(html = '') {
    return String(html)
      .replace(/^<article[\s\S]*?>/i, '')   // remove opening <article ...>
      .replace(/<\/article>\s*$/i, '');     // remove closing </article>
  }

  //  click card  toggle open/close 
  function pick(item) {
    selected = selected?.id === item.id ? null : item;
  }
</script>
