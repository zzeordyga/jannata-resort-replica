<template>
  <section id="top" class="hero">
    <div class="hero-bg" :style="{ backgroundImage: `url(${current})` }" />
    <div class="hero-overlay" />
    <div class="container hero-content">
      <p class="eyebrow hero-eyebrow">Ubud · Bali</p>
      <h1 class="serif hero-title">Jannata<br />Luxury Villas &amp; Resort</h1>
      <p class="hero-desc">{{ slide?.description }}</p>
      <div class="hero-actions">
        <a href="#booking" class="btn btn-brand">Check Availability</a>
        <a href="#stay" class="btn btn-ghost hero-ghost">Explore Villas</a>
      </div>
    </div>
    <div class="hero-dots">
      <button
        v-for="(s, i) in slides"
        :key="i"
        :class="{ active: i === index }"
        :aria-label="`Slide ${i + 1}`"
        @click="go(i)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { hero, resolveUrl, type Slide } from '~/assets/data/homepage';

const slides = hero as Slide[];
const index = ref(0);
const current = computed(() => resolveUrl(slides[index.value]?.featured));
const slide = computed(() => slides[index.value]);

let timer: ReturnType<typeof setInterval> | undefined;
function next() {
  index.value = (index.value + 1) % slides.length;
}
function go(i: number) {
  index.value = i;
  reset();
}
function reset() {
  if (timer) clearInterval(timer);
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    timer = setInterval(next, 5500);
  }
}

onMounted(() => {
  reset();
  import('gsap').then(({ default: gsap }) => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.from('.hero-title', { y: 40, opacity: 0, duration: 1, delay: .2 });
    gsap.from('.hero-desc, .hero-actions, .hero-eyebrow', { y: 20, opacity: 0, duration: .8, stagger: .12, delay: .4 });
  });
});
onUnmounted(() => timer && clearInterval(timer));
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  color: #fff;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: -10% 0;
  background-size: cover;
  background-position: center;
  transition: opacity 1.2s;
  filter: brightness(.65);
  animation: heroZoom 14s ease-in-out infinite alternate;
}
@keyframes heroZoom {
  to { transform: scale(1.08); }
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,.15) 40%, rgba(0,0,0,.55) 100%);
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 42rem;
}
.hero-eyebrow { color: rgba(255,255,255,.85); }
.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.05;
  margin: 1rem 0;
  font-weight: 700;
}
.hero-desc {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 32rem;
  color: rgba(255,255,255,.9);
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}
.hero-ghost {
  border-color: rgba(255,255,255,.5);
  color: #fff;
}
.hero-ghost:hover {
  background-color: rgba(255,255,255,.12);
  border-color: #fff;
}
.hero-dots {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: .5rem;
  z-index: 3;
}
.hero-dots button {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 0;
  background: rgba(255,255,255,.45);
  cursor: pointer;
  transition: background .2s, transform .2s;
}
.hero-dots button.active {
  background: #fff;
  transform: scale(1.3);
}
</style>