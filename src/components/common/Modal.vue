<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const showModal = ref(false);
    function closeModal() {
      emit("dismiss", true);
    }

    watch(
      () => props.show,
      (show) => {
        showModal.value = show;
      }
    );
    return { showModal, closeModal };
  },
});
</script>
<template>
  <teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="showModal"
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
            <div class="mb-4">
              <h1>Welcome!</h1>
            </div>
            <div class="mb-8">
              <p>
                Ready to get started? Keep scrolling to see some great
                components.
              </p>
            </div>
            <div class="flex justify-center">
              <button
                class="px-4 py-2 rounded flex-no-shrink bg-teal hover:bg-teal-dark"
              >
                Let's Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>