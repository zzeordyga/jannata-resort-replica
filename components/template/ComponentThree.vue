<template>
    <div class="section third-section">
        <div class="q-container container-inner">
            <div class="columns">
                <div class="column"></div>
                <div class="column content-container">
                    <div class="content-text-2">
                        <h1 class="section-headline-2" v-html="model.title"></h1>
                    </div>
                    <div class="content-text-2">
                        <h1 v-html="model.description" class="section-description">
                        </h1>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column villas-container">
                    <div class="accommodations">
                        <div v-for="(slide, i) in pr.model.dataSlider" :key="i" class="accommodation-type column-item"
                            @mouseover="hoverImage(slide)" @mouseleave="(currentBg = '')">
                            <a :href="slide.link.url">
                                <h4 class="accommodation-name">{{ slide.title }}</h4>
                                <div class="accommodation-bg"
                                    :style="{ backgroundImage: `${currentBg.length !== 0 ? currentBg : `url(${resolveUrl(slide)})`}` }">
                                    <div class="accommodation-bg-change"
                                        :style="{ backgroundImage: `${currentBg.length !== 0 ? currentBg : `url(${resolveUrl(slide)})`}` }">
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
const pr = defineProps(['model'])
const currentBg = ref('')

const hoverImage = (slide: SlideData) => {
    if (window.innerWidth >= 768)
        currentBg.value = `url(${resolveUrlHovered(slide)})`;
}

onMounted(() => {
    gsap.to(".content-text-2", {
        opacity: 1,
        duration: 1,
        y: -50,
        scrollTrigger: {
            trigger: ".content-text-2",
            toggleActions: "restart reverse none none"
        },
    })
})

</script>

<style scoped lang="scss">
.third-section {
    background-color: #5f5c68;
    color: white;
    padding: 100px 0 100px;

    &:before {
        background-image: url('https://jannataresort.com/_nuxt/img/a989adf.png');
        left: 20%;
        height: 100%;
        width: 300px;
    }

    &:before,
    &:after {
        content: "";
        display: inline-block;
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
        opacity: .4;
    }
}

.section-description {
    color: white;
}

.accommodation {
    &-name {
        color: #fff;
        position: absolute;
        left: 20%;
        right: 20%;
        z-index: 2;
        bottom: 5%;
        font-size: 11px;
        line-height: 30px;
        text-align: left;
        text-transform: uppercase;
        font-weight: 400;
        margin: 0 0 35px;
        letter-spacing: 2px;

        &:before {
            content: "";
            display: block;
            height: 1px;
            width: 100px;
            background-color: hsla(0, 0%, 100%, .8);
            margin: 10px 0 0;
            position: relative;
            left: 0;
            transition: all 0.3s ease;
        }

        @include for-tablet {
            left: 10%;
        }
    }

    &-bg {
        width: 98%;
        position: absolute;
        right: 0;
        height: 100%;
        z-index: 1;
        background-color: transparent;
        overflow: hidden;
        background-size: 98%;
        background-position: 50%;
        background-repeat: no-repeat;
        margin: auto;
        background-size: auto 100%;
        transition: all .4s ease;

        @include for-tablet {
            background-size: 100%;
        }

        &-change {
            background-position: 0;
            content: "";
            width: 98%;
            position: absolute;
            height: 100%;
            transform: translateX(-105%);
            background-color: #333107;
            background-size: cover;
            transition: all .4s ease;
        }
    }

    &-type {
        width: 33.33333%;
        float: left;
        height: 450px;
        position: relative;

        @include for-desktop {
            height: 360px;
        }

        @include for-tablet {
            margin: 0 auto 50px;
            height: 185px;
            width: calc(100% - 40px);
            float: none;
        }

        a {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        &:first-child {
            a .accommodation-bg-change {
                background-position: 0;
            }
        }

        &:nth-child(2) {
            a .accommodation-bg-change {
                background-position: 50%;
            }
        }

        &:nth-child(3) {
            a .accommodation-bg-change {
                background-position: 100%;
            }
        }
    }

    &s {
        display: flex;

        @include for-tablet {
            display: block;
        }

        &:hover {
            .accommodation-type a .accommodation-bg-change {
                background-size: 300% 100%;
                transform: translateX(0);
                width: 100%;

                @include for-tablet {
                    display: none;
                    background-size: 0%;
                    transform: none;
                    width: 0;
                }
            }
        }
    }
}
</style>