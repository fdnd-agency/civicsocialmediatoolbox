<script>
  import { RoadMap, ToolKit } from '$lib';
  import OntwerpPrincipes from '$lib/assets/OntwerpPrincipes.svelte';
  import CommunityArchetypes from '$lib/assets/CommunityArchetypes.svelte';
  import ButtonLeesMeer from '$lib/components/atoms/ButtonLeesMeer.svelte';
  import BackgroundAnimation from '$lib/components/effects/BackgroundAnimation.svelte';

  let speed = 0.01;
</script>

<BackgroundAnimation bind:speed/>

<main class="homepage-content">
  <section class="homepage-titel" id="about">
    <h1 id="civic-social-media">Civic Social Media</h1>
    <p>
      Het Civic Social Media-project richt zich op het onderzoeken, ontwerpen en bevorderen van digitale platforms
      die het voor gemeenschapsleden mogelijk maken om veilig en betrouwbaar te communiceren, samen te werken en
      informatie uit te wisselen. Deze platforms zijn gebaseerd op publieke waarden en worden op een transparante
      manier ontwikkeld en beheerd door organisaties en initiatieven met een maatschappelijke doelstelling.
    </p>
    <p>Wil je zelf aan de slag met het ontwerpen van verantwoorde, veilige en soevereine sociale media?</p>
    <ButtonLeesMeer aria-labelledby="civic-social-media" />
  </section>

  <article class="card">
    <ul class="inline">
      <li class="media-wrap">
        <a href="/roadmap" class="link"><RoadMap /></a>
      </li>
      <li class="content-wrap">
        <h2 id="civic-social-media-roadmap">Civic Social Media Roadmap</h2>
        <p>Een routekaart voor de ontwikkeling van sociale media die veilig en betrouwbaar, verantwoord en soeverein is.</p>
        <p>Ontdek de stappen, keuzes en mijlpalen richting civic social media.</p>
        <ButtonLeesMeer aria-labelledby="civic-social-media-roadmap" href="/roadmap">Lees meer</ButtonLeesMeer>
      </li>
    </ul>
  </article>

  <article class="card adjusted-card">
    <ul class="inline">
      <li class="media-wrap">
        <a href="/toolkit" class="link"><ToolKit /></a>
      </li>
      <li class="content-wrap">
        <h2 id="design-principles-for-civic-social-media">Design principles for civic social media</h2>
        <p>
          De Designing for Civic Social Media Toolkit bevat 55 kaarten, samengesteld uit gemeenschapsarchetypen,
          ontwerpprincipes en dimensies die helpen bij het ontwerpen van digitale platforms gebaseerd op publieke waarden.
        </p>
        <ButtonLeesMeer aria-labelledby="design-principles-for-civic-social-media" href="/toolkit">Lees meer</ButtonLeesMeer>
      </li>
    </ul>
  </article>

  <article class="card">
    <ul class="inline">
      <li class="media-wrap">
        <a href="/ontwerpprincipes" class="link"><OntwerpPrincipes /></a>
      </li>
      <li class="content-wrap">
        <h2 id="ontwerpprincipes">Ontwerpprincipes</h2>
        <p>
          Ontwerpprincipes ondersteunen keuzes over technologie, algoritmes, governance, functionaliteiten,
          UX/UI, moderatie en redactie.
        </p>
        <ButtonLeesMeer aria-labelledby="ontwerpprincipes" href="/ontwerpprincipes">Lees meer</ButtonLeesMeer>
      </li>
    </ul>
  </article>

  <article class="card">
    <ul class="inline">
      <li class="media-wrap">
        <a href="/community-archetypes" class="link"><CommunityArchetypes /></a>
      </li>
      <li class="content-wrap">
        <h2 id="community-archetypes">Community archetypes</h2>
        <p>Zes archetypen geven houvast bij het bepalen van behoeften en passende functionaliteiten per gemeenschap.</p>
        <ButtonLeesMeer aria-labelledby="community-archetypes" href="/community-archetypes">Lees meer</ButtonLeesMeer>
      </li>
    </ul>
  </article>

  <!-- hero section -->
  <section class="hero-section" id="partners">
    <div class="hero-inner">
      <h2 class="h2-hero-section">Hoe zou het zijn als sociale media niet commercieel georiënteerd waren, maar publieke waarden centraal stelden?</h2>
      <nav class="links-about">
        <a class="link-project" href="#about">About this project</a>
        <a class="link-project" href="#partners">Partners</a>
      </nav>
    </div>
  </section>
</main>

<style>
  :global(body) {
    --border-radius-s: 0.5em;
    --border-radius-m: 0.75em;
    --border-radius-l: 1em;
    --radius-1: 0.5rem;
  }

  .homepage-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem 2rem;
    position: relative;
    z-index: 2;

    @media (min-width: 64em) {
      display: grid;
      grid-template-columns: min(50ch, 50vw) 1fr;
      column-gap: 2rem;
      align-items: start;
    }
  }

  h1 {
    color: var(--primary-darkest-blue);
    font-size: var(--fs-display);
    width: 1em;
    text-transform: uppercase;
  }

  .homepage-titel {
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;

    @media (min-width: 64em) {
      position: sticky;
      top: 1rem;
      align-self: start;
      margin-bottom: 20rem;
    }
  }

  .card {
    border: none;
    position: relative;
    margin-top: 5em;
    z-index: 2;

    &:not(:last-of-type)::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: var(--neutral-color-black);
      margin: 5em auto 0;
    }

    @media (min-width: 64em) {
      grid-column: 2;
    }
  }

  .inline {
    display: flex;
    gap: 1.3rem;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-direction: column;
    align-items: center;

    @media (min-width: 48em) {
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-start;
    }
  }

  .media-wrap {
    width: 100%;
    max-width: 20rem;
    margin-inline: auto;

    @media (min-width: 48em) {
      flex: 0 0 20rem;
      max-width: 20rem;
      margin-inline: 0;
    }

    @media (min-width: 64em) {
      flex-basis: 22rem;
      max-width: 22rem;
    }
  }

  .link {
    display: inline-block;
    width: 20rem;
    aspect-ratio: 4 / 3;
    height: auto;
    border: 1px solid var(--neutral-color-black);
    border-radius: var(--radius-1);
    margin-inline: auto;

    :global(svg) {
      width: 100%;
      height: auto; 
      display: block;
    }

    @media (min-width: 64em) {
      width: 22rem;
    }
  }

  /* this need to change to svg becous now we hacve almost deblle css for svg and img */
  .media-img {
    display: block;
    width: 18rem;
    aspect-ratio: 4 / 4;/* Here can change the card size the for img*/
    height: auto;
    object-fit: cover;
    border: 1px solid var(--primary-color-black);
    border-radius: var(--border-radius-m);
    margin-inline: auto;

    @media (min-width: 64em) {
      width: 20rem;
      
    }
  }

  .content-wrap {
    min-width: 0;
    width: 100%;
    max-width: none;

    @media (min-width: 48em) {
      max-width: 68ch;
    }
  }

  p { line-height: 1.6; }

  /* hero */
  .hero-section {
    background: var(--secondary-dark-beige);
    margin-top: 5em;
    border-radius: var(--radius-1);
    position: relative;
    z-index: 2;

    @media (min-width: 64em) {
      grid-column: 1 / -1;  /* under title + cards */
      margin-top: 5em;
    }
  }

  .hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2em 1em;
    text-align: center;
  }

  .links-about {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .link-project {
    flex-grow: 1;
    text-align: center;
    min-height: 4em;
    line-height: 2em;
    color: #fff;
    text-decoration: none;
    background: #000;
    padding: 1em;
    border-radius: var(--radius-1);

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.3em;
      cursor: pointer;
    }
  }

  .h2-hero-section {
    font-size: var(--font-size-s);
    margin-bottom: 2em;
    padding: 0 1em;
  }
  
  .adjusted-card {
    @media (min-width: 64em) { 
      margin-top: -15rem;
    }
  }

</style>
