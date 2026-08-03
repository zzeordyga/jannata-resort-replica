<template>
  <section id="dining" class="section dining">
    <div class="container dining-grid">
      <figure class="media reveal">
        <NuxtImg
          :src="img"
          alt="Dining"
          width="780"
          height="600"
          sizes="(max-width: 1024px) 100vw, 780px"
          loading="lazy"
        />
      </figure>
      <article class="card reveal">
        <p class="eyebrow">Amateras Dining</p>
        <h2 class="serif title">
          {{ dining.title_one }}<br /><span class="accent">{{ dining.title_two }}</span>
        </h2>
        <span class="title-line" />
        <p class="desc" v-html="dining.description" />
        <a href="#booking" class="btn btn-ghost">{{ dining.link?.title ?? 'Read more' }}</a>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { dining as d, resolveUrl } from '~/assets/data/homepage';

const dining = d as unknown as {
  title_one: string;
  title_two: string;
  description: string;
  link?: { title: string; url: string };
  featured: { aws_file_url: string; path: string; filename: { big: string } };
};
const img = resolveUrl(dining.featured);
</script>

<style scoped>
.dining { background: var(--surface); }
.dining-grid {
  display: grid;
  gap: 2rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .dining-grid {
    grid-template-columns: 1.3fr 1fr;
    gap: 4rem;
  }
}
.media {
  position: relative;
  margin: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4/3;
  background: var(--surface-2);
}
.media :deep(img) { width: 100%; height: 100%; object-fit: cover; }
.card {
  background: var(--bg);
  padding: 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}
@media (min-width: 1024px) {
  .card {
    margin-left: -3rem;
    padding: 3rem;
    box-shadow: 0 16px 40px color-mix(in srgb, var(--text) 12%, transparent);
  }
}
.title {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: 700;
  line-height: 1.1;
  margin: .5rem 0 0;
  color: var(--text);
}
.accent { color: var(--brand); }
.desc {
  color: var(--text-muted);
  line-height: 1.7;
  margin: 1rem 0 1.5rem;
}
</style>