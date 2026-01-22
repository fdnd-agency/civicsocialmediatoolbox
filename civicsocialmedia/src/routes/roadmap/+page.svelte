<script>
  let { data } = $props();
  let items = $state(data.items ?? []);
  let activeId = $state(null);

  function selectItem(itemId) {
    activeId = activeId === itemId ? null : itemId;
  }
</script>

<main class="roadmap-main">
  <h1>Civic Social Media Roadmap</h1>
  <h2>Voor de ontwikkeling van civic social media moet er in uiteenlopende domeinen actie
    worden ondernomen.</h2>
  <p>Hoe creëren we een omgeving waarin civic social media kunnen floreren?</p>

  <section class="pyramid">
    <h2 class="label label-systemen">{items[2]?.title}</h2>


      <button class="btn theme-layer-4" onclick={() => selectItem(items[3]?.id)}>
        <span class="sr-only">Systemen layer: </span>{items[3]?.subtitle}<span class="sr-only">, klik voor meer information</span>
      </button>

      <button class="btn theme-layer-3" onclick={() => selectItem(items[2]?.id)}>
        <span class="sr-only">Systemen layer: </span>{items[2]?.subtitle}<span class="sr-only">, klik voor meer information</span>
      </button>
    <h2 class="label label-cultuur">{items[1]?.title}</h2>

      <button class="btn theme-layer-2" onclick={() => selectItem(items[1]?.id)}>
        <span class="sr-only">Cultuur layer: </span>{items[1]?.subtitle}<span class="sr-only">, klik voor meer information</span>
      </button>

      <button class="btn theme-layer-1" onclick={() => selectItem(items[0]?.id)}>
        <span class="sr-only">Cultuur layer: </span>{items[0]?.subtitle}<span class="sr-only">, klik voor meer information</span>
      </button>
  </section>

  {#if activeId}
    <section class="content">
      {#each items as item}
        {#if item.id === activeId}
          <div class="content-details">
            {#if item.subtitle}
              <h2>{item.subtitle}</h2>
            {/if}
            {#if item.body}
              <article>
                {@html item.body}
              </article>
            {/if}
            {#if item.aside}
              <aside>
                <h3>Samenvatting:</h3>
                {@html item.aside.replace(/\n/g, '<br>')}
              </aside>
            {/if}
          </div>
        {/if}
      {/each}
    </section>
  {/if}
</main>

<style>
  :root {
    --pyramid-clip: polygon(5% 0, 95% 0, 100% 100%, 0% 100%);
  }

  .roadmap-main {
    max-width: 60rem;
    margin: 0 auto;
    padding: 2em  1.5em;
    h1{
      color: var(--primary-darkest-blue);
      font-size: var(--fs-large);
      font-style: bold;
    }
    h2{
      font-size: var(--fs-medium);
    }
    p{
      font-size: var(--fs-small);
    }
  }



  .pyramid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 0.2rem;
    max-width: 50rem;
    margin: 0 auto;
    justify-items: center;
    grid-auto-flow: dense;
  }

  .btn {
    grid-column: 1 / 11;
    padding: 0.9rem 1rem;
    background: #42224c;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.2s;
    text-align: center;
    border-radius: 1rem;
    clip-path: var(--pyramid-clip);
    box-shadow: 
      0 4px 0 0 #2d1836,
      0 8px 0 0 #1f0f26,
      0 12px 0 0 #150a1a,
      0 16px 20px rgba(0, 0, 0, 0.3);
  }

  .btn:hover {
    background: #603d82;
    transform: translateY(-3px);
    box-shadow: 
      0 7px 0 0 #2d1836,
      0 11px 0 0 #1f0f26,
      0 15px 0 0 #150a1a,
      0 19px 25px rgba(0, 0, 0, 0.35);
  }

  .btn:active {
    transform: translateY(2px);
    box-shadow: 
      0 2px 0 0 #2d1836,
      0 4px 0 0 #1f0f26,
      0 6px 0 0 #150a1a,
      0 10px 15px rgba(0, 0, 0, 0.25);
  }

  .label {
    grid-column: 11 / 13;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #42224c;
    font-weight: 600;
    margin: 0;
  }

  .label-systemen {
    grid-row: 1 / 3;
  }

  .label-cultuur {
    grid-row: 3 / 5;
  }

  .theme-layer-1 {
    width: 100%;
    max-width: 600px;
  }

  .theme-layer-2 {
    width: 89%;
    max-width: 530px;
    margin-top: 10px;
  }

  .theme-layer-3 {
    width: 78%;
    max-width: 460px;
  }

  .theme-layer-4 {
    width: 70%;
    max-width: 410px;
  }

  .content {
    max-width: 50rem;
    margin: 3rem auto 0;
    padding: 2rem;
    background: #f5f5f5;
    border-radius: 0.5rem;
  }

  .content-details {
    article {
      line-height: 1.6;
      color: #333;
      margin-bottom: 2rem;

      p {
        margin-bottom: 1rem;
      }

      strong {
        display: block;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        color: #42224c;
      }
    }

    aside {
      background: white;
      padding: 1.5rem;
      border-radius: 0.5rem;
      border-left: 4px solid #42224c;
      line-height: 1.8;
      color: #333;

      h3 {
        color: #42224c;
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }
    }
  }

  
</style>
