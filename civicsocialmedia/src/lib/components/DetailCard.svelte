<script>
    export let card;
    const imgUrl = `https://fdnd-agency.directus.app/assets/${card.posterimage}`;
</script>

<section class="card">
    <p class="body">{@html card.body}</p>
</section>

<style>
    
.card {
    width: 18.5em;
    height: 26.25em;
    margin: 1em;
    border: var(--accent-color-teal) 1em solid;
}

h2 {
    text-align: center;
}
</style>
