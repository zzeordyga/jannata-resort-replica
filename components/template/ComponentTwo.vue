<template>
    <div class="parallax-background">
        <div class="q-container container-inner">
            <div class="columns">

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['model'])
</script>

<style scoped lang="scss">
.parallax-background {

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
</style>