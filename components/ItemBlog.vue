<template>
    <article aria-labelledby="episode-5-title" class="py-10 sm:py-12">
        <div class="lg:px-8">
            <div class="lg:max-w-4xl">
                <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    <div class="flex flex-col items-start">
                        <h2 id="episode-5-title" class="mt-2 text-lg font-bold text-slate-900">
                            <nuxt-link :to="path">{{title}}</nuxt-link>
                        </h2>
                        <time datetime="2022-02-24T00:00:00.000Z"
                            class="order-first font-mono text-sm leading-7 text-slate-500">{{formatDate(date)}}</time>
                        <p class="mt-1 text-base leading-7 text-slate-700">{{description}}.</p>
                        <div class="mt-4 flex items-center gap-4">
                            <nuxt-link :to="path" class="flex items-center 
                                text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                                :aria-label="'Read more about' +title"><svg aria-hidden="true" viewBox="0 0 10 10"
                                    fill="none" class="h-2.5 w-2.5 fill-current">
                                    <path
                                        d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z">
                                    </path>
                                </svg><span class="ml-3" aria-hidden="true">Read More</span>
                            </nuxt-link>
                            <span aria-hidden="true" class="text-sm font-bold text-slate-400">/

                            </span>
                            <a v-for="(item,index) in tags" :key="index"
                                class="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                                aria-label="Tags">#{{item}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>
<script>

export default {
    props: {
        title: {
            type: String,
            default: "default title"
        },
        description: {
            type: String,
            default: "default description"
        },
        tags: {
            type: [],
            default: []
        },
        date: {
            type: String,
            default: "2022-09-07"
        },
        path: {
            type: String
        }

    },
    methods: {
        formatDate(date) {
            return new Date(date).toString()
        }
    }
}
</script>