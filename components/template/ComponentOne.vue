<template>
    <div class="slideshow-container">
        <a href="/" class="slideshow-logo">
            <img src="@/assets/images/jannata.png" alt="">
        </a>
        <div class="slideshow-slides" :ref="slides">
            <!-- <Transition :name="`slide-${direction}`"> -->
            <div v-for="(slide, i) in props.model.dataSlider" :key="i">
                <Transition :name="`slide-${direction}`" mode="out-in">
                    <SlideshowSlide :slide="slide" v-if="(currentSlide === i)" />
                </Transition>
            </div>
            <!-- </Transition> -->
        </div>
        <div class="slideshow-control">
            <div class="slideshow-button" @click="prev">
                <Icon name="heroicons-solid:chevron-left" size="2rem" />
            </div>
            <div class="slideshow-button" @click="next">
                <Icon name="heroicons-solid:chevron-right" size="2rem" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['model'])
const slides = ref()
const currentSlide = ref(0)
const direction = ref("left")
const delay = 5000
const intervalId = ref()

const switchInterval = () => {
    if (intervalId.value !== null) clearInterval(intervalId.value);
    intervalId.value = setInterval(() => {
        next()
    }, delay)
}

const next = () => {
    if (currentSlide.value < props.model.dataSlider?.length - 1)
        currentSlide.value++;
    else currentSlide.value = 0

    direction.value = "right";

    switchInterval()
}

const prev = () => {
    if (currentSlide.value > 0)
        currentSlide.value--;
    else currentSlide.value = props.model.dataSlider?.length - 1

    direction.value = "right";

    switchInterval()
}

onMounted(() => {
    intervalId.value = setInterval(() => {
        next()
    }, delay)
})

onUnmounted(() => {
    () => clearInterval(intervalId.value)
})
</script>

<style lang="scss">
.slideshow {
    &-container {
        overflow: hidden;
        background-color: black;
        position: relative;
        width: 100%;
        height: 100vh;
    }

    &-slide {
        overflow: hidden;
        top: 0;
        height: 125%;
        width: 125%;
        transition: opacity .3s ease;

        &s {
            width: 125%;
            height: 125%;
            background-size: cover;
            background-position: 50%;
            overflow: hidden;
        }

        & img {
            transform: translate(0, 0);
            height: 125%;
            width: 125%;
            opacity: .5;
        }
    }

    &-image-container {
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-position: 50%;
        overflow: hidden;
        transform: scale(2);
    }

    &-content-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 500;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        & .caption {
            opacity: 1;
            z-index: 999;
            position: absolute;
            left: 50%;
            bottom: 20%;
            width: 70%;
            max-width: 480px;
            text-align: center;
            transform: translateX(-50%) translateY(0);
            display: flex;
            flex-direction: column;

            & .title {
                font: 400 43px/1.3 Playfair Display,
                    serif;
                margin-top: 0;
                text-transform: uppercase;
                margin-bottom: 0;
                letter-spacing: 5px;
                opacity: 1;
                transform: translate(0, 0);

                @include for-phone {
                    font-size: 24px;
                }
            }

            & .description {
                font: 400 14px/1.8 Open Sans, sans-serif;
                max-width: 400px;
                letter-spacing: 1px;
                margin: 30px auto 0;
            }

            &>* {
                margin: 12px 0;
            }
        }
    }

    &-read-more {
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translateX(-50%);

        &>* {
            padding: 12px 48px;

        }
    }

    &-logo {
        max-width: 120px;
        position: absolute;
        left: 50%;
        top: 80px;
        transform: translateX(-50%);
        z-index: 10;

        @include for-phone {
            display: none;
        }

        &>img {
            max-width: 100%;
            vertical-align: middle;
        }
    }

    &-control {
        position: absolute;
        /* bottom: 200px; */
        color: white;
        display: flex;
        justify-content: flex-start;
        right: 5%;
        bottom: 5%;
        z-index: 999;


        @include for-tablet {
            left: 2%;
        }
    }

    &-button {
        margin: 0 8px;
        border-radius: 100%;
        transition: all .5s ease;

        &:hover {
            border: 2px solid white;
            opacity: 1;
        }
    }
}

.slide {
    &-left {
        &-enter-active {
            transition: all 1s ease-out;

            & img,
            & .title {
                transition: all 1s ease-out;
            }
        }

        &-leave-active {
            transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);

            & img,
            & .title {
                transition: all 1s cubic-bezier(1, 0.5, 0.8, 1)
            }
        }

        &-enter-from,
        &-leave-to {
            opacity: 0;

            img {
                transform: translate(100%, 0);
            }

            .title {
                transform: translate(0, 100%);
                opacity: 0;
            }
        }
    }

    &-right {
        &-enter-active {
            transition: all 1s ease-out;

            & img,
            & .title {
                transition: all 1s ease-out;
            }
        }

        &-leave-active {
            transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);

            & img,
            & .title {
                transition: all 1s cubic-bezier(1, 0.5, 0.8, 1)
            }
        }

        &-enter-from,
        &-leave-to {
            opacity: 0;

            img {
                transform: translate(-100%, 0);
            }

            .title {
                transform: translate(0, 100%);
                opacity: 0;
            }
        }
    }
}
</style>