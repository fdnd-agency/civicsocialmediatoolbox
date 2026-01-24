<script>
  export let card;
  export let index;

  const imgUrl = `https://fdnd-agency.directus.app/assets/${card.posterimage}`;
</script>

<section class="flip-card">
  <input type="checkbox" id={"flip-" + index} class="flip-checkbox" />
  <label
    for={"flip-" + index}
    class="card"
    tabindex="0"
    on:keydown={(e) => e.key === "Enter" && e.currentTarget.click()}
  >
    <div class="flip-inner">
      <div class="flip-front">
        <h2>{card.categorie}</h2>
        <img
          src={imgUrl}
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
        <img src={imgUrl} alt={card.subtitle} />
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
</section>

<style>
  .flip-card {
    perspective: 1000px;
    position: relative;
  }

  /* Flip card */
  .card {
    display: block;
    width: 21rem;
    height: 29rem;
    cursor: pointer;
    position: relative;
    outline: none;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    z-index: 1;
  }

  .card:hover,
  .card:focus {
    transform: scale(1.02);
    z-index: 10;
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

  .flip-checkbox {
    display: none;
  }

  .card:focus-visible {
    outline: 3px solid #8874ca;
    outline-offset: 4px;
  }

  .card p {
    font-size: 0.8rem;
    line-height: 1.3;
    text-align: center;
    color: black;
  }

  .card img {
    width: 90px;
    height: 90px;
    margin-top: 1rem;
    border-radius: 14px;
    object-fit: cover;
  }
</style>
