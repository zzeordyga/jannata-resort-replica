<template>
    <div class="slideshow-slide">
        <div>
            <div class="slideshow-content-container">
                <div class="caption">
                    <h1 class="title" slot="title" v-html="slide.title"></h1>
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
</template>

<script setup lang="ts">
const props = defineProps(['slide'])
const slide = ref(props.slide)

const resolveUrl = (slide: SlideData): string => {
    return `${slide.featured?.aws_file_url}/${slide.featured?.path}/${slide.featured?.filename.big}`
}

</script>

<style scoped>

</style>