<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    positivebutton: { type: String, default: "Oke" },
    negativebutton: {
      type: String,
      default: "Batal",
    },
  },
  emits: ["positive", "negative"],
  setup(props, { emit }) {
    const showModal = ref(false);
    function positiveButton() {
      emit("positive", true);
    }
    function negativeButton() {
      emit("negative", true);
    }

    watch(
      () => props.show,
      (show) => {
        showModal.value = show;
      }
    );
    return { showModal, positiveButton, negativeButton, props };
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
            class="p-8 overflow-hidden text-left bg-white rounded-sm shadow-xl"
            role="dialog"
            ref="modal"
            aria-modal="true"
            aria-labelledby="modal-tutorial"
          >
            <div class="mb-4">
              <h1>{{ props.title }}</h1>
            </div>
            <div class="mb-8">
              <p>
                {{ props.message }}
              </p>
            </div>
            <div class="flex justify-between w-full">
              <button
                @click="positiveButton"
                class="px-4 py-1 mx-2 text-green-800 bg-green-500 rounded flex-no-shrink"
              >
                {{ props.negativebutton }}</button
              ><button
                @click="negativeButton"
                class="px-4 py-1 mx-2 text-gray-800 bg-gray-400 rounded flex-no-shrink"
              >
                {{ props.positivebutton }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>