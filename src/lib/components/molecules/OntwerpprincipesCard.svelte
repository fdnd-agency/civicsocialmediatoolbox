<!-- <script>
  export let card;

  let flipped = false;

  const imgUrl = `https://fdnd-agency.directus.app/assets/${card.posterimage}`;

  function toggleFlip() {
    flipped = !flipped;
  }

  function handleKeydown(event) {
    if (event.key === "Enter" || event.key === " ") {
      toggleFlip();
    }
  }
</script>

<form
  class="card"
  class:flipped={flipped}
  on:click={toggleFlip}
  on:keydown={handleKeydown}
>

<button type="button" class="card-front {card.title}">
  <h2>{card.title}</h2>

  <img
    src={imgUrl}
    alt={card.title}
    width="240"
    height="192"
  />

  <p class="category">{card.categorie}</p>
</button>

 
  <button type="button" class="card-back">
    <h2>{card.categorie}</h2>

    <img src={imgUrl} alt={card.subtitle} width="90" height="90" />

    <h3>{card.subtitle}</h3>

    <p>
      {card.body
        .replace(/<br\s*\/?>/gi, " ")
        .replace(/<\/?strong>/gi, "")
        .replace(/<\/?p>/gi, " ")}
    </p>
  </button>
</form>

<style>
  .card {
    width: 18.5em;
    height: 26.25em; 
    perspective: 1000px;
    cursor: pointer;
    margin: 1em;
    position: relative;
  }

  .card-front,
  .card-back {
    all: unset;
    width: 100%;
    height: 100%;
    border-radius: 0.75em;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.6s ease-in-out;
  }

  .card-front {
    background-color: #472562;
    color: white;
    transform: rotateY(0deg);
  }

  .card-front h2 {
    text-align: center;
    font-size: 2.3rem;
}

.card-front .category {
    text-align: center;
    font-family: var(--font-serif);
    font-size: var(--fs-medium);
    color: var(--neutral-color-white);
}

  .card-back {
    background: white;
    color: #472562;
    border: 1em solid #472562;
    transform: rotateY(180deg);
  }

  .card.flipped .card-front {
    transform: rotateY(180deg);
  }

  .card.flipped .card-back {
    transform: rotateY(0deg);
  }

  .card-back h2 {
    font-size: 1rem;
    text-align: center;
    color: var(--neutral-color-black);
  }

  .card-back h3 {
    text-align: center;
  font-family: var(--font-serif);
  font-size: var(--fs-medium);
  color: var(--neutral-color-black);
  }

  p {
    font-size: 0.85rem;
    text-align: center;
    line-height: 1.3;
    color: var(--neutral-color-black);
  }

  img {
    display: block;
    margin: 1rem auto;
    border-radius: 14px;
    object-fit: cover;
  }

  .card:focus {
    outline: 3px solid #8874ca;
    outline-offset: 4px;
  }
</style> -->

<script>
  import Card from "./Card.svelte";
  export let card;
</script>

<Card {card} type="ontwerp">
  <!-- FRONT -->
  <div slot="front" let:imgUrl class="ontwerp-front">
    <h2 style="font-size: 2.3rem;">{card.title}</h2>
    <img src={imgUrl} alt={card.title} width="240" height="192" />
    <p class="card-category ontwerp-category">
      {card.categorie}
    </p>
  </div>

  <!-- BACK (bewust anders, blijft zo) -->
  <div slot="back" let:imgUrl class="ontwerp-back">
    <h2>{card.categorie}</h2>
    <img src={imgUrl} alt={card.subtitle} width="90" height="90" />
    <h3>{card.subtitle}</h3>
    <p>
      {card.body
        .replace(/<br\s*\/?>/gi, " ")
        .replace(/<\/?strong>/gi, "")
        .replace(/<\/?p>/gi, " ")}
    </p>
  </div>
</Card>

<style>
  .ontwerp-front {
    h2 {
      text-align: center;
    }

    .card-category {
      font-family: var(--font-serif);
      font-size: var(--fs-medium);
      text-align: center;
      margin: 0;
      padding-bottom: 1rem;
      color: white;
    }
  }

  .ontwerp-back {
    h2 {
      text-align: center;
      font-size: 1rem;
      color: var(--neutral-color-black);
    }

    h3 {
      text-align: center;
      font-family: var(--font-serif);
      font-size: var(--fs-medium);
      color: var(--neutral-color-black);
    }

    p {
      font-size: 0.85rem;
      text-align: center;
      line-height: 1.3;
      color: var(--neutral-color-black);
      padding: 0 1em;
    }
  }

  img {
    display: block;
    margin: 1rem auto;
    border-radius: 14px;
    object-fit: cover;
  }

  /* algemene styling voor card-category buiten ontwerp-front (optioneel) */
  .card-category {
    font-family: var(--font-serif);
    font-size: var(--fs-medium);
    text-align: center;
    margin: 0;
    padding-bottom: 1rem;
  }
</style>
