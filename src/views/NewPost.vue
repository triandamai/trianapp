<script lang="ts">
import { defineComponent } from "vue";
import draggable from "vuedraggable";

//comp
import TextInput from "@/components/editor/TextInput.vue";

export default defineComponent({
  components: { draggable, TextInput },
  data() {
    return {
      list1: [
        { name: "Paragraf", id: 1, type: "text", body: "" },
        { name: "BlockQuote", id: 2, type: "blockquote", body: "" },
        { name: "Code Preview", id: 3, type: "code", body: "" },
        { name: "Gambar", id: 4, type: "image", body: "" },
      ],
      list2: [],
    };
  },
  methods: {
    log: function (evt: any) {
      if (evt.moved) {
        const data: any = this.list2[evt.moved.newIndex];
        data.index = evt.moved.newIndex;
      }
    },
    cloneDog({ id, name, type, body }: any) {
      return {
        id: this.list2.length + 1,
        index: this.list2.length + 1,
        type: type,
        body: body,
        name: `${name} ${id}`,
      };
    },
  },
});
</script>
<template>
  <div
    class="w-full h-full min-h-screen font-mono bg-gray-200 dark:bg-gray-900"
  >
    <section
      class="w-full text-gray-900 bg-gray-200 dark:bg-gray-900 dark:text-gray-200"
    >
      <div class="flex w-full py-10 pt-32 text-center">
        <div class="fixed w-1/5 h-full mx-10">
          <draggable
            class="flex-1"
            :list="list1"
            :group="{ name: 'people', pull: 'clone', put: false }"
            :clone="cloneDog"
            @change="log"
            item-key="index"
          >
            <template #item="{ element }">
              <div
                class="col-span-12 mt-2 list-group-item sm:col-span-6 md:col-span-3"
              >
                <div class="flex flex-row p-4 bg-white rounded shadow-sm">
                  <div class="items-center content-center ml-4">
                    <div class="text-sm text-gray-500">{{ element.name }}</div>
                  </div>
                </div>
              </div>
            </template>
          </draggable>
        </div>
        <div class="w-1/5 h-full mx-10"></div>
        <div
          class="flex-wrap w-2/3 h-full mx-10 overflow-auto overflow-y-scroll"
        >
          <!-- component -->
          <div class="w-full h-full px-5 pt-5 bg-gray-300">
            <main class="container h-full max-w-screen-lg mx-auto">
              <div class="w-full h-full px-5 py-3 bg-white rounded-t-md">
                <input
                  class="w-full h-full px-5 py-3 font-bold focus:outline-none"
                  placeholder="Ketikkan Judul Artikel"
                />
              </div>
              <!-- file upload modal -->
              <article
                aria-label="File Upload Modal"
                class="relative flex flex-col h-full bg-white rounded-none"
              >
                <!-- <article
                aria-label="File Upload Modal"
                class="relative flex flex-col h-full bg-white rounded-none"
                ondrop="dropHandler(event);"
                ondragover="dragOverHandler(event);"
                ondragleave="dragLeaveHandler(event);"
                ondragenter="dragEnterHandler(event);"
              > -->
                <!-- overlay -->
                <div
                  id="overlay"
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

                <!-- scroll area -->
                <section class="flex flex-col w-full h-full p-8 overflow-auto">
                  <header
                    class="flex flex-col items-center justify-center py-12 border-2 border-gray-400 border-dashed"
                  >
                    <p
                      class="flex flex-wrap justify-center mb-3 font-semibold text-gray-900"
                    >
                      <span>Drag and drop your</span>&nbsp;<span
                        >files anywhere or</span
                      >
                    </p>
                    <input
                      id="hidden-input"
                      type="file"
                      multiple
                      class="hidden"
                    />
                    <button
                      id="button"
                      class="px-3 py-1 mt-2 bg-gray-200 rounded-sm hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                    >
                      Upload a file
                    </button>
                  </header>

                  <ul
                    id="gallery"
                    class="flex flex-wrap flex-1 -m-1"
                    v-show="false"
                  >
                    <li
                      id="empty"
                      class="flex flex-col items-center justify-center w-full h-full text-center"
                    >
                      <img
                        class="w-32 mx-auto"
                        src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                        alt="no data"
                      />
                      <span class="text-gray-500 text-small"
                        >No files selected</span
                      >
                    </li>
                  </ul>
                </section>
              </article>
            </main>
          </div>

          <draggable
            class="flex-1 w-full h-full min-h-full px-5 py-5 bg-gray-300"
            :list="list2"
            group="people"
            @change="log"
            item-key="id"
          >
            <template #item="{ element }">
              <text-input
                v-if="element.type == 'text' || element.type == 'blockquote'"
                :title="element.name"
                :index="element.index"
              />
            </template>
          </draggable>
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