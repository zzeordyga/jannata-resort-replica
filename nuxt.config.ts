// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        'nuxt-icon'
    ],
    typescript: {
        strict: true
    },
    css: [
        '~/assets/style/main.css',
        '~/assets/style/parallax.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/style/main.scss" as *;'
                }
            }
        }
    },
})
