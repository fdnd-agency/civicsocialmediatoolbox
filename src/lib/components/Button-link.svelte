<script>
  export let href = "/";
</script>

<a href={href} class="btn">
  <slot>Lees meer</slot>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14m0 0-5-5m5 5-5 5"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</a>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 10px 22px;
    border-radius: 999px;
    background: #0f3f53;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    line-height: 1;
    transition: background .2s, transform .1s, box-shadow .2s;
  }
  .btn:hover { background:#0d3749; transform: translateY(-1px); box-shadow:0 6px 18px rgba(0,0,0,.25); }
  .btn:active { transform:none; box-shadow:none; }
  .btn:focus-visible { outline:3px solid #fff; outline-offset:2px; }
</style>