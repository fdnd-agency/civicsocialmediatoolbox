<script>
    import Card from "./Card.svelte";
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
        @container (max-width: 447px) {
            flex-direction: column;
        }
}   


</style>