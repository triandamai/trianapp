<template>
        <div
                class="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
                <span class="font-mono text-slate-500">Made by</span>
                <span class="mt-6 flex gap-6 font-bold text-slate-900 font-mono">
                        Trian Damai
                        <span aria-hidden="true" class="text-slate-400">/</span>

                </span>
                <nuxt-link class="cursor-pointer" to="/">
                        Blogs
                </nuxt-link>
                <span aria-hidden="true" class="mt-6 text-slate-400 font-mono">/</span>
                <nuxt-link class="cursor-pointer" to="/projects">
                        Projects
                </nuxt-link>
                <span aria-hidden="true" class="mt-6 text-slate-400 font-mono">/</span>
                <nuxt-link class="cursor-pointer" to="/snippets">
                        Snippets
                </nuxt-link>
        </div>
</template>