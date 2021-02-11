
<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  components: { Card },
});
</script>
<template>
  <div class="w-full bg-gray-200 dark:bg-gray-900">
    <section
      class="text-gray-900 bg-gray-200 dark:bg-gray-900 dark:text-gray-200"
    >
      <div class="max-w-6xl px-5 py-24 mx-auto">
        <div class="mb-20 text-center">
          <h1
            class="mb-4 text-4xl font-extrabold leading-10 tracking-tight title-font sm:text-5xl sm:leading-none md:text-6xl"
          >
            Compétences
          </h1>
          <p class="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">
            L'informatique est vaste et les langages naissent presque à tout
            moment, je fais tout mon possible pour être à la hauteur afin de
            répondre au besoin de mes clients et d'apporter de l'aide aux
            nouveaux développeurs.
          </p>
          <div class="flex justify-center mt-6">
            <div class="inline-flex w-16 h-1 bg-indigo-500 rounded-full"></div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <Card v-for="(item, indx) in 10" :key="indx" />
        </div>
      </div>
    </section>
  </div>
</template>

