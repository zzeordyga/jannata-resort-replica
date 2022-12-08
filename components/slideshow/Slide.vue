<template>
    <div class="slideshow-slide" @mousemove="moveImage">
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
                <img :src="resolveUrl(slide)" ref="image" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['slide'])
const slide = ref(props.slide)
const image = ref()

const moveImage = (e: MouseEvent) => {
    const rect = ((e.target) as Element)?.getBoundingClientRect();
    const x = ((e.clientX - (Math.abs(rect.left) > Math.abs(rect.right) ? Math.abs(rect.right) : Math.abs(rect.left))) * 2) / 10;
    const y = ((e.clientY - (Math.abs(rect.top) > Math.abs(rect.bottom) ? Math.abs(rect.bottom) : Math.abs(rect.top))) * 4) / 10;

    const xDir = Math.abs((e.clientX - rect.left)) > Math.abs((e.clientX - rect.right)) ? 1 : -1;
    const yDir = Math.abs((e.clientY - rect.top)) > Math.abs((e.clientY - rect.bottom)) ? 1 : -1;

    image.value.style.transform = `matrix(1,0,0,1,${x * xDir},${y * yDir})`
}

const resolveUrl = (slide: SlideData): string => {
    return `${slide.featured?.aws_file_url}/${slide.featured?.path}/${slide.featured?.filename.big}`
}

</script>

<style scoped>

</style>