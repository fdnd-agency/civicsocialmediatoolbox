<main>
    <section>
        <h2>Overzicht van alle vragen</h2>
    </section>
    
    <button class="print">Printen</button>

    <label>Stap 1
        <textarea readonly>Begin met een onderzoeksvraag. Welke gemeenschap wil je beter begrijpen? 
        </textarea>
    </label>

    <label>Stap 2
        <textarea readonly>Verken de 6 community archetypes en de bijbehorende behoeften van communities en organisaties, daarna kies 1 of 2 archetypes die het beste passen bij jouw community en/ of organisatie.
        </textarea>
    </label>

    <label>Stap 3
        <textarea readonly>Welke behoeften van communities en organisaties herken je? Op welke manieren is jouw community en/of organisatie anders?
            Welke aannames maak je over jouw community? Zijn er blinde vlekken? Hoe zou je daar achter kunnen komen?
        </textarea>
    </label>

    <ul>
        <li>
            <button class="send">Bevestigen en verzenden</button>
        </li>

        <li>
            <button class="send">Volgende activiteit: Ontwerpen</button>
        </li>
    </ul>
</main>

<style>
main {
    padding: 2em;
}

section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
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

h2 {
    text-align: left;
}
    
label {
    font-weight: bold;
    }

textarea {
    all: unset;
    width: 80vw;      
    max-width: 100vw; 
    height: 6em;
    border: 1px solid var(--neutral-color-black);
    padding: 2em;
    margin: 2em 0 2em 0;
    @media (min-width: 768px) {
        width: 90vw;
    }
    
}

ul {
list-style: none;
}
</style>