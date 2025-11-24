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

<main>
  <section>
    <h2>1. Begrijpen</h2>
    <ProgressStepper {steps} {current} />
    <p style="margin-top: 10em;">
      Verken de 6 community archetypes en de bijbehorende behoeften van communities en organisaties.
    </p>
  </section>

  <!-- grid of button-cards -->
  <section class="cards">
    {#each items as item}
      <button
        type="button"
        class="card"
        on:click={() => pick(item)}
        aria-expanded={selected?.id === item.id}
      >
        {#if item.posterimage}
          <figure class="thumb">
            <img
              class="media"
              src={img(item.posterimage)}
              alt={item.subtitle || item.title || 'poster'}
            />
          </figure>
        {/if}
      </button>
    {/each}
  </section>
</main>

<!-- show details under the grid when one is selected -->
{#if selected}
  <article class="details">
    {#if selected.subtitle || selected.title}
      <h2 class="subtitle">{selected.subtitle || selected.title}</h2>
    {/if}

    {#if selected.body && String(selected.body).trim() !== ''}
      <section class="body">{@html cleanBody(selected.body)}</section>
    {:else}
      <p class="empty">Geen inhoud voor deze kaart.</p>
    {/if}
  </article>
{/if}

<style>
  /* cards grid + nested styles */
  .cards {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 48em) {
      grid-template-columns: repeat(3, 1fr);
    }

    .card {
      display: block;
      padding: 0;
      text-align: left;
      cursor: pointer;
      background: var(--neutral-color-white);
      border: 1px solid #e5e7eb;
      border-radius: .75rem;
      overflow: hidden;
      transition: transform 120ms ease, box-shadow 120ms ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 18px var(-neutral-color-black);
      }

      .thumb {
        margin: 0;

        .media {
          width: 100%;
          aspect-ratio: 3 / 4;
          object-fit: cover;
          display: block;
        }
      }
    }
  }

  /* selected card details area */
  .details {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1rem 3rem;

    .subtitle {
      margin: 0 0 .5rem 0;
      font-size: 1.25rem;
    }

    .body {
      :global(p) {
        margin: .5rem 0 0;
        line-height: 1.6;
        color: var(-neutral-color-black);
      }
    }

    .empty {
      color: var(--neutral-color-grey-600);
    }
  }
</style>
