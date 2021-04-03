<template>
  <div class="dark:bg-gray-900 dark:text-gray-400">
    <header-content>
      <p class="tagline w-10/12 md:w-2/3 mt-8 text-center dark:text-gray-400">
        In between my busy life. I spend time writing.
      </p>
    </header-content>
    <filter-content />
    <div class="text-start" id="content">
      <div
        class="px-6 w-full flex-wrap grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 pt-6 gap-14"
      >
        <card-post
          v-for="(item, index) in postState"
          :key="index"
          :post="item"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { usePost } from "../data/postStore";

import CardPost from "../components/CardPost.vue";
import FilterContent from "../components/FilterContent.vue";
import HeaderContent from "../components/HeaderContent.vue";

export default defineComponent({
  components: {
    CardPost,
    FilterContent,
    HeaderContent,
  },
  setup: () => {
    return {
      ...usePost(),
    };
  },
});
</script>
<style scoped>
#content {
  display: flex;
  align-items: center;
  justify-content: center;
  @apply text-start;
}
</style>
