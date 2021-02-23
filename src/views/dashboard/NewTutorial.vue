<script >
import { defineComponent } from "vue";
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

export default defineComponent({
  setup() {
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
  },
});
</script>
<template>
  <div>
    <div class="flex justify-end w-full">
      <button>Simpan</button>
    </div>
    <div class="flex flex-wrap w-full">
      <div class="w-1/5 px-6">
        <input class="px-4 py-2" placeholder="Input Judul" />
      </div>
      <div class="w-2/3 bg-white" id="editorjs"></div>
    </div>
  </div>
</template>