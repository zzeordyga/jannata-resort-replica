<template>
    <button ref="btnRef" :class="('btn-' + props.type)" :href="props.href" @mousemove="hoverMove"
        @mouseleave="resetPosition">{{ props.text
        }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
    href: String,
    text: String,
    type: String,
})
const btnRef = ref()

const hoverMove = (e: MouseEvent) => {
    const rect = ((e.target) as Element)?.getBoundingClientRect();
    const x = ((e.clientX - (Math.abs(rect.left) > Math.abs(rect.right) ? Math.abs(rect.right) : Math.abs(rect.left))) * 2) / 10;
    const y = ((e.clientY - (Math.abs(rect.top) > Math.abs(rect.bottom) ? Math.abs(rect.bottom) : Math.abs(rect.top))) * 4) / 10;

    const xDir = Math.abs((e.clientX - rect.left)) > Math.abs((e.clientX - rect.right)) ? 1 : -1;
    const yDir = Math.abs((e.clientY - rect.top)) > Math.abs((e.clientY - rect.bottom)) ? 1 : -1;

    btnRef.value.style.transform = `matrix(1,0,0,1,${x * xDir},${y * yDir})`
}

const resetPosition = () => {
    btnRef.value.style.transform = ''
}


</script>

<style scoped lang="scss">
.btn {

    &-action,
    &-ghost,
    &-hollow {
        transition: all .26s ease-out;
        padding: 12px 10px;
        font-size: 12px;
        letter-spacing: 1px;
        transition: all .2s ease;
        text-transform: uppercase;
        color: white;
        text-align: center;
        width: 100%;
        border: none;
        margin-top: 30px;
    }

    &-action {
        background-color: $primary;

        &:hover {
            background-color: white;
            color: $primary
        }
    }

    &-ghost {
        background-color: transparent;
        position: relative;

        &:hover {
            color: $primary;

            &:before {
                width: calc(100% - 40px);
            }
        }

        &:before {
            content: "";
            display: block;
            position: absolute;
            bottom: -12px;
            left: 20px;
            width: 0;
            height: 2px;
            background: $primary;
            transition: all .5s cubic-bezier(.86, 0, .07, 1);
        }
    }

    &-hollow {
        background-color: transparent;
        position: relative;
        color: white;
        border: 1px white solid;

        &:hover {
            background-color: white;
            color: black;
        }
    }
}
</style>