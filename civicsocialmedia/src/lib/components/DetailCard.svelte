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
        border: 1em solid var(--accent-color-teal);
        border-radius: .75em;
    }

    p {
        font-size: 13px;
        text-align: center;
        max-width: 18.5em;
        padding-left: 2.2em;
    }
</style>
