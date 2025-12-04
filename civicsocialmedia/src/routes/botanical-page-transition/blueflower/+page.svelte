<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { SplitText } from "gsap/SplitText";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    import blueFlower from '$lib/assets/blue-flower.png';
    import glassFlower from '$lib/assets/floral-glass.png';

    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger); 


// Split text animation
onMount(() => {
    let split = new SplitText("h1", { type: "chars" });
    const tl = gsap.timeline();
    
    tl.from(split.chars, {
      duration: 1.2,
      delay: 1,
      opacity: 0,
      y: 50,
      stagger: 0.05, //https://gsap.com/resources/getting-started/Staggers/
      ease: "power2.out" 
    })
});

// ScrollTrigger animation
onMount(() => {
    let sections = gsap.utils.toArray("section"), //select all sections
    currentSection = sections[0];

    gsap.defaults({overwrite: 'auto', duration: 0.3}) // animation duration: 0.3s
    gsap.set("main", {height: (sections.length * 100) + "%"}); //set main height to number of sections * 100% (according to existing sections)

    sections.forEach((section, i) => { // create scrolltrigger for each section, i is the indexnumber
    ScrollTrigger.create({
        start: () => (i - 0.5) * innerHeight, // when the top of the viewport reaches half the height of the section before
        end: () => (i + 0.5) * innerHeight, // when the top of the viewport reaches half the height of the next section
        onToggle: self => self.isActive && setSection(section)
  });
});

function setSection(newSection) {
  if (newSection !== currentSection) { // new section is the new section to be shown
    gsap.to(currentSection, {scale: 0.8, autoAlpha: 0}) // current section is the section to be hidden
    gsap.to(newSection, {scale: 1, autoAlpha: 1}); //scale up the new section and make it visible
    currentSection = newSection; // update current section to new section
  }
}

ScrollTrigger.create({
  start: 1,
  end: () => ScrollTrigger.maxScroll(window) - 1,
  onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
  onLeave: self => self.scroll(2)
}).scroll(2);

});

</script>



<main> 
    <section class="first section-blue-flower">
        <h1 class="liquid"> Online store for Liquid Botanicals</h1>
        <a href="/botanical-page-transition/folkflower">
            <img src={blueFlower} alt="A blue flower in a liquid bottle" width="470" height="620">
        </a>
        <h1 class="camellia">Blue camellia</h1>
    </section>

    <section class="section-folk-flower">
        <h1 class="folk-text">Liquid Botanicals</h1>
        <img class="folk-flower-image" src={glassFlower} alt="A folk flower in a liquid bottle" width="600" height="700">  
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

.section-blue-flower {
    background-color: #CDCDCD;
}

section:not(.first) {
  opacity: 0;
  visibility: hidden;
  transform: scale(0.8);
} 

h1 {
    font-family: 'Instrument Serif', serif;
    font-weight: 100;
    font-size: 6rem;
    text-transform: uppercase;
    color: #072A66;    
}

.liquid {
    max-width: 7.4em;
    padding-left: .2em;
}
    
.camellia {
    transform: rotate(90deg) translatey(-2.5em) translatey(-.4em);
    font-size: 6rem;
}

a { 
    display: flex;
    justify-content: center;
    align-items: center;
}

.folk-flower-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    inset: 0;
    position: relative;
}

.section-folk-flower {
    display: flex;
    justify-content: center;
}

.folk-text {
    position: absolute;
    top: 2rem;
    z-index: 10;
    color: #BA010B;
}

</style>