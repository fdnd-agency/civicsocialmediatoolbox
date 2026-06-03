<!-- <script>
    export let card;

    let flipped = false; // staat voor "is de kaart geflipt"
    const imgUrl = `https://fdnd-agency.directus.app/assets/${card.posterimage}`;

    function toggleFlip() {
        flipped = !flipped;
    }

    function handleKeydown(event) {
        if (event.key === "Enter" || event.key === " ") {
            toggleFlip();
        }
    }
</script>

<form class="card" class:flipped={flipped} on:click={toggleFlip} on:keydown={handleKeydown}> 
    <button type="submit" class="card-front {card.title}">
        <h2 class:knowledge-text={card.id === 13}>{card.title}</h2> 
        <img src="{imgUrl}" alt="{card.title}" width="240" height="192" > 
        <p class="category">{card.categorie}</p>
    </button>

    <button type="submit" class="card-back {card.title}">
        <p class="body-text"> {@html card.body} </p>
        <a href="/begrijpen/step2/details">Lees meer</a>
    </button>
</form>

<style>
    .card {
        width: 18.5em;
        height: 26.25em;
        perspective: 1000px;
        cursor: pointer;
        margin: 1em;
    }

    .card-front, .card-back {
        all: unset;
        width: 100%;
        height: 100%;
        border-radius: 0.75em;
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.6s ease-in-out;
    }

    h2 {
        text-align: center;
    }

    img {
        padding-left: 1.5em;
    }

    .knowledge-text {
        font-size: 2.3rem;
    }

    .card-front {
        transform: rotateY(0deg);
    }

    .card-back {
        transform: rotateY(180deg);
    }

    .card.flipped .card-front {
        transform: rotateY(180deg);
    }

    .card.flipped .card-back {
        transform: rotateY(0deg);
    }

    .card-front.Care {
        background-color: var(--accent-color-teal);
    }

    .card-front.Intent {
        background-color: var(--accent-color-orange);
    }

    .card-front.Debate {
        background-color: var(--accent-color-pink);
    }

    .card-front.Constituents {
        background-color: var(--accent-color-olive);
    }

    .card-front.Knowledge {
        background-color: var(--accent-color-blue);
    }

    .card-front.Place {
        background-color: var(--accent-color-yellow);
    }

    .card-back.Care {
        border: 1em solid var(--accent-color-teal);
    }

    .card-back.Intent {
        border: 1em solid var(--accent-color-orange);
    }

    .card-back.Debate {
        border: 1em solid var(--accent-color-pink);
    }

    .card-back.Constituents {
        border: 1em solid var(--accent-color-olive);
    }

    .card-back.Knowledge {
        border: 1em solid var(--accent-color-blue);
    }

    .card-back.Place {
        border: 1em solid var(--accent-color-yellow);
    }

    .category {
        text-align: center;
        font-family: var(--font-serif);
        font-size: var(--fs-medium);
    }

    .card:focus {
        outline: 3px solid var(--neutral-color-black);
        outline-offset: 4px;
    }

    .body-text {
        line-height: 120%;
        text-align: center;
    }

    a {
        background-color: var(--primary-darkest-blue);
        color: var(--neutral-color-white);
        padding: 0.5em 1.3em;
        position: relative;
        top: 4em;
        left: 5em;
        max-width: 4em;
        border-radius: 6em;
        position: relative;
        &:hover {
            cursor: pointer;
        }
    }
</style> -->

<!-- <script>
    export let card;
    export let type = "default";

    let flipped = false;

    const imgUrl = `https://fdnd-agency.directus.app/assets/${card.posterimage}`;

    function toggleFlip() {
        flipped = !flipped;
    }

    function handleKeydown(event) {
        if (event.key === "Enter" || event.key === " ") {
            toggleFlip();
        }
    }
</script>

<div
    class="card-container {type}"
    class:flipped
    on:click={toggleFlip}
    on:keydown={handleKeydown}
    tabindex="0"
    role="button"
    aria-pressed={flipped}
>
    <div class="card-inner">
        
        <button type="button" class="card-face card-front {card.title}">
            <slot name="front" {imgUrl}>
                <h2 class:knowledge-text={card.id === 13}>{card.title}</h2>
                <img src={imgUrl} alt={card.title} width="240" height="192" />
                <p class="card-category">{card.categorie}</p>
            </slot>
        </button>

        
        <button type="button" class="card-face card-back {card.title}">
            <slot name="back" {imgUrl}>
                <p class="body-text">{@html card.body}</p>
                <a href="/begrijpen/step2/details" class="read-more">
                    Lees meer
                </a>
            </slot>
        </button>
    </div>
</div>

<style>
    .card-container {
        width: 18.5em;
        height: 26.25em;
        perspective: 1000px;
        cursor: pointer;
        margin: 1em;
        border: none;
        background: none;
        display: block;

        &:focus {
            outline: 3px solid black;
            outline-offset: 4px;
        }

        &.ontwerp {
            .card-front {
                background-color: #472562;
                color: white;
            }
            .card-back {
                /* background: white; */
                color: #472562;
                border: 1em solid #472562;
            }
        }

        .card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s ease-in-out;
            transform-style: preserve-3d;

            .flipped & {
                transform: rotateY(180deg);
            }
        }

        .card-face {
            all: unset;
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 0.75em;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            overflow: hidden;
            justify-content: space-between;
            padding: 1.5rem 0;

            &.card-back {
                transform: rotateY(180deg);
            }

            &.Care {
                &.card-front {
                    background-color: var(--accent-color-teal);
                }
            }
            &.Intent {
                &.card-front {
                    background-color: var(--accent-color-orange);
                }
            }
            &.Debate {
                &.card-front {
                    background-color: var(--accent-color-pink);
                }
            }
            &.Constituents {
                &.card-front {
                    background-color: var(--accent-color-olive);
                }
            }
            &.Knowledge {
                &.card-front {
                    background-color: var(--accent-color-blue);
                }
            }
            &.Place {
                &.card-front {
                    background-color: var(--accent-color-yellow);
                }
            }

            &.Care.card-back {
                border: 1em solid var(--accent-color-teal);
                background: white;
            }
            &.Intent.card-back {
                border: 1em solid var(--accent-color-orange);
                background: white;
            }
            &.Debate.card-back {
                border: 1em solid var(--accent-color-pink);
                background: white;
            }
            &.Constituents.card-back {
                border: 1em solid var(--accent-color-olive);
                background: white;
            }
            &.Knowledge.card-back {
                border: 1em solid var(--accent-color-blue);
                background: white;
            }
            &.Place.card-back {
                border: 1em solid var(--accent-color-yellow);
                background: white;
            }
        }

        h2 {
            margin-top: 1.5rem;
            text-align: center;
        }

        .card-category {
            font-family: var(--font-serif);
            font-size: var(--fs-medium);
            text-align: center;
            margin: 0;
            padding-bottom: 1rem;
        }

        .body-text {
            padding: 1.5rem;
            text-align: center;
            font-size: 0.9rem;
        }

        .read-more {
            background-color: var(--primary-darkest-blue);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            text-decoration: none;
            margin-bottom: 1.5rem;
            font-size: 0.8rem;
        }
    }

    .card-container {
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
    }

    .card-container:hover,
    .card-container:focus-visible {
        transform: translateY(-4px);
        /* box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2); */
    }
</style> -->

<script>
    export let card;
    export let type = "default"; // default | ontwerp

    let flipped = false;

    const imgUrl = `https://fdnd-agency.directus.app/assets/${card.posterimage}`;

    function toggleFlip() {
        flipped = !flipped;
    }

    import { onMount } from "svelte";

    let JSenabled = false;
    onMount(() => {
        // Happens only when client side JS is enabled
        JSenabled = true;
    });
</script>

<article class="card-container {type}" class:flipped>
    <div class="card-inner">
        <!-- FRONT -->
        <section class="card-front {card.title}">
            <h2>{card.title}</h2>
            <img
                loading="lazy"
                src={imgUrl}
                alt={card.title}
                width="240"
                height="192"
            />
            <p class="category">{card.categorie}</p>
            {#if JSenabled}
                <!-- Show flip button when JS is enabled -->
                <button on:click={toggleFlip}>Achterkant bekijken</button>
            {:else}
                <!-- Show back of card when JS is disabled -->
                <h3>{card.subtitle}</h3>
                <p>
                    {card.body
                        .replace(/<br\s*\/?>/gi, " ")
                        .replace(/<\/?strong>/gi, "")
                        .replace(/<\/?p>/gi, " ")}
                </p>
            {/if}
        </section>

        <!-- BACK -->
        <section class="card-back {card.title}">
            {#if type === "ontwerp"}
                <h2>{card.categorie}</h2>
                <img src={imgUrl} alt={card.subtitle} width="90" height="90" />
                <h3>{card.subtitle}</h3>

                <p>
                    {card.body
                        .replace(/<br\s*\/?>/gi, " ")
                        .replace(/<\/?strong>/gi, "")
                        .replace(/<\/?p>/gi, " ")}
                </p>
            {:else}
                <p class="body-text">{@html card.body}</p>

                <a href="/begrijpen/step2/details" class="read-more">
                    Lees meer
                </a>
            {/if}
            <button on:click={toggleFlip}>Voorkant bekijken</button>
        </section>
    </div>
</article>

<style>
    /* =========================
   BASE CARD LAYOUT
========================= */
    .card-container {
        width: 18.5em;
        height: 26.25em;
        perspective: 1000px;
        cursor: pointer;
        margin: 1em;

        .card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s ease-in-out;
            transform-style: preserve-3d;
        }

        &.flipped .card-inner {
            transform: rotateY(180deg);
        }

        .card-front,
        .card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 0.75em;
            backface-visibility: hidden;
            top: 0;
            left: 0;
            padding: 1em;
            overflow-y: auto;
        }

        .card-front {
            transform: rotateY(0deg);
        }

        .card-back {
            transform: rotateY(180deg);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        button::after {
            content: "";
            inset: 0;
            position: absolute;
        }

        /* =========================
       TEXT DEFAULT
    ========================= */

        h2 {
            text-align: center;
            font-size: 2rem;
        }

        .category {
            text-align: center;
            font-family: var(--font-serif);
            font-size: var(--fs-medium);
        }

        .body-text {
            text-align: center;
            line-height: 1.2;
        }

        .read-more {
            display: inline-block;
            margin-top: 1rem;
            padding: 0.5em 1.3em;
            background: var(--primary-darkest-blue);
            color: white;
            border-radius: 6em;
            text-decoration: none;
            align-self: center;
        }

        /* =========================
       COLORS
    ========================= */

        .card-front.Care,
        .card-back.Care {
            background: var(--accent-color-teal);
        }

        .card-front.Intent,
        .card-back.Intent {
            background: var(--accent-color-orange);
        }

        .card-front.Debate,
        .card-back.Debate {
            background: var(--accent-color-pink);
        }

        .card-front.Constituents,
        .card-back.Constituents {
            background: var(--accent-color-olive);
        }

        .card-front.Knowledge,
        .card-back.Knowledge {
            background: var(--accent-color-blue);
        }

        .card-front.Place,
        .card-back.Place {
            background: var(--accent-color-yellow);
        }

        /* =========================
       ONTWERP VARIANT
    ========================= */

        &.ontwerp {
            .card-front {
                background: #472562;
                color: white;
            }

            .card-back {
                background: white;
                border: 1em solid #472562;
                color: #472562;
                overflow: hidden;

                h2 {
                    text-align: center;
                    font-size: 1rem;
                    color: var(--neutral-color-black);
                }

                h3 {
                    text-align: center;
                    font-family: var(--font-serif);
                    font-size: var(--fs-medium);
                    color: var(--neutral-color-black);
                }

                p {
                    font-size: 0.85rem;
                    text-align: center;
                    line-height: 1.3;
                    padding: 0 1em;
                    color: var(--neutral-color-black);
                }
            }

            img {
                display: block;
                margin: 1rem auto;
                border-radius: 14px;
                object-fit: cover;
            }
        }
    }
</style>
