<script>
    export let card;
    const imgUrl = `https://fdnd-agency.directus.app/assets/${card.posterimage}`;

    const titleColors = {
        "Care": "var(--accents-color-teal)",
        "Intent": "var(--accents-color-orange)",
        "Debate": "var(--accents-color-pink)"
    };

    const background = titleColors[card.title];
</script>


<article class="card" style="background-color: {background}">
    <h2>{card.title}</h2>
    <img src="{imgUrl}" alt="{card.title}">
    <p>{card.categorie}</p>
</article>

<style>
    .card {
        border-radius: .5em;
        margin: 1em;
        width: 22em;
        height: 30em;
        padding: .5em;
        text-align: center;
    }
</style>