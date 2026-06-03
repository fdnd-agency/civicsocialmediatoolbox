<!-- <script>
  import Card from "./Card.svelte";
  export let card;
</script>

<Card {card} type="ontwerp">
  
  <div slot="front" let:imgUrl class="ontwerp-front">
    <h2 style="font-size: 2.3rem;">{card.title}</h2>
    <img src={imgUrl} alt={card.title} width="240" height="192" />
    <p class="card-category ontwerp-category">
      {card.categorie}
    </p>
  </div>


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
</style> -->

