<template>
  <nuxt-link to="/tags">
    <a class="mr-2 text-sm text-green-500 font-medium uppercase text-primary-500 hover:text-green-600 dark:hover:text-green-400">
      {{tag}}
    </a>
  </nuxt-link>
</template>
<script>
export default {
  props:[
    'tag'
  ]
}
</script>