<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import StepOne from "$lib/assets/step-1.svelte";
</script>

<Header />

<main>
    <h1>1. Begrijpen</h1>

    <p>
        Dit is de eerste activiteit van de toolkit: Volg de stappen om naar de
        tweede activiteit te gaan.
    </p>

    <StepOne />

    <p>
        Begin met een onderzoeksvraag. Welke gemeenschap wil je beter begrijpen?
    </p>

    <form>
        <label>
            <input type="text" required placeholder="Geef uw antwoord.." />
        </label>

        <button id="submit-button">Submit</button>
    </form>
</main>

<Footer />

<style>
    main {
        padding: 2em;
    }

    input {
        width: 100%;
        height: 10em;
        padding: 0.5em;
    }

    form {
        position: relative;
        margin-top: 3em;
    }

    #submit-button {
        all: unset;
        background-color: var(--primary-color-deep-blue);
        color: var(--neutral-color-white);
        padding: 0.7em 2em 0.7em 2em;
        border-radius: var(--radius-1);
        display: flex;
        position: absolute;
        right: 0;
        margin-top: 0.75em;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
</style>
