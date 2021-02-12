<script>
import { defineComponent, ref } from "vue";

//comp
import VueMarkdownIt from "vue3-markdown-it";

export default defineComponent({
  components: { VueMarkdownIt },
  setup() {
    const input = ref("");
    const tr = {
      markdownIt: {
        linkify: true,
      },
      linkAttributes: {
        attrs: {
          target: "_blank",
          rel: "noopener",
        },
      },
    };
    return { input, tr };
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
        <div class="w-1/5 h-full mx-10">
          <div class="flex flex-row p-4 bg-white rounded shadow-sm">
            <div class="items-center content-center ml-4">
              <vue-markdown-it :source="input" :options="tr" />
            </div>
          </div>
        </div>
        <div class="w-2/3 h-full mx-10">
          <textarea v-model="input" />
        </div>
      </div>
    </section>
  </div>
</template>