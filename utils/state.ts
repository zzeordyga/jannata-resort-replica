export const scrollTarget = ref()
export const scrollToTarget = () => {
    scrollTarget.value ? scrollTarget?.value?.scrollIntoView({
        behavior: "smooth"
    }) :
        document.getElementById('bgReservation')?.scrollIntoView({
            behavior: "smooth"
        })
}
