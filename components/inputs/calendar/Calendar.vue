<template>
    <div>
        <label :for="props.name">{{ props.placeholder }}</label>
        <input class="calendar" type="date" :name="props.name" :id="props.id" :placeholder="props.placeholder" />
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
label {
    color: white;
    text-transform: uppercase;
    font-size: 12px;
}

.calendar {
    border: 1px $primary solid;
    padding: 12px 42px;
    background-color: transparent;
    color: $primary;
    margin: 0 6px;


    &::placeholder {
        color: $primary;
        text-transform: uppercase;
    }

    @include for-phone {
        padding: 12px;
    }
}

input[type="date"]::-webkit-calendar-picker-indicator {
    color: #fff;
    opacity: 1;
    display: block;
    width: 20px;
    height: 20px;
    border-width: thin;
    filter: invert(1);
}
</style>