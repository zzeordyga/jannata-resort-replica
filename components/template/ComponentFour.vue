<template>
    <section class="section fourth-section">
        Hello
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.fourth-section {
    position: relative;
    overflow: hidden;
    background: #f0f0f5;

    &:before {
        background-image: url(/_nuxt/img/a109df5.png);
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
}
</style>