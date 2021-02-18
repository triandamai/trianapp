<script lang="ts">
import { defineComponent } from "vue";
import { usePost } from "@/store/NewPostRepository";
import TextInput from "./TextInput.vue";

export default defineComponent({
  components: { TextInput },
  name: "ContentZone",
  setup() {
    return { ...usePost() };
  },
});
</script>
<template>
  <draggable
    class="w-full dragArea list-group"
    :list="DataContent"
    @change="onDrop"
    :sort="false"
    item="{item}"
  >
    <text-input
      class="my-5 cursor-pointer"
      v-for="(item, index) in DataContent"
      :key="index"
      :index="index"
      :title="item.name"
    />
  </draggable>
</template>