<template>
    <div class="slideshow-container">
        <a href="/" class="slideshow-logo">
            <img src="@/assets/images/jannata.png" alt="">
        </a>
        <div class="slideshow-slides" :ref="slides">
            <div class="slideshow-slide" v-for="slide in props.model.dataSlider" :key="slide.id">
                <div class="slideshow-content-container">
                    <div class="caption">
                        <h1 class="title">{{ slide.title }}</h1>
                        <h3 class="description">{{ slide.description }}</h3>
                        <div class="slideshow-read-more">
                            <Button :text="slide.link.title" :href="slide.link.url" type="hollow"></Button>
                        </div>
                    </div>
                </div>
                <div class="slideshow-image-container">
                    <img :src="resolveUrl(slide)" />
                </div>
            </div>
        </div>
        <div class="slideshow-control">
            <div class="slideshow-button">
                <Icon name="heroicons-solid:chevron-left" size="2rem" />
            </div>
            <div class="slideshow-button">
                <Icon name="heroicons-solid:chevron-right" size="2rem" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['model'])
const slides = ref()

const resolveUrl = (slide: SlideData): string => {
    return `${slide.featured?.aws_file_url}/${slide.featured?.path}/${slide.featured?.filename.big}`
}
</script>

<style scoped lang="scss">
.slideshow {
    &-container {
        background-color: black;
        position: relative;
        width: 100%;
        height: 100vh;
    }

    &-slide {
        overflow: hidden;
        top: 0;
        height: 100%;
        transition: opacity .3s ease;
        background: #000;

        &s {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: 50%;
        }

        & img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            opacity: .5;
        }
    }

    &-image-container {
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        z-index: 2;
        background-position: 50%;
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
        position: relative;
        /* bottom: 200px; */
        color: white;
        display: flex;
        justify-content: flex-start;
        right: 0;


        @include for-phone {
            left: 0;
            justify-content: flex-end;
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
</style>