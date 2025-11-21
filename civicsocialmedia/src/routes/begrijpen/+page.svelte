<script>

    import Cards from '$lib/components/Cards.svelte';

    let { data } = $props();

    const cards = data.cards;
</script>

<Cards cards={data.cards} />
