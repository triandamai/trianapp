<script lang="ts">
import { defineComponent } from "vue";
import draggable from "vuedraggable";

//comp

import { DocumentActionTypes } from "@/store/module/action-types";
import { Content, DataContent } from "@/store/module/model-types";

export default defineComponent({
  components: {
    draggable,
  },
  data() {
    return {
      availablecontent: [
        { name: "Paragraf", id: 1, type: "text", body: "" },
        { name: "BlockQuote", id: 2, type: "blockquote", body: "" },
        { name: "Code Preview", id: 3, type: "code", body: "" },
        { name: "Gambar", id: 4, type: "image", body: "" },
        { name: "Heading", id: 5, type: "heading", body: "" },
        { name: "Kutipan", id: 6, type: "quote", body: "" },
      ],
      content: [],
      title: "",
      description: "",
    };
  },
  methods: {
    log: function (evt: any) {
      if (evt.moved) {
        const data: any = this.content[evt.moved.newIndex];
        data.index = evt.moved.newIndex;
      } else {
        const data: any = this.content[evt.added.newIndex];
        data.index = evt.added.newIndex;
      }
    },
    cloneDog({ id, name, type, body }: any) {
      return {
        id: this.content.length + 1,
        index: this.content.length + 1,
        type: type,
        body: body,
        name: name,
      };
    },
    setBody(payload: any) {
      const data: any = this.content[payload.index];
      data.body = payload.body;
    },
    sendData() {
      const contens: Array<Content> = [];
      this.content.map((item: any) => {
        contens.push({
          id: item.id,
          index: item.index,
          body: item.body,
          type: item.type,
        });
      });
      const datacontent: DataContent = {
        id: this.title.replaceAll(" ", "-"),
        slug: this.title.replaceAll(" ", "-"),
        title: this.title,
        description: this.description,
        content: contens,
        uuid: "kosong",
        username: "kososng",
        createdAt: Date.now().toString(),
        updateAt: Date.now().toString(),
      };
      if (contens.length < 1 || this.title.length < 10) {
        return;
      }
      this.$store
        .dispatch(DocumentActionTypes.POST_TUTORIAL, datacontent)
        .then((res: any) => {
          console.log(res);
        });
    },
  },
});
</script>
<template>
  <div class="w-full font-mono bg-gray-200 dark:bg-gray-900">
    <section
      class="w-full text-gray-900 bg-gray-200 dark:bg-gray-900 dark:text-gray-200"
    >
      <div class="flex w-full py-10 pt-32 text-center">
        <div class="fixed w-1/5 h-full mx-10">
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
        </div>
        <div class="w-1/4 h-full mx-10"></div>
        <div class="w-2/4 mx-10">
          <!-- component -->
          <div class="flex justify-start w-full mb-3">
            <button
              class="justify-start px-4 py-1 text-green-800 text-opacity-100 bg-green-200 rounded-sm dark:text-green-300 bg-opacity-90 dark:bg-opacity-10 focus:outline-none"
              @click="sendData"
            >
              Simpan
            </button>
          </div>
          <div class="w-full px-2 pt-2 bg-gray-300 dark:bg-gray-800">
            <main class="max-w-screen-lg mx-auto">
              <div class="w-full px-5 bg-white dark:bg-gray-800 rounded-t-md">
                <input
                  class="w-full px-5 py-3 font-bold focus:outline-none dark:bg-gray-800 dark:text-gray-50"
                  placeholder="Ketikkan Judul Tutorial"
                  v-model="title"
                />
                <input
                  class="w-full px-5 py-3 font-bold focus:outline-none dark:bg-gray-800 dark:text-gray-50"
                  placeholder="Ketikkan Deskripsi Tutorial"
                  v-model="description"
                />
              </div>
              <!-- file upload modal -->
              <article
                aria-label="File Upload Modal"
                class="flex flex-col bg-white rounded-none dark:bg-gray-800"
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
                <section
                  class="flex flex-col w-full px-8 pt-2 pb-4 overflow-auto"
                >
                  <header
                    class="flex flex-col items-center justify-center py-12 border-2 border-gray-400 border-dashed"
                  >
                    <p
                      class="flex flex-wrap justify-center mb-3 font-semibold text-gray-900 dark:text-gray-100"
                    >
                      <span>Drag dan drop </span>&nbsp;<span
                        >file gambar disini atau</span
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
                      class="px-3 py-1 mt-2 bg-gray-200 rounded-sm hover:bg-gray-300 focus:shadow-outline focus:outline-none dark:bg-gray-900"
                    >
                      Unggah file
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
            class="relative flex-grow px-2 py-8 pt-2 bg-gray-300 dark:bg-gray-800"
            :list="content"
            group="people"
            @change="log"
            item-key="id"
          >
            <template #item="{ element }">
              <div>
                <text-input
                  v-if="element.type == 'text'"
                  :title="element.name"
                  :index="element.index"
                  v-on:body="setBody"
                />
                <blockquote-input
                  v-if="element.type == 'blockquote'"
                  :title="element.name"
                  :index="element.index"
                  v-on:body="setBody"
                />
                <code-preview-input
                  v-if="element.type == 'code'"
                  :title="element.name"
                  :index="element.index"
                  v-on:body="setBody"
                />
                <quote-input
                  v-if="element.type == 'quote'"
                  :title="element.name"
                  :index="element.index"
                  v-on:body="setBody"
                />
              </div>
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