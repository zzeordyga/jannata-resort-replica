<template>
    <div>
        <div class="counter-label">
            {{ label }}
        </div>
        <div class="counter">
            <span @click="decrement">-</span>
            <span>{{ count }}</span>
            <span @click="increment">+</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    label: String
})
const count = ref(0)
const increment = () => count.value++
const decrement = () => {
    if (count.value > 0)
        count.value--
}
</script>

<style lang="scss" scoped>
.counter {
    text-align: center;
    border: 1px $primary solid;
    padding: 8px 20px;
    color: white;
    display: flex;
    justify-content: space-between;

    &>:first-child {
        font-weight: bolder;
        cursor: pointer;
    }

    &>:nth-child(2) {
        color: $primary;
    }

    &>:nth-child(3) {
        font-weight: bolder;
        cursor: pointer;
    }

    &-label {
        margin-top: 12px;
        font-size: 12px;
        color: white;
        text-transform: uppercase;
    }
}
</style>