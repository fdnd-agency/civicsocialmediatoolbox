<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
 
    export let data;
    const cards = data.cards;
 
    let listEl;
    let leftBtn;
    let rightBtn;
 
    function imageUrl(card) {
        return `https://fdnd-agency.directus.app/assets/${card.posterimage}`;
    }
 
    function scrollLeft(e) {
        e.preventDefault();
        if (listEl) {
            listEl.scrollBy({ left: -400, behavior: "smooth" });
            press(leftBtn, -6);
        }
    }
 
    function scrollRight(e) {
        e.preventDefault();
        if (listEl) {
            listEl.scrollBy({ left: 400, behavior: "smooth" });
            press(rightBtn, 6);
        }
    }
 
    function press(btn, x) {
        gsap.fromTo(
            btn,
            { scale: 1, x: 0 },
            {
                scale: 0.92,
                x,
                duration: 0.12,
                yoyo: true,
                repeat: 1,
                ease: "power1.out",
            },
        );
    }
 
    onMount(() => {
        document.documentElement.classList.add("js");
        [leftBtn, rightBtn].forEach((btn, i) => {
            const dir = i === 0 ? -4 : 4;
            btn.addEventListener("mouseenter", () => {
                gsap.to(btn, {
                    scale: 1.06,
                    duration: 0.2,
                    ease: "power2.out",
                });
                gsap.to(btn, { x: dir, duration: 0.25, ease: "power2.out" });
            });
            btn.addEventListener("mouseleave", () => {
                gsap.to(btn, {
                    scale: 1,
                    x: 0,
                    duration: 0.2,
                    ease: "power2.out",
                });
            });
        });
    });
</script>
 
<main>
    <h2>Ontwerpprincipes</h2>
    <p>
        <strong>
            Hier presenteren we vijf ontwerpprincipes en zeven ontwerpdimensies
            voor het ontwerpproces van civic social media. Ze kunnen in het
            gehele traject worden toegepast van ambitieus concept tot de
            kleinste UI-details om richting te geven aan ontwerpkeuzes.
        </strong>
    </p>
    <p>
        De vijf ontwerpprincipes zijn voor alle civic social media van
        toepassing, ongeacht het type gemeenschap waarvoor wordt ontworpen.
    </p>
 
    <header class="title">
        <h3>Vijf ontwerpprincipes voor civic social media</h3>
    </header>
 
    <section class="card-container">
        <a href="#card-0" class="no-js-scroll">
            <button
                bind:this={leftBtn}
                class="scroll-button left"
                on:click={scrollLeft}
                aria-label="Scroll left"
            >
                ◀
            </button>
        </a>
 
        <a href="#card-{cards.length - 1}" class="no-js-scroll">
            <button
                bind:this={rightBtn}
                class="scroll-button right"
                on:click={scrollRight}
                aria-label="Scroll right"
            >
                ▶
            </button>
        </a>
 
        <ul bind:this={listEl}>
            {#each cards as card, index}
                <li id={"card-" + index}>
                    <input
                        type="checkbox"
                        id={"flip-" + index}
                        class="flip-checkbox"
                    />
                    <label for={"flip-" + index} class="card" tabindex="0">
                        <div class="flip-inner">
                            <div class="flip-front">
                                <h2>{card.categorie}</h2>
                                <img
                                    src={imageUrl(card)}
                                    alt={card.subtitle}
                                    loading="lazy"
                                    decoding="async"
                                    width="90"
                                    height="90"
                                />
                                <h3>{card.subtitle}</h3>
                            </div>
                            <div class="flip-back">
                                <h2>{card.categorie}</h2>
                                <img src={imageUrl(card)} alt={card.subtitle} />
                                <h3>{card.subtitle}</h3>
                                <p>
                                    {card.body
                                        .replace(/<br\s*\/?>/gi, " ")
                                        .replace(/<\/?strong>/gi, "")
                                        .replace(/<\/?p>/gi, " ")}
                                </p>
                            </div>
                        </div>
                    </label>
                </li>
            {/each}
        </ul>
    </section>
</main>
 
<style>
    main {
        padding: 2em;
        h2 {
            font-size: var(--fs-title);
            margin-bottom: 0.5em;
            color: var(--primary-color-deep-blue);
        }
        h3 {
            font-size: var(--fs-large);
            color: var(--primary-color-deep-blue);
        }
        p {
            font-size: var(--fs-small);
            line-height: 1.6;
            color: var(--neutral-color-grey-700);
            max-width: 75ch;
        }
    }
 
    .card-container {
        position: relative;
        container-type: inline-size;
        container-name: card-grid;
        width: 100%;
        padding: 0 3rem;
        ul {
            list-style: none;
            padding: 1rem 0 2rem 0;
            margin: 0;
            scroll-behavior: smooth;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }
 
    @container card-grid (min-width: 600px) {
        .card-container ul {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @container card-grid (min-width: 900px) {
        .card-container ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }
 
    @container card-grid (min-width: 1200px) {
        .card-container ul {
            display: flex;
            overflow-x: auto;
            gap: 5rem;
            padding: 2rem;
            flex-wrap: nowrap;
            scroll-snap-type: x mandatory;
            scroll-padding-inline: 2rem;
            
 
            &::-webkit-scrollbar {
                display: none;
            }
 
            .card {
                flex: 0 0 auto;
                width: 20em;
                height: 30em;
                scroll-snap-align: start;
                -webkit-scroll-snap-align: start;
 
                scroll-snap-stop: always;
            }
        }
    }
 
    /* IMPROVED FLIP LOGIC */
    .card {
        display: block;
        width: 20em;
        height: 30em;
        cursor: pointer;
        position: relative;
        perspective: 1000px;
        outline: none;
        /* Transition for hover effects */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
 
    .card:hover, .card:focus {
        transform: scale(1.02);
    }
 
    .flip-inner {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        transform-style: preserve-3d;
    }
 
    .flip-checkbox:checked + .card .flip-inner {
        transform: rotateY(180deg);
    }
 
    .flip-front,
    .flip-back {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 0.75rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
 
    .flip-front {
        background-color: #472562;
        color: white;
        z-index: 2;
        transform: rotateY(0deg);
    }
 
    .flip-back {
        background: white;
        color: #472562;
        border: 10px solid #472562;
        box-sizing: border-box;
        transform: rotateY(180deg);
        z-index: 1;
    }
 
    /* Inner Element Styling */
    .card h2 {
        font-size: 1rem;
        text-align: center;
        color: white;
    }
    .card h3 {
        font-size: 0.9rem;
        font-weight: 600;
        text-align: center;
        color: white;
    }
    .card p {
        font-size: 0.8rem;
        line-height: 1.3;
        text-align: center;
    }
    .card img {
        width: 90px;
        height: 90px;
        border-radius: 14px;
        object-fit: cover;
    }
 
    /* Scroll buttons */
    .scroll-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 100;
        background: #472562;
        color: white;
        width: 44px;
        height: 44px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        display: none;
        &:hover {
            background: #8874ca;
        }
    }
 
    .scroll-button.left {
        left: -10px;
        margin-left: 0;
    }
    .scroll-button.right {
        right: -10px;
        margin-right: 0;
    }
 
    @container card-grid (min-width: 1000px) {
        .scroll-button {
            display: block;
        }
    }
    
    html {
        scroll-behavior: smooth;
    }
 
    .flip-checkbox {
        display: none;
    }
    .no-js-scroll {
        text-decoration: none;
        color: inherit;
    }
</style>