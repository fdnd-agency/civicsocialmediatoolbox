<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  let blobEl;
  let mainContent;
  let nav;

  onMount(() => {
    // Pulsing blob
    gsap.to(blobEl, {
      scale: 1.1,
      yoyo: true,
      repeat: -1,
      duration: 6,
      ease: "sine.inOut",
    });

    // Scroll movement of blob
    if (mainContent && blobEl) {
      gsap.to(blobEl, {
        y: 150,
        scrollTrigger: {
          trigger: mainContent,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Fade in nav
    if (nav) {
      gsap.from(nav, { opacity: 0, y: -20, duration: 1 });
    }
  });

  function skipToContent() {
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });
      mainContent.focus();
    }
  }
</script>

<div class="page">
  <!-- Blob background -->
  <img bind:this={blobEl} src="/blob-shape.svg" alt="decorative blob" class="blob" />

  <!-- Skip button -->
  <button class="skip" on:click|preventDefault={skipToContent}>SKIP TO CONTENT</button>

  <!-- Navigation -->
  <nav bind:this={nav} class="nav">
    <ul>
      <li><span class="nav-item">Home</span></li>
      <li><span class="nav-item">About</span></li>
      <li><span class="nav-item">Services</span></li>
      <li><span class="nav-item">FAQ</span></li>
      <li><span class="nav-item">Contact</span></li>
    </ul>
  </nav>

  <!-- Main content slot -->
  <main bind:this={mainContent}>
    <slot />
  </main>
</div>

<style>
/* Mobile First */
.page {
  position: relative;
  min-height: 200vh;
  background: #181b59;
  color: white;
  font-family: sans-serif;
  overflow-x: hidden;
}

.skip {
  position: absolute;
  top: 1.875rem;
  left: 1.875rem;
  padding: 0.5rem 1.25rem;
  background: transparent;
  border: 0.125rem solid white;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  z-index: 20;
}
.skip:focus {
  outline: 0.1875rem solid #66ffff;
}

.blob {
  position: absolute;
  width: 150vw;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.75;
  filter: blur(1.875rem);
  z-index: 0;
}

.nav {
  margin: 6rem auto 0;
  display: flex;
  width: 90%;
  padding: 1rem;
  border-radius: 1.75rem;
  position: relative;
  z-index: 8;
  background: linear-gradient(135deg, rgba(102,255,255,0.05), rgba(255,255,255,0.03));
  border: 0.0625rem solid rgba(255,255,255,0.12);
  backdrop-filter: blur(0.75rem) saturate(120%);
  box-shadow: 0 0.5rem 1.25rem rgba(8,10,30,0.45);
}

.nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
  align-items: center;
  width: 100%;
}

.nav-item {
  text-transform: uppercase;
  color: rgba(255,255,255,0.95);
  font-size: 0.875rem;
  cursor: pointer;
}

.nav-item:hover {
  text-decoration: underline;
}

main {
  margin-top: 3rem;
  position: relative;
  z-index: 10;
}

/* Larger screens */
@media (min-width: 768px) {
  .nav {
    width: 60%;
    padding: 1.125rem;
  }
  .nav ul {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
  .blob {
    width: 75rem;
    top: -3.125rem;
  }
}
</style>
