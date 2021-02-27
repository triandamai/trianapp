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
            HEHEH
            <button @click="closeModal">close</button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>