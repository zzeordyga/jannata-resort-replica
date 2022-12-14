<template>
    <section class="section sixth-section bg-vanilla">
        <div class="q-container container-inner">
            <div class="columns right">
                <div class="column flickity-enabled is-draggable">
                    <div class="flickity-viewport">
                        <div class="flickity-slider"
                            :style="{ left: '0px', transform: `translate(${currSlide * -100}%)` }"
                            ref="sliderContainer">
                            <div v-for="(item, i) in data" :key="i"
                                :class="`slide ${currSlide === i ? 'is-selected' : ''}`"
                                :style="{ left: `${i * 100}%` }" :aria-hidden="currSlide !== i">
                                <p v-html="item.description"></p>
                                <small v-html="item.title"></small>
                            </div>
                        </div>
                    </div>
                    <ol class="flickity-page-dots">
                        <li v-for="(_, i) in data" :key="i" :class="`dot ${currSlide === i ? 'is-selected' : ''}`"
                            :aria-label="`Page dot ${i}`" @click="currSlide = i; switchInterval()"></li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// import { gsap } from 'gsap'
// import Draggable from 'gsap/Draggable'
// gsap.registerPlugin(Draggable)

const pr = defineProps(['model'])
const data = pr.model?.dataSlider
const currSlide = ref(0)
const sliderContainer = ref()

const delay = 5000
const intervalId = ref()

const followMouse = (e: any) => {

}

const switchInterval = () => {
    if (intervalId.value !== null) clearInterval(intervalId.value);
    intervalId.value = setInterval(() => {
        next()
    }, delay)
}

const next = () => {
    if (currSlide.value < data?.length - 1)
        currSlide.value++;
    else currSlide.value = 0

    switchInterval()
}

onMounted(() => {
    intervalId.value = setInterval(() => {
        next()
    }, delay)

    // Draggable.create(sliderContainer.value, {
    //     type: 'x',
    //     bounds: sliderContainer.value,
    //     onClick: e => {
    //         console.log(e)
    //     },
    //     onDragEnd: e => {
    //         console.log(`Direction From! ${e}`)
    //     }
    // })
})

onUnmounted(() => {
    () => clearInterval(intervalId.value)
})
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
        position: absolute;
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