<template>
  <section id="stay" class="section stay">
    <div class="container">
      <div class="head reveal">
        <p class="eyebrow">Accommodations</p>
        <h2 class="serif title">The Stay</h2>
        <span class="title-line" />
      </div>
      <div class="grid">
        <a
          v-for="card in cards"
          :key="String(card.id)"
          :href="`#${card.link?.url ?? ''}`"
          class="card reveal"
        >
          <div class="card-media">
            <NuxtImg
              :src="resolveUrl(card.featured)"
              :alt="card.link?.title ?? 'Villa'"
              width="600"
              height="450"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
          <div class="card-body">
            <h3 class="serif card-title">{{ card.link?.title ?? 'Villa' }}</h3>
            <p class="card-desc">{{ card.description?.slice(0, 80) }}…</p>
            <span class="more">View details →</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { stay, resolveUrl, type Slide } from '~/assets/data/homepage';

const cards = ((stay as Record<string, unknown>).dataSlider as Slide[]) ?? [];
</script>

<style scoped>
.stay { background: var(--surface); }
.head { text-align: center; margin-bottom: 3rem; }
.head .title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin: .5rem 0 0;
}
.title-line { margin: 1rem auto; }
.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}
@media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }

.card {
  display: flex;
  flex-direction: column;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform .3s, box-shadow .3s;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px color-mix(in srgb, var(--text) 10%, transparent);
}
.card-media { aspect-ratio: 4/3; overflow: hidden; background: var(--surface-2); }
.card-media :deep(img) {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform .6s;
}
.card:hover .card-media :deep(img) { transform: scale(1.06); }
.card-body { padding: 1.5rem; }
.card-title { font-size: 1.5rem; font-weight: 600; margin: 0; }
.card-desc {
  color: var(--text-muted);
  font-size: .9rem;
  line-height: 1.6;
  margin: .5rem 0 1rem;
}
.more { color: var(--brand); font-size: .85rem; font-weight: 550; }
</style>