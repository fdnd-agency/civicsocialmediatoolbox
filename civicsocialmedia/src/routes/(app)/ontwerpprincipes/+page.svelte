<script>
    import voorkantCard from "$lib/assets/voorkant-card.svg";

    export let data;
    const cards = data.cards;

    function imageUrl(card) {
        return `https://fdnd-agency.directus.app/assets/${card.posterimage}`;
    }
</script>

<main>
    <h2>Ontwerpprincipes</h2>
    <p>
        Hier presenteren we vijf ontwerpprincipes en zeven ontwerpdimensies voor
        het ontwerpproces van civic social media. Ze kunnen in het gehele
        traject worden toegepast – van ambitieus concept tot de kleinste
        UI-details – om richting te geven aan ontwerpkeuzes. De vijf
        ontwerpprincipes zijn voor alle civic social media van toepassing,
        ongeacht het type gemeenschap waarvoor wordt ontworpen. Daarnaast hebben
        verschillende gemeenschappen ook uiteenlopende behoeften, wat kan leiden
        tot spanningen tussen de ontwerpprincipes en de publieke waarden waarop
        ze zijn gebaseerd. Zo kan het voor de ene gemeenschap essentieel zijn
        dat gesprekken plaatsvinden in de openbare ruimte, terwijl een andere
        gemeenschap juist gebaat is bij een vertrouwde, besloten omgeving. Het
        is daarom belangrijk om deze afweging te maken, in de eerste plaats ten
        behoeve van het type gemeenschap.
    </p>

    <header class="title">
        <h3>Vijf ontwerpprincipes voor civic social media</h3>
    </header>

    <section class="card-container">
        <ul>
            {#each cards as card}
                <li class="card">
                    <article class="flip-inner">
                        <!-- FRONT -->
                        <article class="flip-front">
                            <img
                                src={voorkantCard}
                                alt="front"
                                class="voorkant-card"
                            />
                        </article>

                        <!-- BACK -->
                        <article class="flip-back">
                            <h2>{card.categorie}</h2>

                            <img src={imageUrl(card)} alt={card.subtitle} />

                            <h3>{card.subtitle}</h3>

                            <p>
                                {card.body
                                    .replace(/<br\s*\/?>/gi, " ")
                                    .replace(/<\/?strong>/gi, "")
                                    .replace(/<\/?p>/gi, " ")}
                            </p>
                        </article>
                    </article>
                </li>
            {/each}
        </ul>
    </section>
</main>

<style>
    main {
        padding: 0 4em;
        max-width: 100%;

        h2 {
            font-size: var(--fs-title);
            margin-bottom: 0.50em;
            color: var(--primary-color-deep-blue);
            text-align: left;
        }

        h3 {
            font-size: var(--fs-large);
            text-align: left;
            color: var(--primary-color-deep-blue);
        }

        p {
            font-size: var(--fs-small);
            line-height: 1.5;
            color: var(--neutral-color-grey-700);
            text-align: left;
            max-width: 75ch;
            line-height: 1.6;
        }
    }

    .card-container {
        padding: 2rem;
        container-type: inline-size;

        ul {
            list-style: none;
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0;
            margin: 0;
        }

        @container (width >= 46rem) {
            ul {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @container (width >= 60rem) {
            ul {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @container (width >= 75rem) {
  ul {
    display: flex;
    gap: 2rem;
    padding: 1rem 0 2rem 0;
    overflow-x: auto;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .card {
    flex: 0 0 auto;   
    width: 380px;        
    scroll-snap-align: center; /* stops the card perfectly in center */
    scroll-snap-stop: always;  /* makes sure it always stops at the card */
    margin-right: 2rem;
    transition: transform 0.35s ease;
  }

  .card:last-child {
    margin-right: 0; /* last card doesn’t need extra margin */
  }
}
    }

    .card {
        min-height: 620px;
        display: block;
        position: relative;
        cursor: pointer;
        border-radius: 0.75rem;
        overflow: hidden;
        transition: transform 0.35s ease, box-shadow 0.35s ease;

        &:hover {
        transform: scale(1.05);
        z-index: 10;
    }
        h2 {
            font-size: 1.2rem;
            text-align: center;
            color: var(--neutral-color-black);
        }

        h3 {
            font-size: var(--fs-medium);
            color: var(--neutral-color-black);
            font-weight: 600;
            margin-bottom: 0.8rem;
            text-align: center;
        }

        p {
            font-size: var(--fs-small);
            line-height: 1.5;
            color: var(--neutral-color-grey-700);
            text-align: center;
            margin: 0.5rem 0 1rem;
        }

        .flip-inner {
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            position: relative;

            .flip-front,
            .flip-back {
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                top: 0;
                left: 0;
            }

            .flip-front {
                img.voorkant-card {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .flip-back {
                transform: rotateY(180deg);
                flex-direction: column;
                padding: 1rem;
                border: 15px solid #472562;
                box-sizing: border-box;

                img {
                    width: 120px;
                    height: 120px;
                    border-radius: 19.2px;
                    object-fit: cover;
                    margin: 1rem auto;
                }
            }
        }

        &:hover .flip-inner {
            transform: rotateY(180deg);
        }
    }
</style>

