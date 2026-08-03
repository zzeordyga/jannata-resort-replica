<template>
  <header class="nav" :class="{ scrolled }">
    <div class="container nav-inner">
      <a href="#top" class="brand serif">Jannata</a>
      <nav class="links">
        <a href="#resort">The Resort</a>
        <a href="#stay">Stay</a>
        <a href="#dining">Dining</a>
        <a href="#spa">Spa</a>
        <a href="#testimonials">Stories</a>
      </nav>
      <a href="#booking" class="btn btn-brand book">Book Now</a>
      <button class="burger" @click="open = !open" aria-label="Menu">
        <span /><span /><span />
      </button>
    </div>
    <div v-if="open" class="drawer">
      <a href="#resort" @click="open = false">The Resort</a>
      <a href="#stay" @click="open = false">Stay</a>
      <a href="#dining" @click="open = false">Dining</a>
      <a href="#spa" @click="open = false">Spa</a>
      <a href="#testimonials" @click="open = false">Stories</a>
      <a href="#booking" class="btn btn-brand" @click="open = false">Book Now</a>
    </div>
  </header>
</template>

<script setup lang="ts">
const open = ref(false);
const scrolled = ref(false);

onMounted(() => {
  const onScroll = () => (scrolled.value = window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  transition: background .3s, backdrop-filter .3s, border-color .3s;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  backdrop-filter: blur(10px);
  border-bottom-color: var(--border);
}
.nav-inner {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 4.5rem;
}
.brand {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: .04em;
  color: var(--text);
}
.links {
  display: none;
  gap: 1.5rem;
  margin-left: auto;
  margin-right: 1rem;
  font-size: .9rem;
  text-transform: uppercase;
  letter-spacing: .08em;
}
.links a {
  color: var(--text-muted);
  transition: color .2s;
}
.links a:hover { color: var(--text); }
.book { display: none; }
.burger {
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: .5rem;
  margin-left: auto;
}
.burger span {
  width: 24px;
  height: 2px;
  background: var(--text);
  transition: transform .2s;
}
.drawer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  font-size: .95rem;
}
.drawer a { color: var(--text); padding: .4rem 0; }
.drawer .btn { margin-top: .5rem; }

@media (min-width: 1024px) {
  .links { display: flex; }
  .book { display: inline-flex; }
  .burger { display: none; }
}
</style>