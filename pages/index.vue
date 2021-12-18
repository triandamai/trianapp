<template>
  <div
    class="
      divide-y divide-gray-200
      dark:divide-gray-700
    "
  >
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="
          text-3xl
          font-extrabold
          leading-9
          tracking-tight
          text-gray-900
          dark:text-gray-100
          sm:text-4xl sm:leading-10
          md:text-6xl md:leading-14
        "
      >
        About
      </h1>
    </div>
    <div class="container py-12">
      <div class="flex flex-wrap -m-4">
        <div
          class="
            items-start
            m-16
            space-y-2
            xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0
          "
        >
          <div class="flex flex-col items-center pt-8 space-x-2">
            <img
              alt=""
              aria-hidden="true"
              src="https://avatars.githubusercontent.com/u/41132846?v=4"
              class="rounded-full md:w-20 w-20 lg:w-26"
            />
            <h3
              class="
                pt-4
                pb-2
                text-2xl text-gray-900
                dark:text-gray-100
                font-bold
                leading-8
                tracking-tight
              "
            >
              Trian Damai
            </h3>
            <div class="text-gray-500 dark:text-gray-400">
              Software Developer
            </div>
            <div class="text-gray-500 dark:text-gray-400">Cexup</div>
            <SocialIcon/>
          </div>
          <div
            class="
              pt-8
              pb-8
              prose
              dark:prose-dark
              text-gray-900
              dark:text-gray-100
              max-w-none
              xl:col-span-2
            "
          >
            <p>
              Trian Damai is a Software Developer spent few years as Mobile Developer and Web Developer. 
            </p>
            <p class="pt-3">
              Trian currently work fulltime in <a class="text-sky-300" href="https://cexup.com" target="blank">PT.Tele Cexup Indonesa</a> and Freelance at <a class="text-sky-300" href="https://bakaranproject.com" target="blank">Bakaranproject.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
