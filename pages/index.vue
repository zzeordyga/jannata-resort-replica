<template>
  <div class="layout">
    <Navigation />
    <main>
      <Hero />
      <ResortSection />
      <StaySection />
      <DiningSection />
      <SpaSection />
      <TestimonialsSection />
      <BookingSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useReveal } from '~/composables/useReveal';

useSeoMeta({
  title: 'Jannata — Luxury Villas & Resort, Ubud Bali',
  description:
    'A boutique luxury villa resort in Ubud, Bali. Spa, dining, and private pool villas surrounded by rice terraces.',
  ogTitle: 'Jannata — Luxury Villas & Resort',
  ogDescription: 'A boutique luxury villa resort in Ubud, Bali.',
});

useReveal();
</script>