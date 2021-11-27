<template>
  <header class="flex items-center justify-between py-10">

<!--   logo -->
      <div>
        <nuxt-link to="/" aria-label="Tailwind CSS Blog">
          <div class="flex items-center justify-between">
            <!-- <div class="mr-3">
             <Logo />
              Ini logo
            </div> -->

            <div class="hidden h-6 text-2xl font-semibold sm:block text-black dark:text-white">
              Trian.app
            </div>

          </div>
        </nuxt-link>
      </div>
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

