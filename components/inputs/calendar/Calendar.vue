<template>
    <div>
        <input class="calendar" type="date" :name="props.name" :id="props.id" :placeholder="placeholder">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    name: String,
    id: String,
    placeholder: String,
})
</script>

<style lang="scss" scoped>
.calendar {
    border: 1px $primary solid;
    padding: 12px 42px;
    background-color: transparent;
    margin: 0 6px;
    color: $primary;


    &::placeholder {
        color: $primary;
        text-transform: uppercase;
    }
}

input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    width: 20px;
    height: 20px;
    opacity: 0;
    border-width: thin;
}
</style>