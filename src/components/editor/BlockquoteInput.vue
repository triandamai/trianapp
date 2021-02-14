<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";

export default defineComponent({
  name: "BlockquoteInput",
  props: {
    title: { type: String, default: "" },
    index: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    let textarea = document.getElementById("text-" + props.index);

    const inputVal = ref("");
    const inputH = ref<any>(3);

    onMounted(() => {
      textarea = document.getElementById("text-" + props.index);
    });
    watch(inputVal, (newV, oldV) => {
      inputH.value = newV.length < 1 ? 3 : textarea?.scrollHeight;
      emit("body", { body: inputVal.value, index: props.index });
    });
    return {
      ...props,
      textarea,
      inputVal,
      inputH,
    };
  },
});
</script>
<template>
  <div
    class="flex-grow col-span-12 list-group-item sm:col-span-6 md:col-span-3"
  >
    <div class="flex flex-grow bg-white shadow-sm dark:bg-gray-800">
      <div class="w-full pl-4 pr-4 ml-4 justify-items-start">
        <h3 class="text-left">
          {{ title }}
        </h3>
        <textarea
          :id="`text-${index}`"
          :ref="textarea"
          class="w-full pl-2 pr-5 border-l-4 border-gray-700 dark:border-gray-200 focus:outline-none dark:bg-gray-800"
          v-model="inputVal"
          :style="{ 'min-height': `${inputH}px` }"
          rows="1"
          placeholder="ketikkan sesuatu"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>