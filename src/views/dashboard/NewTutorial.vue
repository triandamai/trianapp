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
import { storage } from "@/store/firbaseDatabase";
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const date = Date.now().toString();
    const { uploadTutorial } = useBlog();
    const image = ref();
    const preview = ref();
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

      autofocus: false,
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
    function onPickImage(e) {
      console.log(e.target.files);
      image.value = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        preview.value = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      const taskUpload = storage
        .ref()
        .child("tutorial")
        .child(`image-${date}.jpg`)
        .put(e.target.files[0]);

      taskUpload.on(
        "state_changed",
        (snapshot) => {
          console.log(
            `Upload is ${
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            }`
          );
        },
        (err) => {
          console.log(err);
        }
      );
    }
    function processUpload() {
      if (dataTutorial.title == null || dataTutorial.title.length <= 5) return;

      editor
        .save()
        .then((output) => {
          console.log(output);
          const uniq = dataTutorial.title
            .toString()
            .replaceAll(" ", "-")
            .toLowerCase();

          dataTutorial.content = output.blocks;
          dataTutorial.createdAt = output.time;
          dataTutorial.updateAt = output.time;
          dataTutorial.id = uniq;

          uploadTutorial({
            id: uniq,
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
      onPickImage,
      preview,
      image,
    };
  },
});
</script>
<template>
  <div class="flex flex-wrap w-full">
    <div class="w-1/5 px-6">
      <form @submit.prevent="processUpload">
        <input
          class="px-4 py-2"
          v-model="dataTutorial.title"
          autofocus
          placeholder="Input Judul"
        />
        <input
          class="px-4 py-2"
          v-model="dataTutorial.description"
          placeholder="Deskripsi"
        />
        <input class="px-4 py-2" placeholder="TAG" />
        <div
          class="flex items-center justify-center w-full bg-grey-lighter imagePreviewWrapper"
        >
          <label
            class="flex flex-col items-center w-64 px-4 py-6 tracking-wide uppercase bg-white border rounded-sm cursor-pointer text-blue border-blue hover:bg-blue hover:text-white"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
              />
            </svg>
            <span class="mt-2 text-base leading-normal">Pilih Gambar</span>
            <input type="file" class="hidden" @change="onPickImage" />
          </label>
        </div>
        <div class="flex flex-wrap justify-between px-4 mt-6">
          <button
            type="submit"
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
      </form>
    </div>
    <div class="w-2/3 bg-white" id="editorjs" />
  </div>
</template>
<style scoped lang="scss">
</style>