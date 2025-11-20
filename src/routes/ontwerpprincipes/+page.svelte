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
                    <div class="flip-inner">
                        <!-- FRONT -->
                        <div class="flip-front">
                            <img
                                src={voorkantCard}
                                alt="front"
                                class="voorkant-card"
                            />
                        </div>

                        <!-- BACK -->
                        <div class="flip-back">
                            <h2>{card.categorie}</h2>
                            <img src={imageUrl(card)} alt={card.subtitle} />
                            <h3>{card.subtitle}</h3>
                            <p>
                                {card.body
                                    .replace(/<br\s*\/?>/gi, " ")
                                    .replace(/<\/?strong>/gi, "")
                                    .replace(/<\/?p>/gi, " ")}
                            </p>
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    </section>
</main>

<style>
    main {
        padding: 0 2em;
        max-width: 100%;
        font-family: "Geomanist", "Cabin", system-ui, sans-serif;
    }

    h2 {
        font-size: var(--fs-title);
        letter-spacing: -0.03em;
        margin-bottom: 1em;
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
        margin-bottom: 1.5em;
        color: var(--neutral-color-grey-700);
        text-align: left;
        max-width: 90ch;
    }

    .card-container {
        padding: 2rem;
        container-type: inline-size; /* belangrijke voor container query om te werken */
    }

    .card-container ul {
        list-style: none;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 0;
        margin: 0;
    }

    /* CARD BASE */
    .card {
        perspective: 1000px; /* 3D perspective for flip */
        box-shadow: 0 6px 30px rgba(0, 0, 0, 0.08);
        min-height: 620px;
        position: relative;
    }

    /* FLIP INNER */
    .flip-inner {
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        position: relative;
    }

    .card:hover .flip-inner {
        transform: rotateY(180deg);
    }

    /* FRONT AND BACK */
    .flip-front,
    .flip-back {
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* FRONT IMAGE */
    .flip-front img.voorkant-card {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0;
        display: block;
        border: none;
    }

    /* BACK CARD */
    .flip-back {
        transform: rotateY(180deg);
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem;
        box-sizing: border-box;
        border: 15px solid #472562;
    }

    .flip-back img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 19.2px;
        margin: 1rem auto;
    }

    .card h2 {
        font-size: 1.2rem;
        text-align: center;
        color: var(--neutral-color-black);
    }

    .card h3 {
        font-size: var(--fs-medium);
        color: var(--neutral-color-black);
        font-weight: 600;
        margin-bottom: 0.8rem;
        text-align: center;
    }

    .card p {
        font-size: var(--fs-small);
        line-height: 1.5;
        color: var(--neutral-color-grey-700);
        text-align: center;
        margin: 0.5rem 0 1rem;
    }

    /* RESPONSIVE GRID */
    @container (width >= 37.5rem) {
        .card-container ul {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @container (width >= 56.25rem) {
        .card-container ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @container (width >= 75rem) {
        .card-container ul {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 2rem;
            padding: 1rem 4em 2rem 4em;
            scroll-behavior: smooth;
        }

        .card {
            flex: 0 0 380px;
            scroll-snap-align: start;
        }

        .card-container ul::-webkit-scrollbar {
            display: none;
        }
    }
</style>
