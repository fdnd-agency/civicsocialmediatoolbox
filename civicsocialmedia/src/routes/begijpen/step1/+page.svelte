<script>
  import ProgressStepper from '$lib/components/ProgressStepper.svelte';
  const steps = [
    { href: '/begijpen/step1' },
    { href: '/begijpen/step2' },
    { href: '/begijpen/step3' },
  ];
  const current = 0; 
</script>

<ProgressStepper {steps} {current} />
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