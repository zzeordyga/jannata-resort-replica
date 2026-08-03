<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="brand">
        <p class="serif name">Jannata</p>
        <p class="addr">Jl. Rsi Markandya, Ubud<br />Bali 80571, Indonesia</p>
      </div>
      <div class="contact">
        <p class="eyebrow">Contact</p>
        <ul>
          <li><a href="tel:+6236198200">+62 361 98200</a></li>
          <li><a href="mailto:stay@jannataresort.com">stay@jannataresort.com</a></li>
        </ul>
      </div>
      <div class="social">
        <p class="eyebrow">Follow</p>
        <ul class="row">
          <li><a href="#" aria-label="Facebook">FB</a></li>
          <li><a href="#" aria-label="Instagram">IG</a></li>
          <li><a href="#" aria-label="TripAdvisor">TA</a></li>
        </ul>
      </div>
    </div>
    <div class="container copy">
      <p>© {{ new Date().getFullYear() }} Jannata Luxury Villas &amp; Resort</p>
      <p class="muted">A revival redevelopment · Not affiliated with the original site</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--text);
  color: color-mix(in srgb, #fff 90%, var(--text));
  padding: 3rem 0 2rem;
}
.footer-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255,255,255,.1);
}
@media (min-width: 768px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr; } }
.name { font-size: 1.5rem; font-weight: 700; margin: 0 0 .5rem; color: #fff; }
.addr { opacity: .8; line-height: 1.6; }
.footer .eyebrow { color: rgba(255,255,255,.6); margin-bottom: .8rem; }
.contact a, .social a { color: rgba(255,255,255,.85); transition: color .2s; }
.contact a:hover, .social a:hover { color: #fff; }
.row { display: flex; gap: 1rem; }
.copy {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: .5rem;
  padding-top: 1.5rem;
  font-size: .85rem;
  opacity: .75;
}
.muted { opacity: .55; }
</style>