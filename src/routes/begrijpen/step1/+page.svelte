<script>
    import Header from '$lib/components/Header.svelte';
    import StepOne from '$lib/assets/step-1.svelte';
 
</script>


<Header /> 

<main>
    <h1>1. Begrijpen</h1>

    <p>Dit is de eerste activiteit van de toolkit: Volg de stappen om naar de tweede activiteit te gaan.</p>

    <StepOne />

    <p>Begin met een onderzoeksvraag. Welke gemeenschap wil je beter begrijpen?</p>

    <form>
        <label>
            <input type="text" required placeholder="Geef uw antwoord..">
        </label>
    </form>
</main>