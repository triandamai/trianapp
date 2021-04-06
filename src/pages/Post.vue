<template>
  <div class="px-6 md:px-16 dark:bg-gray-900">
    <!-- TITTLE -->
    <h1
      class="text-center text-wrap mt-4 mb-6 text-md md:text-5xl font-extrabold mx-6"
    >
      Accept Crypto Payments with coinbas eCommerce
    </h1>
    <!-- HEAD -->

    <div>
      <img
        class="w-full"
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
              <h1>By</h1>
              <h3>Trian Damai</h3>
            </div>
            <div class="text-sm">
              <div>Created Mar 29,2021</div>
              <span class="bg-gray-200 py-2 px-2 bg-opacity-10"
                >Last Updated Mar 29,2021</span
              >
            </div>
          </div>

          <div>
            <button class="px-3 py-2 bg-gray-400">code</button>
            <button class="px-3 py-2 bg-gray-400">slack</button>
          </div>
        </div>
      </div>
    </div>
    <!-- CONTENT -->
    <div v-for="(content, index) in data" :key="index" class="my-6 px-6">
      <Paragraf v-if="content.type == 'p'" :body="content.body" />
      <Heading v-else-if="content.type == 'h1'" :body="content.body" />
      <List v-else-if="content.type == 'ul'" :body="content.body" />
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
