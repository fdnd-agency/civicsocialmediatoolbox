<script>
  import ButtonLink from "$lib/components/Button-link.svelte";
  import Header from '$lib/components/Header.svelte'; 
  import { RoadMap, ToolKit } from '$lib';
</script>

<Header />

<main class="homepage-content">
  <section class="homepage-titel">
    <h2>CIVIC SOCIAL MEDIA</h2>
    <p>
        Het Civic Social Media-project richt zich op het onderzoeken, 
        ontwerpen en bevorderen van digitale platforms die het voor 
        gemeenschapsleden mogelijk maken om veilig en betrouwbaar te communiceren, 
        samen te werken en informatie uit te wisselen. 
        Deze platforms zijn gebaseerd op publieke waarden en worden op een transparante 
        manier ontwikkeld en beheerd door organisaties en initiatieven met een maatschappelijke 
        doelstelling.
    </p>

    <ButtonLink href="/">Lees meer</ButtonLink>
  </section>
  
  <article class="roadmap-section">
     <a href="/roadmap">
          <RoadMap />
        </a>
    <h2>Civic Social Media Roadmap</h2>
     <ButtonLink href="/">Lees meer</ButtonLink>
    <p>
        Een routekaart voor de ontwikkeling van sociale media die veilig en betrouwbaar, 
        verantwoord en soeverein is.
    </p>   
  </article>

  <hr>

  <article class="roadmap-section">
     <a href="/toolkit">
          <ToolKit />
        </a>
    <h2>Design principles for civic social media</h2>

    <ButtonLink href="/">Lees meer</ButtonLink>
     <p>
        Would you like to start designing responsible, safe, and sovereign social media yourself? 
        Download our toolkit below! The Designing for Civic Social Media toolkit contains 55 cards, 
        composed of community archetypes, design principles, and dimensions for civic social media, 
        which can help you in the design of digital platforms based on public values.     
    </p>    
  </article>
</main>

<style>
/* You can keep your layout or page-specific styles here */
</style>
