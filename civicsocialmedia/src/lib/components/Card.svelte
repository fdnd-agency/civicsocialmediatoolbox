<script>
    export let card;
    let flipped = false; // staat voor "is de kaart geflipt"
    const imgUrl = `https://fdnd-agency.directus.app/assets/${card.posterimage}`;

    function toggleFlip() {
        flipped = !flipped;
    }
</script>

<section class="card" class:flipped={flipped} on:click={toggleFlip}> <!--Als flipped === true wordt de class flipped toegevoegd-->
    <article class="card-front {card.title}">
        <h2>{card.title}</h2>
        <img src="{imgUrl}" alt="{card.title}">
        <p>{card.categorie}</p>
    </article>

    <article class="card-back {card.title}">
        <p>{card.body}</p>
    </article>
</section>

<style>
    .card {
        width: 18.5em;
        height: 26.25em;
        perspective: 1000px; /* belangrijk voor 3D flip */
        cursor: pointer;
        margin: 1em;
    }

    .card-front, .card-back {
        width: 100%;
        height: 100%;
        border-radius: .5em;
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.6s ease-in-out;
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
        background-color: var(--accents-color-teal);
    }

    .card-front.Intent {
        background-color: var(--accents-color-orange);
    }

    .card-front.Debate {
        background-color: var(--accents-color-pink);
    }

    .card-front.Constituents {
        background-color: var(--accents-color-olive);
    }

    .card-front.Knowledge {
        background-color: var(--accents-color-purple);
    }

    .card-front.Place {
        background-color: var(--accents-color-yellow);
    }

    p {
        line-height: 120%;
    }
</style>