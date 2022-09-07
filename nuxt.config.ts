import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr:false,
    nitro:{
        preset:'service-worker'
    },
    modules:[
        "@nuxtjs/tailwindcss",
        "@nuxt/content"
    ],
    css:["~/assets/css/tailwind.css"],
    build:{
        postcss:{
            postcssOptions:{
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                  },
            }
        }
    },
    content:{
        highlight:{
            theme:'dracula'
        }
    }
})
