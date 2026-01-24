<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import Card from "$lib/components/molecules/OntwerpprincipesCard.svelte";

  export let cards;

  let listEl;
  let leftBtn;
  let rightBtn;

  // Scroll functions 
  function scrollLeft() {
    listEl.scrollBy({ left: -420, behavior: "smooth" });
  }
  function scrollRight() {
    listEl.scrollBy({ left: 420, behavior: "smooth" });
  }

  // Animation for hover + click
  function animateButton(btn, clickOffset = 0) {
    btn.addEventListener("mouseenter", () =>
      gsap.to(btn, {
        scale: 1.06,
        x: clickOffset,
        duration: 0.25,
        ease: "power2.out",
      }),
    );
    btn.addEventListener("mouseleave", () =>
      gsap.to(btn, { scale: 1, x: 0, duration: 0.25, ease: "power2.out" }),
    );
  }

  // Click press effect
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
    // button hover/click animations
    animateButton(leftBtn, -4);
    animateButton(rightBtn, 4);

    // Select all cards and hide them initially
    const cardEls = listEl.querySelectorAll("li");
    gsap.set(cardEls, { opacity: 0, scale: 0.8 });

    // Animate visible cards with stagger
    function animateVisibleCards() {
      const containerRect = listEl.getBoundingClientRect();

      // Only select cards that are in view and not yet animated
      const visibleCards = Array.from(cardEls).filter((card) => {
        const rect = card.getBoundingClientRect();
        return (
          rect.left < containerRect.right &&
          rect.right > containerRect.left &&
          !card.classList.contains("animated")
        );
      });

      if (visibleCards.length > 0) {
        gsap.to(visibleCards, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          onComplete: () =>
            visibleCards.forEach((c) => c.classList.add("animated")),
        });
      }
    }

    // Listen for horizontal scroll
    listEl.addEventListener("scroll", animateVisibleCards);

    // Animate any cards visible on initial load
    animateVisibleCards();
  });
</script>

<section class="card-container">
  <button
    bind:this={leftBtn}
    class="scroll-button left"
    on:click={() => {
      scrollLeft();
      press(leftBtn, -4);
    }}
    aria-label="Scroll left"
  >
    ◀
  </button>

  <button
    bind:this={rightBtn}
    class="scroll-button right"
    on:click={() => {
      scrollRight();
      press(rightBtn, 4);
    }}
    aria-label="Scroll right"
  >
    ▶
  </button>

  <ul bind:this={listEl}>
    {#each cards as card, index}
      <li id={"card-" + index} tabindex="0">
        <div class="card-wrapper">
          <Card {card} {index} />
        </div>
      </li>
    {/each}
  </ul>
</section>

<style>
  .card-container {
    position: relative;
    container-type: inline-size;
    container-name: card-grid;
    width: 100%;
    padding: 0 1rem;
    padding-inline: 2rem;
  }

  .card-container ul {
    list-style: none;
    margin: 0;
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    gap: 2rem;
    padding: 1rem 1.5rem 2rem;
  }

  .card-wrapper {
    border-radius: 1rem;
    border: 2px solid transparent;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  /* Tap / click (mobile) */
  li:active .card-wrapper,
  li:focus .card-wrapper {
    border-color: white;
    outline: none;
  }

  /* Keyboard focus */
  li:focus-visible .card-wrapper {
    border-color: white;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.25);
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
      padding: 2rem 5rem;
      scrollbar-width: none;
      justify-content: flex-start;
    }

    .card-container ul::-webkit-scrollbar {
      display: none;
    }

    .card-container ul li {
      flex: 0 0 20rem;
      position: relative;
      z-index: 0;
    }
  }

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
</style>
