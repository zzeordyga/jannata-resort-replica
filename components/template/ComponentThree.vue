<template>
    <div class="section third-section">
        <div class="q-container container-inner">
            <div class="columns">
                <div class="column"></div>
                <div class="column">
                    <div class="content-text-2">
                        <h1 class="section-headline" v-html="model.title"></h1>
                    </div>
                    <div class="content-text-2">
                        <h1 v-html="model.description" class="section-description">
                        </h1>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column villas-container">
                    <div id="accommodations">
                        <div class="accommodation-type" v-for="(slide, i) in props.model.dataSlider" :key="i">
                            <div class="accommodation-type column-item">
                                <a :href="slide.link.url">
                                    <h4 class="accommodation-name">{{ slide.title }}</h4>
                                    <div class="accommodation-bg"
                                        :style="{ backgroundImage: `url(${resolveUrl(slide)})` }">
                                        <div class="accommodation-bg-change"
                                            :style="{ backgroundImage: `url(${resolveUrl(slide)})` }"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['model'])

</script>

<style scoped lang="scss">
.third-section {
    background-color: #5f5c68;
    color: white;

    &:before {
        background-image: url('https://jannataresort.com/_nuxt/img/a989adf.png');
        top: -1%;
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

.context-text-2 {
    opacity: 0;
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
        background-size: 95%;
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
    }
}
</style>