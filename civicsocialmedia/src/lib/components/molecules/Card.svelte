<script>
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

<section
    class="card"
    class:flipped
    on:click={toggleFlip}
    on:keydown={handleKeydown}
    role="button"
    tabindex="0"
>
    <!--Als flipped === true wordt de class flipped toegevoegd-->
    <article class="card-front {card.title}">
        <h2 class:knowledge-text={card.id === 13}>{card.title}</h2>
        <!-- https://svelte.dev/docs/svelte/class#The-class:-directive -->
        <img src={imgUrl} alt={card.title} width="240" height="192" />
        <p class="category">{card.categorie}</p>
    </article>

    <article class="card-back {card.title}">
        <p class="body-text">{@html card.body}</p>
        <a href="/begrijpen/step2/details">Lees meer</a>
    </article>
</section>

<style>
    .card {
        width: 18.5em;
        height: 26.25em;
        perspective: 1000px;
        cursor: pointer;
        margin: 1em;
    }

    .card-front,
    .card-back {
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
        padding: 2em 0.5em 0 0.5em;
        line-height: 120%;
    }

    a {
        background-color: var(--primary-darkest-blue);
        color: var(--neutral-color-white);
        padding: 0.5em 1.3em;
        position: relative;
        top: 4em;
        border-radius: 6em;
        position: relative;
        left: 4em;
        &:hover {
            cursor: pointer;
        }
    }
</style>
