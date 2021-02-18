<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContentTypeZone",
  setup() {},
});
</script>
<template>
  <draggable
    class="flex-1"
    :list="availablecontent"
    :group="{ name: 'people', pull: 'clone', put: false }"
    :clone="cloneDog"
    @change="log"
    item-key="index"
  >
    <template #item="{ element }">
      <div
        class="col-span-12 mt-2 cursor-pointer list-group-item sm:col-span-6 md:col-span-3"
      >
        <div
          class="flex flex-row p-4 bg-white rounded shadow-sm dark:bg-gray-800"
        >
          <div class="items-center content-center ml-4">
            <div class="text-sm text-gray-500 dark:text-gray-50">
              {{ element.name }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </draggable>
</template>