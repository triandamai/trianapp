<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
});
</script>
<template>
  <teleport to="body">
    <div
      ref="modal-backdrop"
      class="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50"
    >
      <div
        class="flex items-start justify-center min-h-screen pt-24 text-center"
      >
        <div
          class="w-1/2 p-8 overflow-hidden text-left bg-white rounded-lg shadow-xl"
          role="dialog"
          ref="modal"
          aria-modal="true"
          aria-labelledby="modal-tutorial"
        >
          HEHEH
        </div>
      </div>
    </div>
  </teleport>
</template>