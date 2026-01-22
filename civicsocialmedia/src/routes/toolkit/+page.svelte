<main>
    <h2>Ontwerpprincipes voor Civic Social Media</h2>
    <p>
        Principes en keuzes voor het ontwerpen, lanceren en onderhouden van
        Civic Social Media.
    </p>
    <h3>Ontwerpen voor Civic Social Media</h3>

    <p>
        Deze toolkit bevat 55 kaarten, samengesteld uit community archetypes,
        ontwerpprincipes en -dimensies voor Civic Social Media, die kunnen
        helpen bij het vormgeven van digitale platforms op basis van publieke
        waarden. Bij de toolkit horen 3 activiteiten: begrijpen, ontwerpen en
        evalueren. De activiteiten kunnen los van elkaar gebruikt worden, maar
        bouwen ook op elkaar voort als ontwerpproces.
    </p>

    <div class="btn-group">
        <a href="/begrijpen" class="btn">Begrijpen</a>
        <a href="/ontwerpen" class="btn">Ontwerpen</a>
        <a href="/evalueren" class="btn">Evalueren</a>
    </div>

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

    <p class="text">Wilt u direct de 55 kaarten verkennen? Klik dan hier.</p>

    <a href="/kaarten" class="btn btn-all-cards">
        <span class="btn-text-desktop">Bekijk alle kaarten</span>
        <span class="btn-text-mobile">Alle kaarten</span>
    </a>
</main>

<style>
    main {
        padding: 2em;

        @media (min-width: 768px) {
            padding: 0 4em;
        }
    }

    /* --- Headings --- */
    h2 {
        font-size: var(--fs-title);
        margin-bottom: 0.5em;
        color: var(--primary-color-deep-blue);
        text-align: left;

        @media (min-width: 768px) {
            font-size: var(--fs-display);
            margin-bottom: 0.5em;
            padding-left: 0;
        }
    }

    h3 {
        font-size: var(--fs-large);
        margin-top: 1.5em;
        margin-bottom: 0.5em;
        color: var(--primary-color-deep-blue);

        @media (min-width: 768px) {
            font-size: var(--fs-large);
            margin-top: 1.5em;
            margin-bottom: 1.5em;
            padding-left: 0;
        }
    }

    /* --- Paragraphs --- */
    p {
        font-size: var(--fs-medium);
        line-height: 1.6;
        text-align: left;
        padding-left: 0em;
        max-width: 75ch;
    }

    /* --- Buttons --- */
    .btn-group {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 1em;
        margin: 2em 0;

        @media (min-width: 768px) {
            flex-direction: row;
            justify-content: flex-start;
            gap: 1.5em;
        }
    }

    .btn {
        display: inline-block;
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

        &:hover {
            background-color: var(--accents-color-dark-green);
            transform: translateY(-2px);
        }

        @media (min-width: 768px) {
            width: auto;
            min-width: 12em;
            padding: 1em 2em;
        }
    }

    .text {
        font-weight: 700;
        margin-bottom: 1em;
    }

    .btn-all-cards {
        margin-top: 2.5em;
        font-weight: 700;
        margin-bottom: 3em;
    }

    /* Mobile: korte tekst */
    .btn-text-desktop {
        display: none;

        @media (min-width: 768px) {
            display: inline;
        }
    }

    .btn-text-mobile {
        display: inline;

        @media (min-width: 768px) {
            display: none;
        }
    }
</style>
