<script lang="ts">
import ContentZone from "@/components/editor/ContentZone.vue";
import HeaderZone from "@/components/editor/HeaderZone.vue";
import { defineComponent } from "vue";

//comp

export default defineComponent({
  components: { HeaderZone, ContentZone },
  data() {
    return {};
  },
});
</script>
<template>
  <div class="w-full font-mono bg-gray-200 dark:bg-gray-900">
    <section
      class="w-full text-gray-900 bg-gray-200 dark:bg-gray-900 dark:text-gray-200"
    >
      <div class="flex w-full py-10 pt-32 text-center">
        <div class="w-full">
          <!-- component -->
          <div class="flex justify-start w-full mb-3">
            <button
              class="justify-start px-4 py-1 text-green-800 text-opacity-100 bg-green-200 rounded-sm dark:text-green-300 bg-opacity-90 dark:bg-opacity-10 focus:outline-none"
            >
              Simpan
            </button>
          </div>
          <header-zone />
          <content-zone/>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.hasImage:hover section {
  background-color: rgba(5, 5, 5, 0.4);
}
.hasImage:hover button:hover {
  background: rgba(5, 5, 5, 0.45);
}

#overlay p,
i {
  opacity: 0;
}

#overlay.draggedover {
  background-color: rgba(255, 255, 255, 0.7);
}
#overlay.draggedover p,
#overlay.draggedover i {
  opacity: 1;
}

.group:hover .group-hover\:text-blue-800 {
  color: #2b6cb0;
}
</style>