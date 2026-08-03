<template>
  <section id="testimonials" class="section">
    <div class="container">
      <div class="head reveal">
        <p class="eyebrow">Stories</p>
        <h2 class="serif title">Guest Experiences</h2>
        <span class="title-line" />
      </div>

      <div class="carousel">
        <div class="track" :style="{ transform: `translateX(-${index * 100}%)` }">
          <figure v-for="(t, i) in slides" :key="i" class="slide">
            <blockquote class="serif">“{{ t.description }}”</blockquote>
            <figcaption>{{ t.title }}</figcaption>
          </figure>
        </div>
        <button class="nav-btn prev" aria-label="Previous" @click="prev">‹</button>
        <button class="nav-btn next" aria-label="Next" @click="next">›</button>
        <div class="dots">
          <button
            v-for="(t, i) in slides"
            :key="i"
            :class="{ active: i === index }"
            :aria-label="`Testimonial ${i + 1}`"
            @click="index = i"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { testimonials, type Slide } from '~/assets/data/homepage';

const slides = (testimonials as Slide[]) ?? [];
const index = ref(0);
let timer: ReturnType<typeof setInterval> | undefined;

function next() { index.value = (index.value + 1) % slides.length; }
function prev() { index.value = (index.value - 1 + slides.length) % slides.length; }

onMounted(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  timer = setInterval(next, 6000);
});
onUnmounted(() => timer && clearInterval(timer));
</script>

<style scoped>
.head { text-align: center; margin-bottom: 3rem; }
.head .title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; margin: .5rem 0 0; }
.title-line { margin: 1rem auto; }

.carousel {
  position: relative;
  max-width: 48rem;
  margin: 0 auto;
  overflow: hidden;
}
.track {
  display: flex;
  transition: transform .7s cubic-bezier(.4, 0, .2, 1);
}
.slide {
  flex: 0 0 100%;
  padding: 0 2rem;
  text-align: center;
  margin: 0;
}
.slide blockquote {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  line-height: 1.5;
  color: var(--text);
  margin: 0 0 1rem;
  font-style: italic;
}
.slide figcaption {
  color: var(--text-muted);
  letter-spacing: .04em;
}
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
}
@media (min-width: 768px) { .nav-btn { display: inline-flex; align-items: center; justify-content: center; } }
.nav-btn:hover { background: var(--surface-2); }
.prev { left: 0; }
.next { right: 0; }
.dots {
  display: flex;
  justify-content: center;
  gap: .5rem;
  margin-top: 1.5rem;
}
.dots button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 0;
  background: var(--border);
  cursor: pointer;
  transition: background .2s;
}
.dots button.active { background: var(--brand); }
</style>