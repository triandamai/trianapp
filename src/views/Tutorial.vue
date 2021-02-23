<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({});
</script>
<template>
  <section class="text-gray-900 dark:text-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <header-section :title="'Tutorial'">
        <p
          class="mx-auto font-mono text-base leading-relaxed xl:w-2/4 lg:w-3/4"
        >
          Informasi seputar teknologi. membantu para developer mendapatkan
          informasi dunia teknologi.
        </p>
      </header-section>
      <list-item-section>
        <!-- <card-tutorial
          v-for="(item, index) in store.state.tutorial"
          :data="item"
          :key="index"
        /> -->
      </list-item-section>
    </div>
  </section>
</template>



