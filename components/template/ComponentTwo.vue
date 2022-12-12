<template>
    <div class="parallax-background" id="parallax">
        <div class="q-container container-inner">
            <div class="columns block-card-shadow">
                <div class="column block-picture">
                    <figure class="picture" style="height: 390px;">
                        <div class="parallax-box" ref="box"></div>
                        <div class="picture-box">
                            <img class="image-parallax" :src="resolveUrl(model)" style="height: 429px">
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
                        <div class="content-text"><Button :text="model.link.title" type="ghost-green" :href="model.url"
                                style="width: auto;"></Button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const props = defineProps(['model'])
const box = ref()

onMounted(() => {
    gsap.to(".picture-box", {
        opacity: 1,
        clipPath: 'inset(0 0px 0 0)',
        duration: 1,
        scrollTrigger: {
            trigger: ".picture-box",
            toggleActions: "restart reverse reset none"
        },
    })

    gsap.to(".content-text", {
        opacity: 1,
        duration: 1,
        y: -50,
        scrollTrigger: {
            trigger: ".content-text",
            toggleActions: "restart reverse reset none"
        },
    })

    gsap.to(box.value, {
        scrollTrigger: {
            trigger: box.value,
            scrub: 1
        },
        y: 40,
    })

    gsap.to('.image-parallax', {
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
    padding: 0 50px 0 100px;
    position: absolute;
    top: 20%;
    right: 8%;
    width: 40%;
    transform: matrix(1, 0, 0, 1, 0, 0);

    @include for-desktop {
        width: 30%;
        padding-left: 0;
    }

    @include for-tablet {
        padding-right: 25px;
    }

    @include for-phone {
        position: absolute;
        text-align: left;
        margin-bottom: 30px;
        top: 5%;
        right: 0%;
        width: 90%;
    }
}

.block-picture {
    flex: none;
    width: 57.5%;

    @include for-phone {
        width: 100%;
    }
}

.block-entry {
    display: flex;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
    align-items: center;
    -webkit-align-items: center;
    flex: none;
    width: 42.5%;

    @include for-phone {
        width: 100%;
        padding: 50px;
    }
}

.parallax-box {
    position: absolute;
    top: 60px;
    right: -80%;
    width: 140%;
    z-index: -1;
    height: 100%;
    background-color: #d8d6e2;

    @include for-phone {
        display: none;
    }
}

.picture-box {
    overflow: hidden;
    clip-path: inset(0 300px 0 0);
    opacity: 0;
    transform: matrix(1, 0, 0, 1, 0, 0);

    & img {
        height: 715px;
        width: auto;
        z-index: 5;
    }

    @include for-phone {
        overflow: visible;

        & img {
            width: 100%;
        }
    }
}

.picture {
    position: relative;
    margin: 0;
    padding: 0 30px 0 20px;

    @include for-phone {
        margin-top: 240px;
        padding: 0 20px 0 0;
        overflow: hidden;
    }
}
</style>