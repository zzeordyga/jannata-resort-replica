<template>
  <section id="spa" class="spa">
    <div class="spa-bg" :style="{ backgroundImage: `url(${img})` }" />
    <div class="spa-overlay" />
    <div class="container spa-content reveal">
      <p class="eyebrow light">Champaka Spa</p>
      <h2 class="serif title" v-html="spa.title" />
      <span class="title-line" />
      <p class="desc" v-html="spa.description" />
      <a href="#booking" class="btn btn-brand">{{ spa.link?.title ?? 'Read more' }}</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { spa as s, resolveUrl, type Slide } from '~/assets/data/homepage';

const spa = s as unknown as Slide & { title: string; description: string };
const img = resolveUrl(spa.featured);
</script>

<style scoped>
.spa {
  position: relative;
  min-height: 70svh;
  display: flex;
  align-items: center;
  color: #fff;
  overflow: hidden;
}
.spa-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(.6);
}
@media (max-width: 768px) { .spa-bg { background-attachment: scroll; } }
.spa-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,.2));
}
.spa-content {
  position: relative;
  z-index: 2;
  max-width: 40rem;
}
.eyebrow.light { color: rgba(255,255,255,.85); }
.title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin: .5rem 0 0;
}
.title-line { background: #fff; }
.desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255,255,255,.92);
  margin: 1rem 0 2rem;
}
</style>