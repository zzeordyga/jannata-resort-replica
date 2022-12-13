<template>
    <section class="section bg-full-image">
        <div class="" :style="{ backgroundImage: `url(${resolveUrl(pr.model)})` }">
        
        </div>
    </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const pr = defineProps(['model'])


</script>

<style scoped>

</style>