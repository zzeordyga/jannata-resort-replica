<template>
    <div class="loader">

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 1050;
    display: none;
    transition: all .5s ease;
    opacity: 1;
}
</style>