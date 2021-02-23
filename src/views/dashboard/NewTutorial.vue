<script  >
import EditorJs from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Quote from "@editorjs/quote";
import CheckList from "@editorjs/checklist";
import SimpleImage from "@editorjs/simple-image";
import CodeTool from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";
import Marker from "@editorjs/marker";
import { useBlog } from "@/store/BlogRepository";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const { uploadTutorial } = useBlog();
    const dataTutorial = reactive({
      id: "",
      title: "",
      uuid: "",
      tag: "#VueJs",
      username: "",
      description: "",
      createdAt: "",
      updateAt: "",
      content: null,
    });
    const editor = new EditorJs({
      holder: "editorjs",

      autofocus: true,
      placeholder: "Ketikkan Konten",

      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+H",

          config: {
            placeholder: "Masukkan Header",
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 1,
            autofocus: false,
          },
        },
        Paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          config: {
            placeholder: "Masukkan paragraf",
            autofocus: false,
          },
        },
        Embed: {
          class: Embed,
          inlineToolbar: true,
        },
        List: {
          class: List,
          inlineToolbar: true,
        },
        Image: {
          class: Image,
          inlineToolbar: true,
        },
        Quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Ketikkan Quote",
            captionPlaceholder: "Quote's Author",
          },
        },
        CheckList: {
          class: CheckList,
          inlineToolbar: true,
        },
        SimpleImage: {
          class: SimpleImage,
          inlineToolbar: true,
        },
        CodeTool: {
          class: CodeTool,
          inlineToolbar: true,
        },
        InlineCode: {
          class: InlineCode,
          inlineToolbar: true,
        },
        Marker: {
          class: Marker,
          inlineToolbar: true,
        },
      },
    });
    function processUpload() {
      if (dataTutorial.title == null || dataTutorial.title.length <= 5) return;

      editor
        .save()
        .then((output) => {
          console.log(output);
          dataTutorial.content = output.blocks;
          dataTutorial.createdAt = output.time;
          dataTutorial.updateAt = output.time;

          uploadTutorial({
            id: dataTutorial.title.toString().replaceAll(" ", "-"),
            payload: dataTutorial,
          }).then(({ message, success }) => {
            console.log(message, success);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
    return {
      dataTutorial,
      processUpload,
    };
  },
});
</script>
<template>
  <div class="flex flex-wrap w-full">
    <div class="w-1/5 px-6">
      <input
        class="px-4 py-2"
        v-model="dataTutorial.title"
        placeholder="Input Judul"
      />
      <input
        class="px-4 py-2"
        v-model="dataTutorial.description"
        placeholder="Deskripsi"
      />
      <input class="px-4 py-2" placeholder="TAG" />
      <div class="flex flex-wrap justify-between px-4 mt-6">
        <button
          @click="processUpload"
          class="px-4 py-1 text-green-100 bg-green-500 rounded-sm dark:bg-opacity-10"
        >
          Simpan
        </button>
        <button
          class="px-4 py-1 text-green-100 bg-green-500 rounded-sm dark:bg-opacity-10"
        >
          Draft
        </button>
      </div>
    </div>
    <div class="w-2/3 bg-white" id="editorjs" />
  </div>
</template>