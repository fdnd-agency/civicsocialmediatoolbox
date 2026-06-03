<script>
    import Card from "../molecules/Card.svelte";

    export let cards;
    export let type = "default"; // default | ontwerp
</script>

<section class="card-container">
    <ul>
        {#each cards as card}
            <li>
                <Card {card} {type} />
            </li>
        {/each}
    </ul>
</section>

<style>
.card-container {
    container: cards / inline-size;

    ul {
        list-style: none;
        display: flex;
        gap: 1em;

        overflow-x: auto;
        overflow-y: hidden;

        padding: 0;
        margin: 0;

        scroll-snap-type: x mandatory;
        overscroll-behavior-x: contain;
    }

    /* RESPONSIVE */

    @container (width < 46em) {
        ul {
            flex-direction: column;
        }
    }

    @container (width > 46em) and (width < 60em) {
        ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
</style>