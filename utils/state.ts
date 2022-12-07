export const scrollTarget = ref()
export const scrollToTarget = () => {
    scrollTarget?.value?.scrollIntoView({
        behavior: "smooth"
    })
}
