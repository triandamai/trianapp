<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import { useBlog } from "@/store/BlogRepository";
import ItemTutorial from "@/components/dashboard/ItemTutorial.vue";

export default defineComponent({
  components: { ItemTutorial },
  setup() {
    const { dataTutorial, getAlltutorial } = useBlog();

    onBeforeMount(() => {
      getAlltutorial().then(({ success }) => {
        if (success) {
          console.clear();
        }
      });
    });
    return {
      dataTutorial,
    };
  },
});
</script>
<template>
  <div class="flex flex-wrap">
    <item-tutorial v-for="(data, index) in dataTutorial" :key="index" />
  </div>
</template>