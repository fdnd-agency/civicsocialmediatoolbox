<script>
    import DetailCard from "./DetailCard.svelte";
    export let cards;
</script>

<section class="card-container">
    <ul>
        {#each cards as card}
            <li>
                <DetailCard {card} />
            </li>
        {/each}
    </ul>
</section>

<nav> 
    <a class="previous-step page" href="/begrijpen/step2">Vorige stap</a>
    <a class="next-step page" href="/begrijpen/step3">Volgende stap</a>
</nav>

<style>

.card-container {
    container: cards / inline-size;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
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

.page {
    all: unset;
    position: fixed;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1em 1.5em 1em 1.5em;
    background-color: var(--primary-color-deep-blue);
    color: var(--neutral-color-white);
    height: 2vh;
    width: 10em;
    padding: 1em;
    border-radius: 6em;
    text-decoration: none;
    transition: background .2s, transform .1s, box-shadow .2s;
        &:hover {
        background: #0d3749;
        transform: translateY(-0.1rem);
        box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, .25);
        cursor: pointer;
        }
        
        &:focus-visible {
        outline: 0.2rem solid var(--neutral-color-white);
        outline-offset: 0.15rem;
        }
}

.next-step {
    right: 2em;
    bottom: 2em;   
}

.previous-step {
    left: 2em;
    bottom: 2em;
}
</style>