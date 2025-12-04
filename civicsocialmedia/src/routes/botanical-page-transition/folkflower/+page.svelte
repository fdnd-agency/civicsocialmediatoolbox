<script>
    import { gsap } from "gsap";
    import folkFlower from '$lib/assets/folkflower.png';
    import { onMount } from "svelte";
    import { SplitText } from "gsap/SplitText";
    gsap.registerPlugin(SplitText);


// Split text animation
onMount(() => {
    let split = new SplitText("h1", { type: "chars" });
    const tl = gsap.timeline();
    
    tl.from(split.chars, {
      duration: 1.2,
      opacity: 0,
      y: 50,
      stagger: 0.05, //https://gsap.com/resources/getting-started/Staggers/
      ease: "power2.out" 
    })
});
</script>

<main>
      <section class="section-folk-flower">
        <h1 class="folk-text">Liquid Botanicals</h1> 
        <img class="folk-flower-image" src={folkFlower} alt="A folk flower in a liquid bottle" width="600" height="700">  
    </section> 
</main>

<style>
@font-face {
    font-family: 'Instrument Serif';
    src:
        url('/fonts/Instrument_Serif/InstrumentSerif-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main {
    position: absolute;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    inset: 0;
}


.section-folk-flower {
    display: flex;
    justify-content: center;
    align-items: center;
}

.folk-text {
    font-family: 'Instrument Serif', serif;
    font-weight: 100;
    font-size: 6rem;
    text-transform: uppercase;
    color: white;    
    top: 2rem;
    z-index: 10;
}
    



</style>