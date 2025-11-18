<main>
    <h2>Ontwerp principes voor Civic Social Media</h2>
    <p>
        Principes en keuzes voor het ontwerpen, lanceren en onderhouden van
        Civic Social Media.
    </p>
    <h3>Ontwerpen voor Civic Social Media</h3>

    <div class="btn-group">
        <a href="/begijpen" class="btn">Begrijpen</a>
        <a href="/ontwerpen" class="btn">Ontwerpen</a>
        <a href="/evalueren" class="btn">Evalueren</a>
    </div>

    <p>
        Deze toolkit bevat 55 kaarten, samengesteld uit community archetypes,
        ontwerpprincipes en -dimensies voor Civic Social Media, die kunnen
        helpen bij het vormgeven van digitale platforms op basis van publieke
        waarden. Bij de toolkit horen 3 activiteiten: begrijpen, ontwerpen en
        evalueren. De activiteiten kunnen los van elkaar gebruikt worden, maar
        bouwen ook op elkaar voort als ontwerpproces.
    </p>

    <p>
        De activiteiten kunnen worden uitgevoerd door individuele ontwerpers,
        publieke organisaties of door de gemeenschap zelf. De bijbehorende
        vragen kunnen dienen als reflectievragen, discussieaanleidingen of als
        input voor brainstormsessies tijdens een workshop.<span>
            We moedigen ontwerpers en organisaties aan om deze toolkit te
            gebruiken op een participatieve manier, in een dialoog tussen
            gemeenschappen en publieke organisaties die die gemeenschappen
            ondersteunen.</span
        >
    </p>
</main>

<style>

    h2 {
        font-size: var(--fs-title);
        letter-spacing: -0.03em;
        margin-bottom: 0.5em;
        color: var(--primary-color-deep-blue);
    }

    h3 {
        font-size: var(--fs-large);
        letter-spacing: -0.02em;
        margin-top: 1.5em;
        margin-bottom: 0.5em;
        color: var(--primary-color-deep-blue);
    }

    /* --- Paragraphs --- */
    p {
        font-size: var(--fs-medium);
        line-height: 1.9;
        margin-bottom: 1.5em;
        text-align: left;
    }

    /* --- Buttons --- */
    .btn-group {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 1em;
        margin: 2em 0;
    }

    .btn {
        display: block;
        background-color: var(--accents-color-teal);
        color: var(--neutral-color-white);
        text-align: center;
        text-decoration: none;
        font-weight: 600;
        font-size: var(--fs-medium);
        padding: 0.9em 1em;
        border-radius: var(--radius-6);
        transition:
            background-color 0.25s ease,
            transform 0.15s ease;
        border: none;
    }

    .btn:hover {
        background-color: var(--accents-color-dark-green);
        transform: translateY(-2px);
    }

    /* --- Desktop layout --- */
    @media (min-width: 768px) {
        main {
            max-width: 100ch;
            padding: 3em 4em;
        }

        h2 {
            font-size: var(--fs-display);
            margin-bottom: 0.7em;
        }

        h3 {
            font-size: var(--fs-large);
            margin-top: 1.5em;
            margin-bottom: 1.5em;
        }

        .btn-group {
            flex-direction: row;
            justify-content: flex-start;
            gap: 1.5em;
        }

        .btn {
            width: auto;
            min-width: 12em;
            padding: 1em 2em;
        }
    }
</style>
