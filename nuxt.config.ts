// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@pinia/nuxt", '@pinia-plugin-persistedstate/nuxt', "@nuxtjs/i18n"],
    css: ["~/assets/css/main.css"],
    i18n: {
        vueI18n: "./i18n/i18n.ts",
        detectBrowserLanguage: {
            useCookie: true,
            alwaysRedirect: false,
            fallbackLocale: 'en-US',
            cookieKey: 'i18n_redirected',
            redirectOn: 'root' // recommended
        },
        strategy: 'no_prefix',
        locales: [
            {
                code: 'en-US',
                flag: '/images/flags/us.svg'
            },
            {
                code: 'es-ES',
                flag: '/images/flags/es.svg'
            },
            {
                code: 'it-IT',
                flag: '/images/flags/it.svg'
            },
            {
                code: 'zh-CN',
                flag: '/images/flags/cn.svg'
            },
            {
                code: 'pl-PL',
                flag: '/images/flags/pl.svg'
            },
            {
                code: 'uk-UA',
                flag: '/images/flags/ua.svg'
            }
        ]
    },
    plugins: ["~/plugins/preline.client.ts"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    nitro: {
        experimental: {
            wasm: true
        }
    },
});
