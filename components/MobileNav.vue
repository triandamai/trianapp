<template>
  <div class="sm:hidden">

    <button
      type="button"
      class="w-8 h-8 ml-1 mr-1 rounded"
      aria-label="Toggle Menu"
      @click="onToggleNav"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-gray-900 dark:text-gray-100"
      >

        <path
          v-if="navShow"
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />

        <path
          v-else
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
   
    <div
      class="
      backdrop-blur-xl
      dark:backdrop-blur-xl
      fixed w-full h-full top-24 right-0 z-10 transform ease-in-out duration-300"
      :class="navShow ? 'translate-x-0' : 'translate-x-full'"

    >
      <button
        type="button"
        aria-label="toggle modal"
        class="fixed w-full h-full cursor-auto focus:outline-none"
        @click="onToggleNav"
      ></button>
      <nav class="fixed h-full mt-8">
        
        <div class="px-12 py-4" v-for="(menu,index) in menus" :key="index">
          <nuxt-link
            :to="menu.url"
            class="text-2xl font-bold tracking-widest 
                text-transparent 
                bg-clip-text 
                bg-gradient-to-r 
                dark:from-white 
                dark:to-white
                from-gray-800
                to-gray-800
                hover:bg-clip-text 
                hover:bg-gradient-to-r 
                hover:from-pink-500 
                hover:to-rose-500
                dark:hover:bg-clip-text 
                dark:hover:bg-gradient-to-r 
                dark:hover:from-pink-500 
                dark:hover:to-rose-500
                "

          >
            {{menu.title}}
          </nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data:()=>({
      navShow:false,
      menus:[
        {
          title:"Home",
          url:"/"
        },
         {
          title:"Blog",
          url:"/blog"
        },
        {
          title:"Projects",
          url:"/projects"
        },
        {
          title:"Tags",
          url:"/tags"
        }
      ]
  }),
  methods:{
    onToggleNav(){
      if (this.navShow) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      this.navShow = !this.navShow
    }
  }
}
</script>