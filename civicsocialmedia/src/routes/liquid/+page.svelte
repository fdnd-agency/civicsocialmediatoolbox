<section class="content-box">
  <h1>Liquid blurs and gradients</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt.</p>
</section>

<style>
/* Mobile First */
.content-box {
  width: 90%;
  max-width: 800px;
  margin: 6rem auto 4rem;
  padding: 2rem;
  border-radius: 1.5rem;
  position: relative;
  background: linear-gradient(180deg, rgba(102,255,255,0.05), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(1rem) saturate(120%);
  box-shadow: 0 1rem 2rem rgba(8,10,30,0.55);
}

.content-box h1 {
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 1rem;
}

.content-box p {
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
}

/* Larger screens */
@media (min-width: 768px) {
  .content-box {
    width: 60%;
    padding: 4rem;
    margin-top: 13rem;
  }
  .content-box h1 {
    font-size: 2.625rem;
  }
}
</style>
