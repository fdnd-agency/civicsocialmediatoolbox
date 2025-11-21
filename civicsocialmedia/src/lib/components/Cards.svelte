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


ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    }  
</style>