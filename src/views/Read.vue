<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import DisplayParagraf from "@/components/viewer/DisplayParagraf.vue";
import DisplayBlockquote from "@/components/viewer/DisplayBlockquote.vue";
import DisplayHeading from "@/components/viewer/DisplayHeading.vue";
import { DocumentActionTypes } from "@/store/module/action-types";

export default defineComponent({
  components: { DisplayParagraf, DisplayBlockquote, DisplayHeading },
  setup() {
    const store = useStore();
    const route = useRoute();
    const data = ref();

    onBeforeMount(() => {
      store
        .dispatch(DocumentActionTypes.GET_TUTORIAL_BY_ID, route.params.id)
        .then(() => {
          data.value = store.getters.getTutorialById(route.params.id);
        });
    });
    return { data };
  },
});
</script>
<template>
  <!-- component -->
  <div class="bg-gray-100 dark:bg-gray-900">
    <div
      v-if="data"
      class="relative w-full px-8 pt-20 mx-auto mb-4 md:mb-0 md:px-36 lg:px-40"
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
          Cryptocurrency
        </a>
      </div>

      <img
        src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        class="object-cover w-full max-h-80"
      />
    </div>

    <div
      class="flex flex-col px-8 pt-20 mx-auto lg:flex-row lg:space-x-12 md:px-36 lg:px-40"
    >
      <div
        v-if="data"
        class="w-full px-4 mt-12 font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-50 md:text-lg lg:text-lg lg:px-0 lg:w-3/4"
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
        </slot>
      </div>
      <!-- //editor -->
      <div
        class="mx-2 mt-12 bg-gray-100 pattern-dots-md dark:text-gray-50 lg:w-1/4 dark:bg-gray-900"
      >
        <div
          class="w-full max-w-screen-sm m-auto transform translate-x-4 -translate-y-6 bg-gray-100 dark:bg-gray-800"
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
              class="flex items-center justify-center w-full px-2 py-1 text-green-800 bg-green-500 rounded dark:bg-opacity-10 bg-opacity-80 dark:text-green-500"
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

<style scoped>
.pattern-checks-sm {
  background-image: repeating-linear-gradient(
      45deg,
      currentColor 25%,
      transparent 25%,
      transparent 75%,
      currentColor 75%,
      currentColor
    ),
    repeating-linear-gradient(
      45deg,
      currentColor 25%,
      transparent 25%,
      transparent 75%,
      currentColor 75%,
      currentColor
    );
  background-position: 0 0, 10px 10px;
  background-size: calc(2 * 10px) calc(2 * 10px);
}
.pattern-checks-md {
  background-image: repeating-linear-gradient(
      45deg,
      currentColor 25%,
      transparent 25%,
      transparent 75%,
      currentColor 75%,
      currentColor
    ),
    repeating-linear-gradient(
      45deg,
      currentColor 25%,
      transparent 25%,
      transparent 75%,
      currentColor 75%,
      currentColor
    );
  background-position: 0 0, 25px 25px;
  background-size: calc(2 * 25px) calc(2 * 25px);
}
.pattern-checks-lg {
  background-image: repeating-linear-gradient(
      45deg,
      currentColor 25%,
      transparent 25%,
      transparent 75%,
      currentColor 75%,
      currentColor
    ),
    repeating-linear-gradient(
      45deg,
      currentColor 25%,
      transparent 25%,
      transparent 75%,
      currentColor 75%,
      currentColor
    );
  background-position: 0 0, 50px 50px;
  background-size: calc(2 * 50px) calc(2 * 50px);
}
.pattern-checks-xl {
  background-image: repeating-linear-gradient(
      45deg,
      currentColor 25%,
      transparent 25%,
      transparent 75%,
      currentColor 75%,
      currentColor
    ),
    repeating-linear-gradient(
      45deg,
      currentColor 25%,
      transparent 25%,
      transparent 75%,
      currentColor 75%,
      currentColor
    );
  background-position: 0 0, 100px 100px;
  background-size: calc(2 * 100px) calc(2 * 100px);
}
.pattern-grid-sm {
  background-image: linear-gradient(currentColor 1px, transparent 1px),
    linear-gradient(to right, currentColor 1px, transparent 1px);
  background-size: 10px 10px;
}
.pattern-grid-md {
  background-image: linear-gradient(currentColor 1px, transparent 1px),
    linear-gradient(to right, currentColor 1px, transparent 1px);
  background-size: 25px 25px;
}
.pattern-grid-lg {
  background-image: linear-gradient(currentColor 1px, transparent 1px),
    linear-gradient(to right, currentColor 1px, transparent 1px);
  background-size: 50px 50px;
}
.pattern-grid-xl {
  background-image: linear-gradient(currentColor 1px, transparent 1px),
    linear-gradient(to right, currentColor 1px, transparent 1px);
  background-size: 100px 100px;
}

.pattern-dots-sm {
  background-image: radial-gradient(currentColor 0.5px, transparent 0.5px);
  background-size: calc(10 * 0.5px) calc(10 * 0.5px);
}
.pattern-dots-md {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: calc(10 * 1px) calc(10 * 1px);
}
.pattern-dots-lg {
  background-image: radial-gradient(currentColor 1.5px, transparent 1.5px);
  background-size: calc(10 * 1.5px) calc(10 * 1.5px);
}
.pattern-dots-xl {
  background-image: radial-gradient(currentColor 2px, transparent 2px);
  background-size: calc(10 * 2px) calc(10 * 2px);
}

.pattern-cross-dots-sm {
  background-image: radial-gradient(currentColor 0.5px, transparent 0.5px),
    radial-gradient(currentColor 0.5px, transparent 0.5px);
  background-size: calc(20 * 0.5px) calc(20 * 0.5px);
  background-position: 0 0, calc(10 * 0.5px) calc(10 * 0.5px);
}
.pattern-cross-dots-md {
  background-image: radial-gradient(currentColor 1px, transparent 1px),
    radial-gradient(currentColor 1px, transparent 1px);
  background-size: calc(20 * 1px) calc(20 * 1px);
  background-position: 0 0, calc(10 * 1px) calc(10 * 1px);
}
.pattern-cross-dots-lg {
  background-image: radial-gradient(currentColor 1.5px, transparent 1.5px),
    radial-gradient(currentColor 1.5px, transparent 1.5px);
  background-size: calc(20 * 1.5px) calc(20 * 1.5px);
  background-position: 0 0, calc(10 * 1.5px) calc(10 * 1.5px);
}
.pattern-cross-dots-xl {
  background-image: radial-gradient(currentColor 2px, transparent 2px),
    radial-gradient(currentColor 2px, transparent 2px);
  background-size: calc(20 * 2px) calc(20 * 2px);
  background-position: 0 0, calc(10 * 2px) calc(10 * 2px);
}
.pattern-vertical-lines-sm {
  background-image: repeating-linear-gradient(
    to right,
    currentColor,
    currentColor 1px,
    transparent 1px,
    transparent
  );
  background-size: 10px 10px;
}
.pattern-horizontal-lines-sm {
  background-image: repeating-linear-gradient(
    0deg,
    currentColor,
    currentColor 1px,
    transparent 1px,
    transparent
  );
  background-size: 10px 10px;
}
.pattern-diagonal-lines-sm {
  background-image: repeating-linear-gradient(
    45deg,
    currentColor 0,
    currentColor 1px,
    transparent 0,
    transparent 50%
  );
  background-size: 10px 10px;
}
.pattern-vertical-lines-md {
  background-image: repeating-linear-gradient(
    to right,
    currentColor,
    currentColor 1px,
    transparent 1px,
    transparent
  );
  background-size: 25px 25px;
}
.pattern-horizontal-lines-md {
  background-image: repeating-linear-gradient(
    0deg,
    currentColor,
    currentColor 1px,
    transparent 1px,
    transparent
  );
  background-size: 25px 25px;
}
.pattern-diagonal-lines-md {
  background-image: repeating-linear-gradient(
    45deg,
    currentColor 0,
    currentColor 1px,
    transparent 0,
    transparent 50%
  );
  background-size: 25px 25px;
}
.pattern-vertical-lines-lg {
  background-image: repeating-linear-gradient(
    to right,
    currentColor,
    currentColor 1px,
    transparent 1px,
    transparent
  );
  background-size: 50px 50px;
}
.pattern-horizontal-lines-lg {
  background-image: repeating-linear-gradient(
    0deg,
    currentColor,
    currentColor 1px,
    transparent 1px,
    transparent
  );
  background-size: 50px 50px;
}
.pattern-diagonal-lines-lg {
  background-image: repeating-linear-gradient(
    45deg,
    currentColor 0,
    currentColor 1px,
    transparent 0,
    transparent 50%
  );
  background-size: 50px 50px;
}
.pattern-vertical-lines-xl {
  background-image: repeating-linear-gradient(
    to right,
    currentColor,
    currentColor 1px,
    transparent 1px,
    transparent
  );
  background-size: 100px 100px;
}
.pattern-horizontal-lines-xl {
  background-image: repeating-linear-gradient(
    0deg,
    currentColor,
    currentColor 1px,
    transparent 1px,
    transparent
  );
  background-size: 100px 100px;
}
.pattern-diagonal-lines-xl {
  background-image: repeating-linear-gradient(
    45deg,
    currentColor 0,
    currentColor 1px,
    transparent 0,
    transparent 50%
  );
  background-size: 100px 100px;
}
.pattern-vertical-stripes-sm {
  background-image: linear-gradient(90deg, transparent 50%, currentColor 50%);
  background-size: 10px 10px;
}
.pattern-horizontal-stripes-sm {
  background-image: linear-gradient(0deg, transparent 50%, currentColor 50%);
  background-size: 10px 10px;
}
.pattern-diagonal-stripes-sm {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    currentColor 10px,
    currentColor calc(2 * 10px)
  );
}
.pattern-vertical-stripes-md {
  background-image: linear-gradient(90deg, transparent 50%, currentColor 50%);
  background-size: 25px 25px;
}
.pattern-horizontal-stripes-md {
  background-image: linear-gradient(0deg, transparent 50%, currentColor 50%);
  background-size: 25px 25px;
}
.pattern-diagonal-stripes-md {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 25px,
    currentColor 25px,
    currentColor calc(2 * 25px)
  );
}
.pattern-vertical-stripes-lg {
  background-image: linear-gradient(90deg, transparent 50%, currentColor 50%);
  background-size: 50px 50px;
}
.pattern-horizontal-stripes-lg {
  background-image: linear-gradient(0deg, transparent 50%, currentColor 50%);
  background-size: 50px 50px;
}
.pattern-diagonal-stripes-lg {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 50px,
    currentColor 50px,
    currentColor calc(2 * 50px)
  );
}
.pattern-vertical-stripes-xl {
  background-image: linear-gradient(90deg, transparent 50%, currentColor 50%);
  background-size: 100px 100px;
}
.pattern-horizontal-stripes-xl {
  background-image: linear-gradient(0deg, transparent 50%, currentColor 50%);
  background-size: 100px 100px;
}
.pattern-diagonal-stripes-xl {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 100px,
    currentColor 100px,
    currentColor calc(2 * 100px)
  );
}
.pattern-zigzag-sm {
  background: linear-gradient(135deg, currentColor 25%, transparent 25%) -10px 0,
    linear-gradient(225deg, currentColor 25%, transparent 25%) -10px 0,
    linear-gradient(315deg, currentColor 25%, transparent 25%),
    linear-gradient(45deg, currentColor 25%, transparent 25%);
  background-size: calc(2 * 10px) calc(2 * 10px);
}
.pattern-zigzag-md {
  background: linear-gradient(135deg, currentColor 25%, transparent 25%) -25px 0,
    linear-gradient(225deg, currentColor 25%, transparent 25%) -25px 0,
    linear-gradient(315deg, currentColor 25%, transparent 25%),
    linear-gradient(45deg, currentColor 25%, transparent 25%);
  background-size: calc(2 * 25px) calc(2 * 25px);
}
.pattern-zigzag-lg {
  background: linear-gradient(135deg, currentColor 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, currentColor 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, currentColor 25%, transparent 25%),
    linear-gradient(45deg, currentColor 25%, transparent 25%);
  background-size: calc(2 * 50px) calc(2 * 50px);
}
.pattern-zigzag-xl {
  background: linear-gradient(135deg, currentColor 25%, transparent 25%) -100px 0,
    linear-gradient(225deg, currentColor 25%, transparent 25%) -100px 0,
    linear-gradient(315deg, currentColor 25%, transparent 25%),
    linear-gradient(45deg, currentColor 25%, transparent 25%);
  background-size: calc(2 * 100px) calc(2 * 100px);
}
.pattern-triangles-sm {
  background-image: linear-gradient(45deg, currentColor 50%, transparent 50%);
  background-size: 10px 10px;
}
.pattern-triangles-md {
  background-image: linear-gradient(45deg, currentColor 50%, transparent 50%);
  background-size: 25px 25px;
}
.pattern-triangles-lg {
  background-image: linear-gradient(45deg, currentColor 50%, transparent 50%);
  background-size: 50px 50px;
}
.pattern-triangles-xl {
  background-image: linear-gradient(45deg, currentColor 50%, transparent 50%);
  background-size: 100px 100px;
}
.text-pattern {
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.pattern-w-sm {
  width: 10px;
}
.pattern-h-sm {
  height: 10px;
}
.pattern-w-md {
  width: 25px;
}
.pattern-h-md {
  height: 25px;
}
.pattern-w-lg {
  width: 50px;
}
.pattern-h-lg {
  height: 50px;
}
.pattern-w-xl {
  width: 100px;
}
.pattern-h-xl {
  height: 100px;
}
/*# sourceMappingURL=pattern.min.css.map */
</style>
