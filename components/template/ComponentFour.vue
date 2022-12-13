<template>
    <section class="section fourth-section bg-vanilla block-card-overlap">
        <div class="q-container container-inner">
            <div class="columns overlap-wrapper">
                <div class="column block-picture wide">
                    <figure class="picture" style="height: 462px;">
                        <div class="parallax-box" ref="box"></div>
                        <div class="picture-box" ref="pictureBox">
                            <img class="image-parallax" :src="resolveUrl(model)" style="height: 510px" ref="imageParallax">
                        </div>
                    </figure>
                </div>
                <div class="block-entry column bg-white right" style="height:520px">
                    <div class="inner">
                        <h1 class="section-headline content-text-3">
                            <div class="title-text" v-html="model.title_one"></div>
                            <div class="title-text text-green" v-html="model.title_two"></div>
                        </h1>
                        <div class="title-line" data-v-5004e6cc=""></div>
                        <div class="content-text-3">
                            <div v-html="model.description"></div>
                        </div>
                        <div class="content-text-3">
                            <Button :text="model.link.title" type="ghost-green" :href="model.url"
                                style="width: auto;" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const props = defineProps(['model'])
const box = ref()
const pictureBox = ref()
const imageParallax = ref()

onMounted(() => {
    gsap.to(pictureBox.value, {
        opacity: 1,
        clipPath: 'inset(0 0px 0 0)',
        duration: 1,
        scrollTrigger: {
            trigger: pictureBox.value,
            toggleActions: "play pause resume reset"
        },
    })

    gsap.to(".content-text-3", {
        opacity: 1,
        duration: 1,
        y: -50,
        scrollTrigger: {
            trigger: ".content-text-3",
            toggleActions: "play pause resume reset"
        },
    })

    gsap.to(box.value, {
        scrollTrigger: {
            trigger: box.value,
            scrub: 1
        },
        y: 40,
    })

    gsap.to(imageParallax.value, {
        scrollTrigger: {
            trigger: box.value,
            scrub: 1
        },
        y: 80,
    })
})

</script>

<style scoped lang="scss">
.fourth-section {
    position: relative;
    overflow: hidden;
    background: #f0f0f5;

    &:before {
        background-image: url(https://jannataresort.com/_nuxt/img/a109df5.png);
        top: -10vh;
        left: -25px;
        height: 100%;
        width: 250px;
    }

    &::before,
    &:after {
        content: "";
        display: inline-block;
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
    }

    @include for-phone {
        padding-top: 0;
    }
}

.title-line{
    right: -125px;
    height: 1px;
    background-color: #679334;
    margin: -85px 0 80px;
    position: relative;
    top: 5%;

    @include for-desktop {
        left: 90px
    }

    @include for-phone {
        left: 50px
    }
}

.inner {
    top: 2%;
    right: 20%;
    width: 60%;

    @include for-desktop {
        right: 6%;
    }
}
</style>