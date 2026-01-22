<!-- <script>
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

  // Scroll functions
  function scrollLeft() {
    listEl.scrollBy({ left: -420, behavior: "smooth" });
  }

  function scrollRight() {
    listEl.scrollBy({ left: 420, behavior: "smooth" });
  }

  // Animation for hover + click
  function animateButton(btn, clickOffset = 0) {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.06, x: clickOffset, duration: 0.25, ease: "power2.out" });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, x: 0, duration: 0.25, ease: "power2.out" });
    });
  }

  // Click press effect
  function press(btn, x) {
    gsap.fromTo(
      btn,
      { scale: 1, x: 0 },
      { scale: 0.92, x, duration: 0.12, yoyo: true, repeat: 1, ease: "power1.out" }
    );
  }

onMount(() => {
  // button hover/click animations
  animateButton(leftBtn, -4);
  animateButton(rightBtn, 4);

  // Select all cards and hide them initially
  const cards = document.querySelectorAll(".card-container ul li");
  gsap.set(cards, { opacity: 0, scale: 0.8 });

  // Animate visible cards with stagger
  function animateVisibleCards() {
    const containerRect = listEl.getBoundingClientRect();

    // Only select cards that are in view and not yet animated
    const visibleCards = Array.from(cards).filter((card) => {
      const cardRect = card.getBoundingClientRect();
      return (
        cardRect.left < containerRect.right &&
        cardRect.right > containerRect.left &&
        !card.classList.contains("animated")
      );
    });

    if (visibleCards.length > 0) {
      gsap.to(visibleCards, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2, // staggered effect
        onComplete: () => {
          visibleCards.forEach((card) => card.classList.add("animated"));
        },
      });
    }
  }

  // Listen for horizontal scroll
  listEl.addEventListener("scroll", animateVisibleCards);

  // Animate any cards visible on initial load
  animateVisibleCards();
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
    De vijf ontwerpprincipes zijn voor alle civic social media van toepassing, ongeacht het type gemeenschap waarvoor wordt ontworpen.
  </p>
  <p>
  Daarnaast hebben verschillende gemeenschappen ook uiteenlopende behoeften, wat kan leiden tot spanningen tussen de ontwerpprincipes en de publieke waarden waarop ze zijn gebaseerd. Zo kan het voor de ene gemeenschap essentieel zijn dat gesprekken plaatsvinden in de openbare ruimte, terwijl een andere gemeenschap juist gebaat is bij een vertrouwde, besloten omgeving. Het is daarom belangrijk om deze afweging te maken, in de eerste plaats ten behoeve van het type gemeenschap.
</p>

  <header class="title">
    <h3>Vijf ontwerpprincipes voor civic social media</h3>
  </header>

  <section class="card-container">
    <button
      bind:this={leftBtn}
      class="scroll-button left"
      on:click={() => { scrollLeft(); press(leftBtn, -4); }}
      aria-label="Scroll left"
    >
      ◀
    </button>

    <button
      bind:this={rightBtn}
      class="scroll-button right"
      on:click={() => { scrollRight(); press(rightBtn, 4); }}
      aria-label="Scroll right"
    >
      ▶
    </button>

    <ul bind:this={listEl}>
      {#each cards as card, index}
        <li id={"card-" + index}>
          <input type="checkbox" id={"flip-" + index} class="flip-checkbox" />
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

    & h2 {
      font-size: var(--fs-title);
      margin-bottom: 0.5em;
      color: var(--primary-color-deep-blue);
    }

    & h3 {
      font-size: var(--fs-large);
      color: var(--primary-color-deep-blue);
    }

    & p {
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
    padding: 0 1rem;
    padding-inline: 2rem;

    & ul {
      list-style: none;
      margin: 0;
      display: grid;
      grid-template-columns: auto;
      justify-content: center;
      gap: 2rem;
      padding: 1rem 1.5rem 2rem;
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
      gap: 4rem;
      padding: 0 4rem;
      scrollbar-width: none;
      justify-content: flex-start;
    }

    .card-container ul::-webkit-scrollbar {
      display: none;
    }

    .card-container ul li {
      flex: 0 0 20rem;
    }

    .card {
      width: 100%;
      height: 28rem;
      padding: 1rem;
      box-sizing: border-box;
    }
  }

  /* Flip card */
  .card {
    display: block;
    width: 22rem;
    height: 29rem;
    cursor: pointer;
    position: relative;
    perspective: 1000px;
    outline: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover,
  .card:focus {
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
    backface-visibility: hidden;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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

  .flip-front h2 {
    font-size: 1rem;
    text-align: center;
    color: white;
  }

  .flip-back h2 {
    font-size: 1rem;
    text-align: center;
    color: black;
  }

  .flip-front h3 {
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    color: white;
  }

  .flip-back h3 {
    font-size: 1.1rem;
    font-weight: 700;
    text-align: center;
    color: black;
  }

  .card p {
    font-size: 0.8rem;
    line-height: 1.3;
    text-align: center;
  }

  .card img {
    width: 90px;
    height: 90px;
    margin-top: 1rem;
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
  }

  .scroll-button:hover {
    background: #8874ca;
  }

  .scroll-button.left {
    left: 0;
    z-index: 101;
  }

  .scroll-button.right {
    right: 0;
    z-index: 101;
  }

  @container card-grid (min-width: 1200px) {
    .scroll-button {
      display: block;
    }
  }

  .flip-checkbox {
    display: none;
  }
</style>
 -->


 <script>
  import Cards from '$lib/components/OntwerpprincipesCards.svelte';

  export let data;

  // Extract cards from your data
  const cards = data.cards;
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
    De vijf ontwerpprincipes zijn voor alle civic social media van toepassing, ongeacht het type gemeenschap waarvoor wordt ontworpen.
  </p>
  <p>
  Daarnaast hebben verschillende gemeenschappen ook uiteenlopende behoeften, wat kan leiden tot spanningen tussen de ontwerpprincipes en de publieke waarden waarop ze zijn gebaseerd. Zo kan het voor de ene gemeenschap essentieel zijn dat gesprekken plaatsvinden in de openbare ruimte, terwijl een andere gemeenschap juist gebaat is bij een vertrouwde, besloten omgeving. Het is daarom belangrijk om deze afweging te maken, in de eerste plaats ten behoeve van het type gemeenschap.
</p>

  <header class="title">
    <h3>Vijf ontwerpprincipes voor civic social media</h3>
  </header>

  <!-- Cards component -->
  <Cards {cards} />
</main>

<style>
 main {
  padding: 2em;
}

main h2 {
  font-size: var(--fs-title);
  margin-bottom: 0.5em;
  color: var(--primary-color-deep-blue);
}

main h3 {
  font-size: var(--fs-large);
  color: var(--primary-color-deep-blue);
}

main p {
  font-size: var(--fs-small);
  line-height: 1.6;
  color: var(--neutral-color-grey-700);
  max-width: 75ch;
}

  @media (prefers-color-scheme: dark) {
    main {
      background-color: var(--neutral-color-black);
    }
  }
</style>