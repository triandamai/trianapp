<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderZone",
});
</script>
<template>
  <div class="w-full px-2 pt-2 bg-gray-200 dark:bg-gray-800">
    <main class="max-w-screen-lg mx-auto">
      <div class="w-full px-5 bg-white dark:bg-gray-800 rounded-t-md">
        <input
          class="w-full px-5 py-3 font-bold focus:outline-none dark:bg-gray-800 dark:text-gray-50"
          placeholder="Ketikkan Judul Tutorial"
        />
        <input
          class="w-full px-5 py-3 font-bold focus:outline-none dark:bg-gray-800 dark:text-gray-50"
          placeholder="Ketikkan Deskripsi Tutorial"
        />
      </div>
      <article
        aria-label="File Upload Modal"
        class="relative flex flex-col h-full bg-white rounded-md shadow-xl"
      >
        <!-- overlay
                <div
                  id="overlay"
                  :class="{ draggedover: drag }"
                  class="absolute top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full rounded-md pointer-events-none"
                >
                  <i>
                    <svg
                      class="w-12 h-12 mb-3 text-blue-700 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z"
                      />
                    </svg>
                  </i>
                  <p class="text-lg text-blue-700">Drop files to upload</p>
                </div>

                 scroll area -->
        <!-- <header
                  @drop.prevent="addFile"
                  @dragover.prevent
                  @dragenter.prevent="dragEnterHandler"
                  @dragleave.prevent="dragLeaveHandler"
                  class="flex flex-col items-center justify-center px-12 py-12 mx-8 my-6 border-2 border-gray-400 border-dashed"
                > -->
        <header
          class="flex flex-col items-center justify-center px-12 py-12 mx-8 my-6 border-2 border-gray-400 border-dashed"
        >
          <div>
            <p
              class="flex flex-wrap justify-center mb-3 font-semibold text-gray-900"
            >
              <span>Drag and drop your</span>&nbsp;<span
                >files anywhere or</span
              >
            </p>
            <input id="hidden-input" type="file" multiple class="hidden" />
            <button
              id="button"
              class="px-3 py-1 mt-2 bg-gray-200 rounded-sm hover:bg-gray-300 focus:shadow-outline focus:outline-none"
            >
              Upload a file
            </button>
          </div>
        </header>
      </article>
    </main>
  </div>
</template>