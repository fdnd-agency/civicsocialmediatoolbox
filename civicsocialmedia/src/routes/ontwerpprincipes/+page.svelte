<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";

    export let data;
    const cards = data.cards;

    let listEl;
    let leftBtn;
    let rightBtn;

    function imageUrl(card) {
        return `https://fdnd-agency.directus.app/assets/${card.posterimage}`;
    }

    function scrollLeft(e) {
        e.preventDefault();
        if (listEl) {
            listEl.scrollBy({ left: -420, behavior: "smooth" });
            press(leftBtn, -6);
        }
    }

    function scrollRight(e) {
        e.preventDefault();
        if (listEl) {
            listEl.scrollBy({ left: 420, behavior: "smooth" });
            press(rightBtn, 6);
        }
    }

    function press(btn, x) {
        gsap.fromTo(
            btn,
            { scale: 1, x: 0 },
            {
                scale: 0.92,
                x,
                duration: 0.12,
                yoyo: true,
                repeat: 1,
                ease: "power1.out",
            },
        );
    }

    onMount(() => {
        document.documentElement.classList.add("js");
        [leftBtn, rightBtn].forEach((btn, i) => {
            const dir = i === 0 ? -4 : 4;
            btn.addEventListener("mouseenter", () => {
                gsap.to(btn, {
                    scale: 1.06,
                    duration: 0.2,
                    ease: "power2.out",
                });
                gsap.to(btn, { x: dir, duration: 0.25, ease: "power2.out" });
            });
            btn.addEventListener("mouseleave", () => {
                gsap.to(btn, {
                    scale: 1,
                    x: 0,
                    duration: 0.2,
                    ease: "power2.out",
                });
            });
        });
    });
</script>

<main>
    <h2>Ontwerpprincipes</h2>
    <p>
        <strong>
            Hier presenteren we vijf ontwerpprincipes en zeven ontwerpdimensies
            voor het ontwerpproces van civic social media. Ze kunnen in het
            gehele traject worden toegepast van ambitieus concept tot de
            kleinste UI-details om richting te geven aan ontwerpkeuzes.
        </strong>
    </p>
    <p>
        De vijf ontwerpprincipes zijn voor alle civic social media van
        toepassing, ongeacht het type gemeenschap waarvoor wordt ontworpen.
    </p>

    <header class="title">
        <h3>Vijf ontwerpprincipes voor civic social media</h3>
    </header>

    <section class="card-container">
        <a href="#card-0" class="no-js-scroll">
            <button
                bind:this={leftBtn}
                class="scroll-button left"
                on:click={scrollLeft}
                aria-label="Scroll left"
            >
                ◀
            </button>
        </a>

        <a href="#card-{cards.length - 1}" class="no-js-scroll">
            <button
                bind:this={rightBtn}
                class="scroll-button right"
                on:click={scrollRight}
                aria-label="Scroll right"
            >
                ▶
            </button>
        </a>

        <ul bind:this={listEl}>
            {#each cards as card, index}
                <li id={"card-" + index}>
                    <input
                        type="checkbox"
                        id={"flip-" + index}
                        class="flip-checkbox"
                    />
                    <label for={"flip-" + index} class="card" tabindex="0">
                        <div class="flip-inner">
                            <div class="flip-front">
                                <h2>{card.categorie}</h2>
                                <img
                                    src={imageUrl(card)}
                                    alt={card.subtitle}
                                    loading="lazy"
                                    decoding="async"
                                    width="90"
                                    height="90"
                                />
                                <h3>{card.subtitle}</h3>
                            </div>
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
                    </label>
                </li>
            {/each}
        </ul>
    </section>
</main>

<style>
    main {
        padding: 2em;
        h2 {
            font-size: var(--fs-title);
            margin-bottom: 0.5em;
            color: var(--primary-darkest-blue);
        }
        h3 {
            font-size: var(--fs-large);
            color: var(--primary-darkest-blue);
        }
        p {
            font-size: var(--fs-small);
            line-height: 1.6;
            color: var(--neutral-color-grey-600);
            max-width: 75ch;
        }
    }

    .card-container {
        position: relative;
        container-type: inline-size;
        container-name: card-grid;
        width: 100%;
        padding: 0 6rem;
        ul {
            list-style: none;
            padding: 1rem 0 2rem 0;
            margin: 0;
            scroll-behavior: smooth;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

    @container card-grid (min-width: 600px) {
        .card-container ul {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @container card-grid (min-width: 900px) {
        .card-container ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @container card-grid (min-width: 1200px) {
        .card-container ul {
            display: flex;
            overflow-x: auto;
            gap: 8rem;
            padding: 2rem;
            flex-wrap: nowrap;
            scroll-snap-type: x mandatory;
            scroll-padding-inline: 2rem;
            

            &::-webkit-scrollbar {
                display: none;
            }

            .card {
                flex: 0 0 auto;
                width: 20em;
                height: 30em;
                scroll-snap-align: start;
                -webkit-scroll-snap-align: start;

                scroll-snap-stop: always;
            }
        }
    }

    .scroll-button {
        display: block;
    }

    .card {
        display: block;
        width: 20em;
        height: 30em;
        cursor: pointer;
        border-radius: 0.75rem;
        overflow: hidden;
        position: relative;
        outline: none;
        transition:
            border 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease,
            opacity 0.3s ease;
        &:hover,
        &:focus {
            border: 3px solid #8874ca;
            box-shadow: 0 0 15px rgba(70, 42, 80, 0.7);
            transform: scale(1.05);
        }
        h2 {
            font-size: 1rem;
            text-align: center;
        }
        h3 {
            font-size: 0.9rem;
            font-weight: 600;
            text-align: center;
        }
        p {
            font-size: 0.8rem;
            line-height: 1.3;
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
                padding: 2rem;
                gap: 1rem;
            }
            .flip-front {
                background-color: #472562;
                img {
                    width: 90px;
                    height: 90px;
                    border-radius: 14px;
                    object-fit: cover;
                }
                h2,
                h3 {
                    color: white;
                }
            }
            .flip-back {
                transform: rotateY(180deg);
                background: white;
                border: 10px solid #472562;
                box-sizing: border-box;
                img {
                    width: 90px;
                    height: 90px;
                    border-radius: 14px;
                    object-fit: cover;
                }
                h2 {
                    font-size: 1rem;
                    margin: 0.2rem 0;
                }
                h3 {
                    font-size: 0.9rem;
                    margin: 0.2rem 0;
                }
                p {
                    font-size: 0.8rem;
                    line-height: 1.3;
                    text-align: center;
                    margin-top: 0.3rem;
                }
            }
        }
    }

    .scroll-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 100;
        background: #472562;
        color: white;
        width: 44px;
        height: 44px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        display: none;
        &:hover {
            background: #8874ca;
        }
    }

    .scroll-button.left {
        left: -10px;
        margin-left: 0;
    }
    .scroll-button.right {
        right: -10px;
        margin-right: 0;
    }

    @container card-grid (min-width: 1000px) {
        .scroll-button {
            display: block;
        }
    }
    html {
        scroll-behavior: smooth;
    }

    /* JS FALLBACK */
    .flip-checkbox {
        display: none;
    }
    .flip-checkbox:checked + .card .flip-inner {
        transform: rotateY(180deg);
    }
    .no-js-scroll {
        text-decoration: none;
        color: inherit;
    }
</style>
