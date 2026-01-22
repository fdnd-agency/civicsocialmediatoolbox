<script>
  import Cards from "$lib/components/organisms/OntwerpprincipesCards.svelte";

  export let data;

  // Extract cards from data
  const cards = data.cards;
</script>

<main>
  <h2>Ontwerpprincipes</h2>
  <p>
    <strong>
      Hier presenteren we vijf ontwerpprincipes en zeven ontwerpdimensies voor
      het ontwerpproces van civic social media. Ze kunnen in het gehele traject
      worden toegepast van ambitieus concept tot de kleinste UI-details om
      richting te geven aan ontwerpkeuzes.
    </strong>
  </p>
  <p>
    De vijf ontwerpprincipes zijn voor alle civic social media van toepassing,
    ongeacht het type gemeenschap waarvoor wordt ontworpen.
  </p>
  <p>
    Daarnaast hebben verschillende gemeenschappen ook uiteenlopende behoeften,
    wat kan leiden tot spanningen tussen de ontwerpprincipes en de publieke
    waarden waarop ze zijn gebaseerd. Zo kan het voor de ene gemeenschap
    essentieel zijn dat gesprekken plaatsvinden in de openbare ruimte, terwijl
    een andere gemeenschap juist gebaat is bij een vertrouwde, besloten
    omgeving. Het is daarom belangrijk om deze afweging te maken, in de eerste
    plaats ten behoeve van het type gemeenschap.
  </p>

  <header class="title">
    <h3>Vijf ontwerpprincipes voor civic social media</h3>
  </header>

  <!-- Cards component -->
  <Cards {cards} />
</main>

<style>
  main {
    padding: 2em;
  }

  main h2 {
    font-size: var(--fs-title);
    margin-bottom: 0.5em;
    color: var(--primary-color-deep-blue);
  }

  main h3 {
    font-size: var(--fs-large);
    color: var(--primary-color-deep-blue);
  }

  main p {
    font-size: var(--fs-small);
    line-height: 1.6;
    color: var(--neutral-color-grey-700);
    max-width: 75ch;
  }

  @media (prefers-color-scheme: dark) {
    main {
      background-color: var(--neutral-color-black);
    }
  }
</style>
