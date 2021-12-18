<template>
  <header class="flex items-center justify-between my-5">

<!--   logo -->
      
        <nuxt-link to="/" aria-label="Tailwind CSS Blog">
          <div class="flex items-center justify-between">
            <!-- <div class="mr-3">
             <Logo />
              Ini logo
            </div> -->

            <div class="
            hidden 
             font-semibold sm:block
              text-transparent 
                bg-clip-text 
                bg-gradient-to-r 
                from-pink-500 
                to-rose-500
            ">
              Trian.app
            </div>

          </div>
        </nuxt-link>
   
    <!--      end logo-->
    <div class="flex items-center text-base leading-5">
<!--      nav-->
      <div class="hidden sm:block">
        <nuxt-link to="/" class="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
          Home
        </nuxt-link>
        <nuxt-link to="/blog" class="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
          Blog
        </nuxt-link>
        <nuxt-link to="/projects" class="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
          Projects
        </nuxt-link>
        <nuxt-link to="/tags" class="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
          Tags
        </nuxt-link>
      </div>
<!-- end nav -->
      <!--      theme-->
      <ThemeSwitch/>
      <!--      end theme-->
      <!--  mobile nav  -->
     <MobileNav/>
      <!--  end mobile nav -->
    </div>




  </header>
</template>

