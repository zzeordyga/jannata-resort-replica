<template>
    <div>
        <header>
            <a href="https://www.kayak.co.uk/2020-Best-Small-Hotel.2632503.113.awards" target="-blank">
                <img src="~/assets/images/award.png" class="award" />
            </a>
            <Navigation />
        </header>
        <div>
            <slot />
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.award {
    position: fixed;
    top: 15px;
    right: 75px;
    z-index: 9999;
    width: 80px;
    height: 80px;

    @include for-tablet {
        width: 60px;
        height: 60px;
        top: auto;
        bottom: 30px;
        right: 15px;
    }
}
</style>