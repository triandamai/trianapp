
<template>
    <header class="flex flex-col">
        <div class="flex items-center gap-6"><button type="button"
                class="group relative flex flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-slate-700 h-18 w-18 focus:ring focus:ring-offset-4"
                aria-label="Play">
                <div class="absolute -inset-3 md:hidden"></div><svg aria-hidden="true" viewBox="0 0 36 36"
                    class="fill-white group-active:fill-white/80 h-9 w-9">
                    <path
                        d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z">
                    </path>
                </svg>
            </button>
            <div class="flex flex-col">
                <h1 class="mt-2 text-4xl font-bold text-slate-900"> {{title}}</h1>
                <time :datetime="date"
                    class="order-first font-mono text-sm leading-7 text-slate-500">{{date}}</time>
            </div>
        </div>
        <p class="ml-24 mt-3 text-lg font-medium leading-8 text-slate-700">{{description}}.</p>
    </header>
</template>
<script>
    export default{
        props:{
    title: {
        type: String,
        default: "default title"
    },
    description: {
        type: String,
        default: "default description"
    },
    date: {
        type: String,
        default: "2022-09-07"
    },
    tags: {
        type: [],
        default: []
    },

}
    }
</script>