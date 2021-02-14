<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";

export default defineComponent({
  name: "QuoteInput",
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
    <div class="flex flex-grow p-4 bg-white shadow-sm dark:bg-gray-800">
      <div class="w-full ml-4 justify-items-start">
        <h3 class="text-center">
          {{ title }}
        </h3>
        <textarea
          :id="`text-${index}`"
          :ref="textarea"
          class="w-full pr-5 text-center focus:outline-none dark:bg-gray-800 bg-gray-50"
          v-model="inputVal"
          :style="{ 'min-height': `${inputH}px` }"
          rows="1"
          placeholder=" &#10077; Ketikkan Kutipan &#10080;"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>