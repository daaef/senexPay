import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        title: 'SenexPay | Buy and Sell Crypto the easier way.',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'A test by Afekhide Gbadamosi for SenexPay' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: [
        "~/assets/fonts/sf-pro.css",
        "~/assets/scss/style.scss",
    ],
    plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
})
