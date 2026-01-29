<script>
    import OntwerpprincipesCard from "$lib/components/molecules/OntwerpprincipesCard.svelte";
    import Card from "$lib/components/molecules/Card.svelte";

    export let data;

    const ontwerpprincipesCards = data.ontwerpprincipesCards ?? [];
    const archetypeCards = data.archetypeCards ?? [];
</script>

<main>
    <h1>Kaarten overzicht</h1>

    <p>
        Ontdek het overzicht van alle kaarten die in de toolkit worden gebruikt.
    </p>

    <h2>Ontwerpprincipes cards</h2>

    <section class="custom-page-cards">
        {#each ontwerpprincipesCards as card, index}
            <div class="custom-card-wrapper">
                <OntwerpprincipesCard {card} {index} />
            </div>
        {/each}
    </section>

    <h2>Archetype cards</h2>

    <section class="custom-page-cards">
        {#each archetypeCards as card}
            <Card {card} />
        {/each}
    </section>
</main>

<style>
    main {
        padding: 2em;

        h1 {
            font-size: var(--fs-title);
            margin-bottom: 0.5em;
            color: var(--primary-color-deep-blue);
        }

        h2 {
            font-size: var(--fs-large);
            color: var(--primary-color-deep-blue);
            margin-top: 3rem;
        }

        p {
            font-size: var(--fs-small);
            line-height: 1.6;
            color: var(--neutral-color-grey-700);
            max-width: 75ch;
        }
    }

    .custom-page-cards {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 1rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .custom-card-wrapper {
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.05);
        }
    }

    /* Tablet: 2 cards per row */
    @media (min-width: 601px) {
        .custom-page-cards {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }
    }

    /* Desktop: 3 cards per row */
    @media (min-width: 901px) {
        .custom-page-cards {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
        }
    }
</style>
