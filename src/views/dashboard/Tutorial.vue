<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import { useBlog } from "@/store/BlogRepository";
import ItemTutorial from "@/components/dashboard/ItemTutorial.vue";

export default defineComponent({
  components: { ItemTutorial },
  setup() {
    const { dataTutorial, getAlltutorial } = useBlog();
    const modal = ref(false);
    function onRemove() {
      console.log("sas");
      modal.value = !modal.value;
    }

    onBeforeMount(() => {
      getAlltutorial().then(({ success }) => {
        /**
         *
         */
      });
    });
    return {
      dataTutorial,
      onRemove,
      modal,
    };
  },
});
</script>
<template>
  <div class="flex flex-wrap">
    <item-tutorial
      v-for="(data, index) in dataTutorial"
      :key="index"
      :data="data"
      v-on:remove="onRemove"
    />
    <Modal :show="modal" v-on:dismiss="onRemove" />
  </div>
</template>