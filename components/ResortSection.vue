<template>
  <section id="resort" class="section">
    <div class="container resort">
      <figure class="media reveal">
        <NuxtImg
          :src="img"
          alt="The resort"
          width="720"
          height="540"
          sizes="(max-width: 768px) 100vw, 720px"
          loading="lazy"
        />
      </figure>
      <div class="copy reveal">
        <p class="eyebrow">{{ eyebrow }}</p>
        <h2 class="serif title" v-html="title" />
        <span class="title-line" />
        <p class="desc" v-html="description" />
        <a :href="`#${link?.url ?? 'stay'}`" class="btn btn-ghost">{{ link?.title ?? 'Read more' }}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { resort, resolveUrl, type Slide } from '~/assets/data/homepage';

const m = resort as unknown as Slide & { title: string; description: string };
const img = resolveUrl(m.featured);
const title = m.title;
const description = m.description;
const link = m.link;
const eyebrow = 'The Resort';
</script>

<style scoped>
.resort {
  display: grid;
  gap: 3rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .resort { grid-template-columns: 1.2fr 1fr; gap: 5rem; }
}
.media {
  position: relative;
  margin: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4/3;
  background: var(--surface-2);
}
.media :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .8s;
}
.media:hover :deep(img) { transform: scale(1.04); }
.copy .title {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
  font-weight: 700;
  margin: .5rem 0 0;
  color: var(--text);
}
.desc {
  color: var(--text-muted);
  line-height: 1.7;
  margin: 1rem 0 2rem;
  max-width: 32rem;
}
</style>