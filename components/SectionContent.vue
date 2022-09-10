<script setup lang="ts">
    defineProps({
        title:{
            type:String,
            default:"Content"
        }
    })
</script>
<template>
    <main class="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-[40%] lg:border-t-0 xl:ml-[40%]">
            <Geometry/>
            <div class="relative">
                <div class="pt-16 pb-12 sm:pb-4 lg:pt-12">
                    <div class="lg:px-8">
                        <div class="lg:max-w-4xl">
                            <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                                <h1 class="text-2xl font-bold leading-7 text-slate-900">{{title}}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
                      <slot></slot>
                      <slot name="loading"></slot>
                    </div>
                </div>
            </div>
        </main>
</template>