<template>

    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
        <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Great stuff i've been made
        </p>
      </div>
      <div class="container py-12">
        <div class="flex flex-wrap -m-4">
         
          <ItemProject v-for="(item,index) in projects" :project="item" :key="index"/>
         
        </div>
      </div>
    </div>

</template>
<script>
export default {
  data:()=>({
    projects:[
      {
        name:"Cexup",
        description:"Telemedhicine app provide integrated IoT",
        url:"https://cexup.com/",
        image:"/project-cexup.webp"
      },
      {
        name:"Panda",
        description:"Panda memberikan solusi pelayanan masyarakat dengan cara akurat, cepat dan cerdas.",
        url:"https://play.google.com/store/apps/details?id=com.panda.puskomedia",
        image:"/project-panda.webp"
      },
      {
        name:"Chameleon Cloth",
        description:"Store you can buy a fancy suit",
        url:"https://www.chameleoncloth.co.id/user/home",
        image:"/project-chameleon.webp"
      },
      {
        name:"Kopra.id",
        description:"Store you can buy a fancy suit",
        url:"https://www.chameleoncloth.co.id/user/home",
        image:"/project-kopra.webp"
      }
    ]
  })
}
</script>