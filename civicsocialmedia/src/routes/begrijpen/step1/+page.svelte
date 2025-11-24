<script>
    import ProgressStepper from '$lib/components/ProgressStepper.svelte';
    import Header from '$lib/components/Header.svelte';


  const steps = [
    { href: '/begrijpen/step1' },
    { href: '/begrijpen/step2' },
    { href: '/begrijpen/step3' },
  ];
  const current = 0; 
</script>

<ProgressStepper {steps} {current} />

<Header /> 


<main>
    <h1>1. Begrijpen</h1>

    <p>Dit is de eerste activiteit van de toolkit: Volg de stappen om naar de tweede activiteit te gaan.</p>


    <p>Begin met een onderzoeksvraag. Welke gemeenschap wil je beter begrijpen?</p>

    <form>
        <label>
            <input type="text" required placeholder="Geef uw antwoord..">
        </label>

        <button  id="submit-button">Submit</button>
    </form>
</main>


<style>
    main {
        padding: 2em;
    }

    input {
        width: 100%;
        height: 10em;
        padding: .5em;
    }

    form {
        position: relative;
        margin-top: 3em;
    }

    #submit-button {
        all: unset;
        background-color: var(--primary-color-deep-blue);
        color: var(--neutral-color-white);
        padding: .7em 2em .7em 2em;
        border-radius: var(--radius-1);
        display: flex;
        position: absolute;
        right: 0;
        margin-top: .75em;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
    
</style>