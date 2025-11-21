<script>
  export let href = "/";
</script>

<a href={href} class="btn">
  <p>Lees meer</p>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14m0 0-5-5m5 5-5 5"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</a>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 1em;
    height: 2vh;
    padding: 1em;
    border-radius: 6em;
    background: var(--primary-dark-blue);
    color: var(--neutral-color-white);
    text-decoration: none;
    transition: background .2s, transform .1s, box-shadow .2s;
    &:hover {
    background: #0d3749;
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, .25);
  }
    &:focus-visible {
    outline: 0.2rem solid var(--neutral-color-white);
    outline-offset: 0.15rem;
  }
}
</style>