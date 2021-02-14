<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import DisplayParagraf from "@/components/viewer/DisplayParagraf.vue";
import DisplayBlockquote from "@/components/viewer/DisplayBlockquote.vue";
import DisplayHeading from "@/components/viewer/DisplayHeading.vue";
import { DocumentActionTypes } from "@/store/module/action-types";
import DisplayCodePreview from "@/components/viewer/DisplayCodePreview.vue";

export default defineComponent({
  components: {
    DisplayParagraf,
    DisplayBlockquote,
    DisplayHeading,
    DisplayCodePreview,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const data = ref();

    const getStringDate = (date: any) => {
      const res = new Date(date * 1000);
      return `${res
        .getDate()
        .toString()}-${res
        .getMonth()
        .toString()}-${res
        .getUTCFullYear()
        .toString()} ${res
        .getHours()
        .toString()}:${res.getMinutes().toString()}`;
    };

    onBeforeMount(() => {
      store
        .dispatch(DocumentActionTypes.GET_TUTORIAL_BY_ID, route.params.id)
        .then(() => {
          data.value = store.getters.getTutorialById(route.params.id);
        });
    });
    return { data, getStringDate };
  },
});
</script>
<template>
  <!-- component -->
  <div class="bg-gray-100 dark:bg-gray-900">
    <div
      v-if="data"
      class="relative w-full px-8 pt-20 mx-auto mb-4 md:mb-0 md:px-36 lg:px-60 xl:px-80"
    >
      <div class="px-4 lg:px-0">
        <h2
          class="font-semibold leading-tight text-gray-800 md:text-4xl lg:text-4xl dark:text-gray-50"
        >
          {{ `${data.title ? data.title : "undefined"} ` }}
        </h2>
        <a
          href="#"
          class="inline-flex items-center justify-center py-2 mb-2 text-green-700"
        >
          Published by<code> triandamai</code>
          <code class="ml-2 text-gray-200">{{
            getStringDate(data.createdAt)
          }}</code>
        </a>
      </div>

      <img
        src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        class="object-cover w-full max-h-80"
      />
    </div>

    <div
      class="flex flex-col px-8 pt-6 mx-auto lg:flex-row lg:space-x-12 md:px-36 lg:px-60 xl:px-80"
    >
      <div
        v-if="data"
        class="w-full px-4 font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-50 md:text-lg lg:text-lg lg:px-0 lg:w-3/5"
      >
        <slot v-for="(item, index) in data.content" :key="index">
          <display-paragraf v-if="item.type === 'text'" :body="item.body" />
          <display-blockquote
            v-else-if="item.type === 'blockquote'"
            :body="item.body"
          />
          <display-heading
            v-else-if="item.type === 'heading'"
            :body="item.body"
          />
          <display-code-preview
            v-else-if="item.type === 'code'"
            class="my-6"
            :body="`$: ${item.body}`"
          />
        </slot>
      </div>
      <!-- //editor -->
      <div
        class="h-full max-w-screen-sm mx-2 mt-12 bg-gray-100 pattern-dots-md dark:text-gray-50 lg:w-1/3 dark:bg-gray-900"
      >
        <div
          class="w-full max-w-screen-sm m-auto transform translate-x-4 -translate-y-6 shadow-sm bg-gray-50 dark:bg-gray-800"
        >
          <div class="p-4">
            <div class="flex py-2">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                class="object-cover w-10 h-10 mr-2 rounded-full"
              />
              <div>
                <p
                  class="text-sm font-semibold text-gray-700 dark:text-gray-50"
                >
                  Trian damai
                </p>
                <p
                  class="text-xs font-semibold text-gray-600 dark:text-gray-50"
                >
                  Editor
                </p>
              </div>
            </div>
            <p class="py-3 text-gray-700 dark:text-gray-50">
              Mike writes about technology Yourself required no at thoughts
              delicate landlord it be. Branched dashwood do is whatever it.
            </p>
            <button
              class="flex items-center justify-center w-full px-2 py-1 text-green-800 bg-green-500 dark:bg-opacity-10 bg-opacity-80 dark:text-green-500"
            >
              Follow
              <i class="ml-2 bx bx-user-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- main ends here -->

    <!-- footer -->
    <footer
      class="px-4 pt-12 pb-32 mx-8 mt-12 border-t border-gray-800 dark:border-gray-100 lg:px-0"
    >
      <div class="flex flex-wrap px-12">
        <div class="w-full lg:w-2/6">
          <p
            class="hidden p-0 mt-4 text-gray-900 lg:block lg:pr-12 dark:text-gray-50"
          >
            Boisterous he on understood attachment as entreaties ye devonshire.
            In mile an form snug were been sell. Extremely ham any his departure
            for contained curiosity defective. Way now instrument had eat
            diminution melancholy expression sentiments stimulated.
          </p>
        </div>

        <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/3">
          <h6 class="mb-4 font-semibold text-gray-900 dark:text-gray-50">
            Company
          </h6>
          <ul>
            <li>
              <a href="" class="block py-2 text-gray-900 dark:text-gray-50"
                >Team</a
              >
            </li>
            <li>
              <a href="" class="block py-2 text-gray-900 dark:text-gray-50"
                >About us</a
              >
            </li>
            <li>
              <a href="" class="block py-2 text-gray-900 dark:text-gray-50"
                >Press</a
              >
            </li>
          </ul>
        </div>

        <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/3">
          <h6 class="mb-4 font-semibold text-gray-900 dark:text-gray-500">
            Company
          </h6>
          <ul>
            <li>
              <a href="" class="block py-2 text-gray-900 dark:text-gray-50"
                >Team</a
              >
            </li>
            <li>
              <a href="" class="block py-2 text-gray-900 dark:text-gray-50"
                >About us</a
              >
            </li>
            <li>
              <a href="" class="block py-2 text-gray-900 dark:text-gray-50"
                >Press</a
              >
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
