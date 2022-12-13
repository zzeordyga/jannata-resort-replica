<template>
    <section class="parallax-background" id="parallax">
        <div class="q-container container-inner">
            <div class="columns block-card-shadow">
                <div class="column block-picture">
                    <figure class="picture" style="height: 390px;">
                        <div class="parallax-box" ref="box"></div>
                        <div class="picture-box" ref="pictureBox">
                            <img class="image-parallax" :src="resolveUrl(model)" style="height: 429px" ref="imageParallax">
                        </div>
                    </figure>
                </div>
                <div class="column block-entry">
                    <div class="inner">
                        <div class="content-text">
                            <h1 class="section-headline" v-html="model.title"></h1>
                        </div>
                        <div class="content-text">
                            <p v-html="model.description"></p>
                        </div>
                        <div class="content-text">
                            <Button :text="model.link.title" type="ghost-green" :href="model.url"
                                style="width: auto;"/>
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

    gsap.to(".content-text", {
        opacity: 1,
        duration: 1,
        y: -50,
        scrollTrigger: {
            trigger: ".content-text",
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
.parallax-background {

    position: relative;
    overflow: hidden;
    margin-bottom: 48px;
    
    &:after,
    &:before {
        content: "";
        display: inline-block;
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
    }

    &:before {
        background-image: url('https://jannataresort.com/_nuxt/img/a109df5.png');
        top: -10vh;
        left: -25px;
        height: 100%;
        width: 250px;

        @include for-phone {
            height: 250px;
            width: 150px;
            top: -5vh;
        }
    }

    @include for-desktop {
        padding: 75px 0;
    }
}

.inner {
    @include for-phone {
        top: 10%;
    }
}
</style>