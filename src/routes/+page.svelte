<script>
    import { RoadMap, ToolKit } from '$lib';
    import ontwerpprincipes from '$lib/assets/ontwerpprincipes.png';
    import community from '$lib/assets/communityarchetypes.png';
    import ButtonLink from "$lib/components/Button-link.svelte";
    import Header from '$lib/components/Header.svelte'; 
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
    <h4>
        Wil je zelf aan de slag met het ontwerpen van verantwoorde, veilige en soevereine sociale media?
    </h4>

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

  
   <div class="card-wrapper">
        <section class="cardlayout-section">
            <img class="card-image" src="{ontwerpprincipes}" alt="Vijf ontwerpprincipes: gemeenschapsgericht, veilig en vertrouwd, verantwoord, soeverein en divers systeem" width="400" height="300" />
                
            <article class="card-layout">
                <h2>Ontwerpprincipes</h2>
                <p>Tijdens de ontwikkeling van civic social media maken softwareontwikkelaars en ondersteunende organi- saties keuzes op het gebied van technologie, algo-ritmes, governance, benodigde functionaliteiten, de gebruikerservaring (UX design), visuele stijl (UI design), moderatie en redactie. Om tot weloverwogen keuzes te komen, kunnen ontwerpprincipes steun bieden bij de ontwikkeling van civic socialmedia-platforms.</p>
            </article>
        </section>

        <section class="cardlayout-section">
            <img class="card-image" src="{community}" alt="Vijf ontwerpprincipes: gemeenschapsgericht, veilig en vertrouwd, verantwoord, soeverein en divers systeem" width="400" height="300" />
                
            <article class="card-layout">
                <h2>Community archetypes</h2>
                <p>Bij civic social media staan de behoeften van gemeenschappen centraal. Wat die behoeften precies zijn en welke functionaliteiten daarvoor nodig zijn verschilt per gemeenschap. Om hier beter grip op te krijgen onderscheiden we zes archetypen.</p>
                <p>Het doel van de archetypen is niet om te stellen dat er slechts zes soorten gemeenschappen of zes soorten civic social media bestaan, maar om handvatten te geven tijdens het ontwerpproces.</p>
            </article>
        </section>
    </div>


</main>
<style>
    :global(body) {
        /* Colors */
        --primary-color-black: #000000;
        /* Font-sizes */
    
        /* Border radius */
        --border-radius-s: .5em; /* 0.5rem (8px) */
        --border-radius-m: .75em; /* 0.75rem (12px) */
        --border-radius-l: 1em; /* 1rem (16px) */
    } 

    .card-wrapper {
        display: flex;
        flex-direction: column;
        gap: 2em;
        max-width: 29em;
        margin-left: auto;
        padding-right: 2em;
        
    }

    .cardlayout-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: .75px var(--primary-color-black) solid;
        padding-bottom: 2em;    
            @media (min-width: 375px) {
                flex-direction: row;
            }
    }

    .card-image {
        border: solid .75px var(--primary-color-black);
        border-radius: var(--border-radius-m);
    }

    .card-layout {
        padding-left: 1em;
    }

    img {
        width: 50%;
        height: 50%;
    }

    p {
        padding-top: 1em;
        @media (min-width: 768px) {
            text-align: justify; /*voor het uitlijnen van text bij een grotere scherm https://developer.mozilla.org/en-US/docs/Web/CSS/text-align#try_it*/

        }
    }


</style>
