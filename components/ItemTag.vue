<template>
  <nuxt-link to="/tags" class="pb-1 pt-1">
    <a class="
    ml-1
    mr-1
    pl-3
    pr-3
    pt-1
    pb-1
    rounded-sm
    text-sm
    font-medium
    uppercase"
       :class="color"
    >
      {{tag}}
    </a>
  </nuxt-link>
</template>
<script>
function getRandomColor(){
  let colors = [
      "gradient-red",
    "gradient-blue",
    "gradient-yellow",
    "gradient-green",
      "gradient-gray",
      "gradient-purple"
  ]
  return colors[Math.floor(Math.random()*colors.length)];
}
export default {
  props:[
    'tag'
  ],
  data:()=>({
    color:getRandomColor()
  })
}
</script>
<style scoped>
.gradient-red{
  @apply bg-gradient-to-r from-red-500  to-pink-600 text-white;
}
.gradient-blue{
  @apply bg-gradient-to-r from-blue-400 to-blue-600 text-white;
}
.gradient-yellow{
  @apply bg-gradient-to-r from-yellow-400 to-yellow-600 text-white;
}

.gradient-green{
  @apply bg-gradient-to-r from-green-400 to-green-600 text-white;
}

.gradient-gray{
  @apply bg-gradient-to-r from-gray-400 to-gray-600 text-white;
}
.gradient-purple{
  @apply bg-gradient-to-r from-purple-400 to-purple-600 text-white;
}
</style>