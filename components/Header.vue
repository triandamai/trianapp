<template>
  <header class="flex items-center justify-between my-5">
    <!--   logo -->

    <nuxt-link to="/" aria-label="Tailwind CSS Blog">
      <div class="flex items-center justify-between">
        <!-- <div class="mr-3">
             <Logo />
              Ini logo
            </div> -->

        <div
          class="
            hidden
            font-semibold
            sm:block
            text-transparent
            bg-clip-text bg-gradient-to-r
            from-pink-500
            to-rose-500
          "
        >
          Trian.app
        </div>
      </div>
    </nuxt-link>

    <!--      end logo-->
    <div class="flex items-center text-base leading-5">
      <!--      nav-->
      <div class="hidden sm:block">
        <nuxt-link
          to="/"
          class="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
        >
          <span class="inline-flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="mr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 22.8787C4.34315 22.8787 3 21.5355 3 19.8787V9.87866C3 9.84477 3.00169 9.81126 3.00498 9.77823H3C3 9.20227 3.2288 8.64989 3.63607 8.24262L9.87868 2.00002C11.0502 0.828445 12.9497 0.828445 14.1213 2.00002L20.3639 8.24264C20.7712 8.6499 21 9.20227 21 9.77823H20.995C20.9983 9.81126 21 9.84477 21 9.87866V19.8787C21 21.5355 19.6569 22.8787 18 22.8787H6ZM12.7071 3.41423L19 9.70713V19.8787C19 20.4309 18.5523 20.8787 18 20.8787H15V15.8787C15 14.2218 13.6569 12.8787 12 12.8787C10.3431 12.8787 9 14.2218 9 15.8787V20.8787H6C5.44772 20.8787 5 20.4309 5 19.8787V9.7072L11.2929 3.41423C11.6834 3.02371 12.3166 3.02371 12.7071 3.41423Z"
                fill="currentColor"
              />
            </svg>
            Home
          </span>
        </nuxt-link>
        <nuxt-link
          to="/blog"
          class="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
        >
          <span class="inline-flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="mr-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 14.5V12.5H15V14.5H9Z" fill="currentColor" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 1.5C2.89543 1.5 2 2.39543 2 3.5V4.5C2 4.55666 2.00236 4.61278 2.00698 4.66825C0.838141 5.07811 0 6.19118 0 7.5V19.5C0 21.1569 1.34315 22.5 3 22.5H21C22.6569 22.5 24 21.1569 24 19.5V7.5C24 5.84315 22.6569 4.5 21 4.5H11.874C11.4299 2.77477 9.86384 1.5 8 1.5H4ZM9.73244 4.5C9.38663 3.9022 8.74028 3.5 8 3.5H4V4.5H9.73244ZM3 6.5C2.44772 6.5 2 6.94772 2 7.5V19.5C2 20.0523 2.44772 20.5 3 20.5H21C21.5523 20.5 22 20.0523 22 19.5V7.5C22 6.94772 21.5523 6.5 21 6.5H3Z"
                fill="currentColor"
              />
            </svg>
            Blog
          </span>
        </nuxt-link>
        <nuxt-link
          to="/projects"
          class="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
        >
          <span class="inline-flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="mr-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z"
                fill="currentColor"
              />
              <path
                d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z"
                fill="currentColor"
              />
              <path
                d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z"
                fill="currentColor"
              />
            </svg>
            Projects
          </span>
        </nuxt-link>
        <nuxt-link
          to="/tags"
          class="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
        >
          <span class="inline-flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="mr-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20V8H16V4H14V8H10V4H8ZM14 14V10H10V14H14Z"
                fill="currentColor"
              />
            </svg>
            Tags
          </span>
        </nuxt-link>
      </div>
      <!-- end nav -->
      <!--      theme-->
      <ThemeSwitch />
      <!--      end theme-->
      <!--  mobile nav  -->
      <MobileNav />
      <!--  end mobile nav -->
    </div>
  </header>
</template>
<style scoped>
.nuxt-link-exact-active {
  font-weight: bold;
  @apply text-rose-500;

}
</style>
