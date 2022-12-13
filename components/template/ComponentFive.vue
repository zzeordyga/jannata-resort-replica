<template>
    <section class="section bg-full-image">
        <div class="bg-image" :style="{ backgroundImage: `url(${resolveUrl(model)})` }" ref="imageParallax">
        </div>
        <div class="q-container container-inner">
            <div class="columns overlap-wrapper right">
                <div class="column block-entry">
                    <div class="inner">
                        <h2 class="title content-text-4" v-html="model.title"></h2>
                        <div class="title-line"></div>
                        <div class="content-text-4">
                            <div v-html="model.description"></div>
                        </div>
                        <div class="content-text-4">
                            <Button :text="model.link.title" type="ghost" :href="model.url"
                                style="width: auto;" />
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const pr = defineProps(['model'])
const imageParallax = ref()

onMounted(() => {
    gsap.to(imageParallax.value, {
        ease: 'none',
        y: 250,
        scrollTrigger: {
            trigger: imageParallax.value,
            scrub: 1
        },
    })
})


</script>

<style scoped lang="scss">
.title {
    font: 400 35px/1 Playfair Display,serif;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin: 0;
    position: relative;
    display: block;
    line-height: 56px;
}

.inner {
    & * {
        color: white;
    }
}
.bg-image {
    transform: translateY(-250px);
}

.title-line {
    margin: 20px 0 20px;
}
</style>