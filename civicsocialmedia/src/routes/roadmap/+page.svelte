<main class="roadmap-main">
  <h1>Civic Social Media Roadmap</h1>
  <h3>Voor de ontwikkeling van civic social media moet er in uiteenlopende domeinen actie
    worden ondernomen.</h3>
  <p>Hoe creëren we een omgeving waarin civic social media kunnen floreren?</p>
  <section class="pyramid">
    <button class="btn theme-layer-4">
      Technologische Infrastructuur
    </button>
    <h2 class="label label-systemen">Systemen</h2>

    <button class="btn theme-layer-3">
      Wetgeving en Beleid
    </button>

    <button class="btn theme-layer-2">
      Storytelling
    </button>
    <h2 class="label label-cultuur">Cultuur</h2>

    <button class="btn theme-layer-1">
      Waardenkader Media en Democratie
    </button>
  </section>
</main>

<style>
  :root {
    --pyramid-clip: polygon(5% 0, 95% 0, 100% 100%, 0% 100%);
  }

  .roadmap-main {
    max-width: 60rem;
    margin: 0 auto;
    padding: 2rem 1.5rem;
  }

 

  .pyramid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 0.2rem;
    max-width: 50rem;
    justify-items: center;
  }

  .btn {
    grid-column: 1 / 11;
    padding: 1rem 1rem;
    color: var(--neutral-color-white);
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.2s;
    text-align: center;
    border-radius: 0.5rem;
    clip-path: var(--pyramid-clip);
    
    &:hover {
      background-color: var(--secondary-color-soft-blue);
      transform: translateY(-3px);
    }

    &:active {
      transform: translateY(2px);
    }
  }

  .label {
    grid-column: 11 / 13;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--font-color);
    font-weight: 800;
    font-style: bold;
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
    background-color: var(--first-layer-color);
  }

  .theme-layer-2 {
    width: 89%;
    max-width: 530px;
    margin-top: 10px;
    background-color: var(--first-layer-color);
  }

  .theme-layer-3 {
    width: 78%;
    max-width: 460px;
    background-color: var( --second-layer-color);
  }

  .theme-layer-4 {
    width: 69%;
    max-width: 400px;
    background-color: var(--third-layer-color);

  }

  
</style>
