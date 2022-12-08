<template>
    <section id="reservation" class="section bg-full-image">
        <div :ref="scrollTarget" id="bgReservation" class="bg-image">
            <div class="q-container container-inner">
                <div class="columns block-card">
                    <div class="column hide-mobile"></div>
                    <div class="column">
                        <div class="columns calendar-custom calendar-container">
                            <InputsCalendar name="checkInDate" id="checkInDate" placeholder="Check In" />
                            <InputsCalendar name="checkOutDate" id="checkOutDate" placeholder="Check Out" />
                        </div>
                        <div class="columns btn-increment">
                            <InputsCounter label="Adults(s)" />
                            <InputsCounter label="Children" />
                        </div>
                        <div class="columns btn-text">
                            <Button text="Rates & Availability" href="'/'" type="action" />
                            <Button text="Discover Our Exclusive Deals" href="'/en/exclusive-deals'" type="ghost" />
                        </div>
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
        z-index: 100;
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
    }

    @include for-phone {
        &-increment {
            flex-direction: column;
        }
    }
}

.calendar-container {
    display: flex;
    justify-content: space-between;

    &>* {
        flex: 1;
        /* margin: 0 6px; */
    }
}

#bgReservation {
    background-image: url('https://jannataresort.com/_nuxt/img/9e91fad.jpg');
}
</style>