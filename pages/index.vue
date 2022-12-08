<template>
    <div>
        <component v-for="item in components.slice().reverse()" :key="item.id" :is="item.component" :model="item.model">
        </component>
        <BookingReservation></BookingReservation>
    </div>
</template>

<script setup lang="ts">
import data from '@/content/homepage.json'

const components = data?.components.map((c, i) => {
    return {
        ...c,
        id: i,
        component: defineAsyncComponent(() => import(`@/components/template/${c.component_name}.vue`))
    }
}).slice().reverse();
</script>
<style>
html,
body {
    margin: 0;
    padding: 0;
}
</style>