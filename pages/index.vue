<template>
    <div>
        Hello!
        <component v-for="(item, i) in components.slice().reverse()" key="i" :is="item.component" :model="item.model">
        </component>
    </div>
</template>

<script setup lang="ts">
import data from '@/content/homepage.json'

const components = data?.components.map(c => {
    return {
        ...c,
        component: defineAsyncComponent(() => import(`@/components/template/${c.component_name}.vue`))
    }
}).reverse();
</script>
<style>
html,
body {
    margin: 0;
    padding: 0;
}
</style>