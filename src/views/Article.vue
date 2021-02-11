
<script lang="ts">
import { defineComponent } from "vue";
import CardArtikel from "@/components/CardArtikel.vue";

export default defineComponent({
  components: { CardArtikel },
});
</script>
<template>
  <div class="w-full font-mono bg-gray-100 dark:bg-gray-900">
    <section
      class="text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-200"
    >
      <div class="max-w-6xl px-5 py-24 mx-auto">
        <div class="mb-20 text-center">
          <h1
            class="mb-4 font-mono text-4xl font-extrabold leading-10 tracking-tight title-font sm:text-5xl sm:leading-none md:text-6xl"
          >
            Artikel
          </h1>
          <p
            class="mx-auto font-mono text-base leading-relaxed xl:w-2/4 lg:w-3/4"
          >
            Informasi seputar teknologi. membantu para developer mendapatkan
            informasi dunia teknologi.
          </p>
          <div class="flex justify-center mt-6">
            <div class="inline-flex w-16 h-1 bg-indigo-500 rounded-full"></div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <card-artikel v-for="(item, indx) in 10" :key="indx" />
        </div>
      </div>
    </section>
  </div>
</template>

