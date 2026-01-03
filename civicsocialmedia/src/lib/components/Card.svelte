<script>
    export let card;
    const imgUrl = `https://fdnd-agency.directus.app/assets/${card.posterimage}`;
</script>


<article class="card {card.title}">
    <h2>{card.title}</h2>
    <img src="{imgUrl}" alt="{card.title}">
    <p>{card.categorie}</p>
</article>

<style>
    .card {
        border-radius: .5em;
        margin: 1em;
        width: 18.5em;
        height: 26.25em;
        padding: .5em;
        text-align: center;
        color: white;

        &:hover {
            transform: scale(1.05);
            transition: .3s;
            cursor: pointer;
        }
    }

    .card.Care {
        background-color: var(--accents-color-teal);
    }

    .card.Intent {
        background-color: var(--accents-color-orange);
    }

    .card.Debate {
        background-color: var(--accents-color-pink);
    }

    .card.Constituents {
        background-color: var(--accents-color-olive);
    }

    .card.Knowledge {
        background-color: var(--accents-color-purple);
    }

    .card.Place {
        background-color: var(--accents-color-yellow);
    }
</style>