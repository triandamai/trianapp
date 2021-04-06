<template>
  <div class="px-6 md:px-16 dark:bg-gray-900">
    <!-- TITTLE -->
    <h1
      class="text-center dark:text-gray-200 text-wrap mt-16 mb-8 text-md md:text-5xl font-extrabold mx-6"
    >
      Accept Crypto Payments with coinbas eCommerce
    </h1>
    <!-- HEAD -->

    <div>
      <img
        class="w-full md:h-100 h-50 lg:h-150"
        src="https://fireship.io/courses/flutter-firebase/img/featured.jpg"
        alt="tailwind css components and templates"
      />
      <div class="flex bg-gray-800 px-6">
        <div class="flex my-4 pr-2">
          <div class="mr-2">
            <div class="mt-4 text-gray-400 text-sm">
              How to accept crypto payments, like Bitcoin and Ethereum, from
              your web app with Coinbase & Firebase Cloud Functions
              <p>752 words</p>
            </div>

            <div>
              <h3 class="text-md text-gray-400 mt-4 mb-2">Trian Damai</h3>
            </div>
            <div class="text-xs text-gray-400">
              <div>Created Mar 29,2021</div>
            </div>
          </div>

          <div>
            <button class="px-3 py-2 bg-gray-400 my-1 rounded-sm flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                /></svg
              >code
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- CONTENT -->
    <div
      v-for="(content, index) in data"
      :key="index"
      class="my-4 mx-4 md:my-6 md:px-6 lg:my-8 lg:mx-8"
    >
      <Paragraf v-if="content.type == 'p'" :body="content.body" />
      <Heading v-else-if="content.type == 'h1'" :body="content.body" />
      <List v-else-if="content.type == 'ul'" :body="content" />
      <Code v-else-if="content.type == 'code'" :body="content" />
      <Terminal v-else-if="content.type == 'terminal'" :body="content.body" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import "prismjs/themes/prism.css";
import { data } from "../utils/mock";
import Paragraf from "../components/content/Paragraf.vue";
import Heading from "../components/content/Heading1.vue";
import H2 from "../components/content/Heading2.vue";
import List from "../components/content/List.vue";
import Code from "../components/content/Code.vue";
import Terminal from "../components/content/Terminal.vue";

export default defineComponent({
  components: {
    Paragraf,
    Heading,
    H2,
    List,
    Code,
    Terminal,
  },
  setup() {
    return { data };
  },
});
</script>
