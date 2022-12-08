<template>
    <section id="reservation" class="section bg-full-image">
        <div :ref="scrollTarget" id="bgReservation" class="bg-image">
            <div class="q-container container-inner">
                <div class="columns block-card">
                    <div class="column hide-mobile"></div>
                    <div class="column is-7">
                        <div class="columns calendar-custom calendar-container">

                        </div>
                        <div class="columns btn-increment">
                            <InputsCounter label="Adults(s)" />
                            <InputsCounter label="Children" />
                        </div>
                        <div class="columns btn-text"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { scrollTarget } from '@/utils/state';
</script>

<style scoped lang="scss">
#reservation {
    & .block-card {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        height: 120vh;
    }
}

.btn {
    &-increment {
        display: flex;
        justify-content: space-between;

        &>* {
            flex: 1;
            margin: 0 6px;
        }

        @include for-phone {
            flex-direction: column;
        }
    }
}

#bgReservation {
    background-image: url('https://jannataresort.com/_nuxt/img/9e91fad.jpg');
}
</style>