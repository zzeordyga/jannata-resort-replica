<template>
    <section class="section sixth-section bg-vanilla">
        <div class="q-container container-inner">
            <div class="columns right">
                <div class="column flickity-enabled is-draggable">
                    <div class="flickity-viewport">
                        <div class="flickity-slider">
                            <div v-for="(item, i) in data" :key="i"
                                :class="`slide ${currSlide === i ?? 'is-selected'}`">
                                <p v-html="item.description"></p>
                                <small v-html="item.title"></small>
                            </div>
                        </div>
                    </div>
                    <ol class="flickity-page-dots">
                        <li v-for="(_, i) in data" :key="i" class="dot" :aria-label="`Page dot ${i}`"></li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const pr = defineProps(['model'])
const data = pr.model?.dataSlider
const currSlide = ref(0)
</script>

<style scoped lang="scss">
.sixth-section {
    font-family: Playfair Display, serif;
    position: relative;
    z-index: 1;

    padding-bottom: 150px;

    @include for-tablet {
        padding-bottom: 40px;
    }

    &:before {
        background-image: url(https://jannataresort.com/_nuxt/img/a109df5.png);
        top: -10vh;
        left: -25px;
        height: 100%;
        width: 250px;
    }

    &:before,
    &:after {
        content: "";
        display: inline-block;
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
    }

    & .column {
        max-width: 570px;
        margin: auto;
        text-align: center;
    }

    & .slide {
        width: 100%;
        padding-bottom: 50px;
    }

    & p {
        text-align: center;
        margin: 0;
        font-size: 20px;
    }

    & small {
        display: block;
        font-size: 15px;
        margin-top: 30px;
    }
}
</style>