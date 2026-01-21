<script>
    import Card from "./molecules/Card.svelte";
    export let cards;
</script>

<section class="card-container">
    <ul>
        {#each cards as card}
            <li class="card">
                <Card {card} />
            </li>
        {/each}
    </ul>
</section>

<style>
.card-container {
    container: cards / inline-size;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 1em; 
    overflow-x: auto;
    scroll-snap-type: x mandatory; 
    overscroll-behavior-x: contain; 
    padding: 0;
        @container (width < 46em) {
            flex-direction: column;
        }

        @container (width > 46em) and (width < 60em) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
}   
</style>