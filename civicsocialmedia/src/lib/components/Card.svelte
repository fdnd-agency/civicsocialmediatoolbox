<script>
    export let card;
    const imgUrl = `https://fdnd-agency.directus.app/assets/${card.posterimage}`;

    const titleColors = {
        "Care": "var(--accents-color-teal)",
        "Intent": "var(--accents-color-orange)",
        "Debate": "var(--accents-color-pink)",
        "Constituents": "var(--accents-color-olive)",
        "Knowledge & Culture": "var(--accents-color-purple)",
        "Place": "var(--accents-color-yellow)"
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

   
</style>