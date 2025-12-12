<script>
    import { gsap } from "gsap";
    import { SplitText } from "gsap/SplitText";
    import { onMount } from "svelte";


    import risoprint from '$lib/assets/risoprint.jpg';
    import risoprint2 from '$lib/assets/risoprint2.jpg';
    import risoprint3 from '$lib/assets/risoprint3.jpg';
    import risoprint4 from '$lib/assets/risoprint4.jpg';
    import risoprint5 from '$lib/assets/risoprint5.jpg';
    import risoprint6 from '$lib/assets/risoprint6.png';
    import risoprint7 from '$lib/assets/risoprint7.jpg';
    import risoprint8 from '$lib/assets/risoprint8.jpg';

    gsap.registerPlugin(SplitText);

   
</script>

<main>
    <h1>Marvelous risoprint carousel</h1>
    <p>Scroll left and right to navigate through the carousel</p>

    <ul>
        <li>
            <img src={risoprint} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint2} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint3} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint4} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint5} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint6} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint7} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint8} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint2} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint3} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint4} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint5} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint6} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint7} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
        <li>
            <img src={risoprint8} alt="A blue flower in a liquid bottle" width="300" height="420">
        </li>
    </ul>

</main>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: 'Instrument Serif';
    src:
        url('/fonts/Instrument_Serif/InstrumentSerif-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;    
}


   
@media (prefers-color-scheme: dark) {
    main {
        background: #121212;
        color: #fff;
    }
}

h1, h2 {
    font-family: 'Instrument Serif', serif;
    font-weight: 100;
    font-size: 4rem;
    text-align: center;
    @media (min-width: 768px) {
        font-size: 9rem;
    }
}

p {
    font-family: 'Instrument Serif', serif;
    font-weight: 100;
    font-size: 1.5rem;
    text-align: center;
    margin: 1em;
}

ul {
    display: flex;
    overflow-x: auto;
    gap: 2rem;
    padding: 2em;
    height: 40em;
    list-style: none;
    transform-style: preserve-3d;
    scroll-snap-type: x mandatory;
    scroll-snap-align: center;
    overscroll-behavior-x: contain; /* voorkomt scrollen naar andere pagina */

}

li {
    view-timeline-name: --set-li;
    view-timeline-axis: inline;
    animation: linear adjust-z-index both;
    animation-duration: auto;
    animation-timeline: --set-li;
    animation-range: contain 0% contain 100%; 
    perspective: 40em;
    position: relative;
}

@keyframes adjust-z-index {
    0% {
        z-index: 1;
    }
    50% {
        z-index: 100; /* When at the center, be on top */
    }
    100% {
        z-index: 1;
    }
}

img {
	animation: linear rotate-cover  both;
    -webkit-box-reflect: below 0.5em linear-gradient(rgb(0 0 0 / 0), rgb(0 0 0 / 0.25));
    animation-duration: auto;
    animation-timeline: --set-li;
    animation-range: contain 0% contain 100%;
    transform: translateX(-100%) rotateY(-45deg);
}

@keyframes rotate-cover {
	0% {
		transform: translateX(-100%) rotateY(-45deg);
	}
	35% {
		transform: translateX(0) rotateY(-45deg);
	}
	50% {
		transform: rotateY(0deg) translateZ(1em) scale(1.5);
	}
	65% {
		transform: translateX(0) rotateY(45deg);
	}
	100% {
		transform: translateX(100%) rotateY(45deg);
	}
}

</style>
