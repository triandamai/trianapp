<template>
  <div >
    <h2
      class="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400"
    >
      Tags
    </h2>
    <div class="flex flex-wrap">
      <ItemTag
        v-for="(tag, index) in tags"
        :key="index"
        :tag="tag"
        :href="'/tags'"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: ["tags"],
};
</script>
