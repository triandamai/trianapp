<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "@/store";

import { DocumentActionTypes } from "@/store/module/action-types";

export default defineComponent({
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch(DocumentActionTypes.GET_TUTORIAL);
    });
    return {
      store,
    };
  },
});
</script>
<template>
  <div
    class="w-full h-full font-mono bg-gray-100 min-h-max dark:bg-gray-900"
    style="height: 80%"
  >
    <section class="text-gray-900 dark:text-gray-200">
      <div class="container px-5 py-24 mx-auto">
        <div class="mb-20 text-center">
          <h1
            class="mb-4 font-mono text-4xl font-extrabold leading-10 tracking-tight title-font sm:text-5xl sm:leading-none md:text-6xl"
          >
            Tutorial
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
          <!-- CARD -->
          <card-tutorial
            v-for="(item, index) in store.state.tutorial"
            :data="item"
            :key="index"
          />
        </div>
      </div>
    </section>
  </div>
</template>
  <style  scoped>
.w-70 {
  width: 20rem;
}
</style>


