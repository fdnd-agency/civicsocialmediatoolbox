<script>
    import {onMount} from 'svelte'

    onMount(() => {
        document.querySelector('.print').addEventListener('click', () => {
            window.print();
        });
    });
</script>

<main>
    <h2>Overzicht van alle vragen</h2>
    
    <button class="print">Printen</button>

    <h3>Stap 1</h3>
    <p>Begin met een onderzoeksvraag. Welke gemeenschap wil je beter begrijpen?</p>
    <textarea readonly aria-label="answer-user">Antwoord gebruiker </textarea>
   

    <h3>Stap 2</h3>
    <p>Verken de 6 community archetypes en de bijbehorende behoeften van communities en organisaties, daarna kies 1 of 2 archetypes die het beste passen bij jouw community en/of organisatie.</p>
    <textarea readonly aria-label="answer-user">Antwoord gebruiker</textarea>

    <h3>Stap 3</h3>
    <p>Welke behoeften van communities en organisaties herken je?</p>
    <textarea readonly aria-label="answer-user">Antwoord gebruiker</textarea>
    <p>Op welke manieren is jouw community en/of organisatie anders?</p>
    <textarea readonly aria-label="answer-user">Antwoord gebruiker</textarea>

    <p>Welke aannames maak je over jouw community? Zijn er blinde vlekken? Hoe zou je daar achter kunnen komen?</p>
    <textarea readonly aria-label="answer-user">Antwoord gebruiker</textarea>

    <button class="send">Bevestigen en verzenden</button>
</main>

<style>
main {
    padding: 2em;
}

.print {
    all: unset;
    position: fixed;
    right: 2rem;
    bottom: 2em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1em 1.5em 1em 1.5em;
    background-color: var(--primary-darkest-blue);
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

h2 {
    text-align: left;
}

textarea {
    all: unset;
    width: 70vw;      
    height: 6em;
    border: 1px solid var(--neutral-color-black);
    padding: 2em;
    margin: 2em 0 2em 0;
    @media (min-width: 768px) {
        width: 85vw;
    }
}

.send {
    all: unset;
    display: inline-flex;
    align-items: center;
    height: 2.3em;
    padding: .5em 2em .5em 2em;
    border-radius: 6em;
    background: var(--primary-darkest-blue);
    color: var(--neutral-color-white);
    text-decoration: none;
    transition: background-color .2s, transform .1s, box-shadow .2s;
    
    &:hover {
        background-color: #0d3749;
        transform: translateY(-0.1rem);
        box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, .25);
        cursor: pointer;
  }
}
</style>