<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "@/store";

import { DocumentActionTypes } from "@/store/module/action-types";
import HeaderSection from "@/components/main/HeaderSection.vue";
import ListItemSection from "@/components/main/ListItemSection.vue";

export default defineComponent({
  components: { HeaderSection, ListItemSection },
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
  <section class="text-gray-900 dark:text-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <header-section :title="Tutorial">
        <p
          class="mx-auto font-mono text-base leading-relaxed xl:w-2/4 lg:w-3/4"
        >
          Informasi seputar teknologi. membantu para developer mendapatkan
          informasi dunia teknologi.
        </p>
      </header-section>
      <list-item-section>
        <card-tutorial
          v-for="(item, index) in store.state.tutorial"
          :data="item"
          :key="index"
        />
      </list-item-section>
    </div>
  </section>
</template>



