<script>
    export let data;

    const cards = data.cards;

    let activeCard = null;

    function imageUrl(card) {
        return `https://fdnd-agency.directus.app/assets/${card.posterimage}`;
    }

    function toggleCard(index) {
        activeCard = activeCard === index ? null : index;
    }
</script>

<main>
    <h2>Ontwerpprincipes</h2>

    <p>
        Hier presenteren we vijf ontwerpprincipes en zeven ontwerpdimensies voor
        het ontwerpproces van civic social media.
    </p>

    <header class="title">
        <h3>Vijf ontwerpprincipes voor civic social media</h3>
    </header>

    <section class="card-container">
        <ul>
            {#each cards as card, index}
                <li
                    class="card {activeCard === index ? 'is-flipped' : ''}"
                    tabindex="0"
                    role="button"
                    aria-pressed={activeCard === index}
                    on:click={() => toggleCard(index)}
                    on:keydown={(e) => e.key === "Enter" && toggleCard(index)}
                >
                    <article class="flip-inner">
                        <!-- FRONT -->
                        <article class="flip-front">
                            <h2>{card.categorie}</h2>
                            <img src={imageUrl(card)} alt={card.subtitle} />

                            <h3>{card.subtitle}</h3>
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

        h2 {
            font-size: var(--fs-title);
            margin-bottom: 0.5em;
            color: var(--primary-color-deep-blue);
        }

        h3 {
            font-size: var(--fs-large);
            color: var(--primary-color-deep-blue);
        }

        p {
            font-size: var(--fs-small);
            line-height: 1.6;
            color: var(--neutral-color-grey-700);
            max-width: 75ch;
        }
    }

    /* ========================= */
    /* CARD CONTAINER */
    /* ========================= */

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

            @container (width >= 46rem) {
                grid-template-columns: repeat(2, 1fr);
            }

            @container (width >= 60rem) {
                grid-template-columns: repeat(3, 1fr);
            }

            @container (width >= 75rem) {
                display: flex;
                gap: 2rem;
                padding: 1rem 0 2rem 0;
                overflow-x: auto;
                scroll-snap-type: x mandatory;

                &::-webkit-scrollbar {
                    display: none;
                }

                .card {
                    flex: 0 0 auto;
                    width: 380px;
                    scroll-snap-align: center;
                    scroll-snap-stop: always;
                    margin-right: 2rem;
                }

                .card:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    /* ========================= */
    /* CARD */
    /* ========================= */

    .card {
        min-height: 620px;
        cursor: pointer;
        border-radius: 0.75rem;
        overflow: hidden;
        position: relative;
        transition: transform 0.35s ease;
        outline: none;

        &:hover,
        &:focus {
            transform: scale(1.05);
            z-index: 10;
        }

        h2 {
            font-size: 1.2rem;
            text-align: center;
        }

        h3 {
            font-size: var(--fs-medium);
            font-weight: 600;
            text-align: center;
        }

        p {
            font-size: var(--fs-small);
            line-height: 1.5;
            text-align: center;
        }

        .flip-inner {
            width: 100%;
            height: 100%;
            position: relative;
            transition: transform 0.6s;
            transform-style: preserve-3d;

            .flip-front,
            .flip-back {
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                position: absolute;
                inset: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 1rem;
            }

            .flip-front {
                background-color: #472562;
                gap: 1rem;

                img {
                    width: 120px;
                    height: 120px;
                    border-radius: 19.2px;
                    object-fit: cover;
                }

                h2,
                h3 {
                    color: white;
                }
            }

            .flip-back {
                transform: rotateY(180deg);
                border: 15px solid #472562;
                box-sizing: border-box;
                gap: 0.8rem;

                img {
                    width: 120px;
                    height: 120px;
                    border-radius: 19.2px;
                    object-fit: cover;
                }
            }
        }

        &:hover .flip-inner,
        &:focus .flip-inner,
        &.is-flipped .flip-inner {
            transform: rotateY(180deg);
        }
    }
</style>
