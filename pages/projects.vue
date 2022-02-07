<template>

    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
        <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Trian damai recent works
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
  head () {
    return {
      title: 'Projects - Trian.app',
      meta: [
        { hid: 'description', name: 'description', content: 'Projects Trian Damai' }
      ]
    }
  },
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
      },
      {
        name:"Cashier Desktop App",
        description:"UI Desktop POS build with compose multiplatform",
        url:"https://github.com/trianapp/CashierDesktopApp",
        image:"https://raw.githubusercontent.com/trianapp/CashierDesktopApp/master/preview/preview.png"
      },
      {
        name:"Bank Falah Syariah",
        description:"Bank App SMKN 1 Build with vue js ",
        url:"https://bfs.bakaranproject.com/",
        image:"https://user-images.githubusercontent.com/41132846/145071116-3fdb1d9a-f101-442a-be16-e121f5824de6.png"
      },
      {
        name:"Wordle Game",
        description:"Game tebak kata",
        url:"https://wordle.trian.app/",
        image:"/wordle-game.webp"
      },
      {
        name:"Tudu-APp",
        description:"Aplikasi Task managemtn",
        url:"https://tudu.trian.app/",
        image:"/wordle-game.webp"
      }
    ]
  })
}
</script>