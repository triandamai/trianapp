<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<template>
  <div
    class="flex flex-col items-center w-full p-10 mb-6 md:w-1/3 lg:w-1/3 md:mb-0"
  >
    <div class="font-mono bg-gray-100 pattern-dots-md dark:bg-gray-900">
      <div
        class="text-gray-900 transform translate-x-4 -translate-y-4 bg-white rounded dark:text-gray-100 hover:translate-x-6 hover:-translate-y-6 md:translate-x-5 md:-translate-y-5 lg:translate-x-5 lg:-translate-y-5"
      >
        <div
          class="w-full h-56 bg-gray-300 bg-center bg-cover rounded-sm shadow-md"
          style="
            background-image: url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80);
          "
        ></div>

        <div
          class="p-5 -mt-10 overflow-hidden text-gray-900 bg-white rounded-sm shadow-lg dark:bg-gray-800 dark:text-gray-100 w-70"
        >
          <div class="inline-flex header-content">
            <div
              class="flex-1 w-4 h-4 m-1 bg-purple-100 rounded-full dark:bg-opacity-10 category-badge m"
            >
              <div class="w-2 h-2 m-1 bg-purple-500 rounded-full"></div>
            </div>
            <!-- YELLOW -->
            <!-- <div
          class="flex-1 w-4 h-4 m-1 bg-yellow-100 rounded-full category-badge m"
        >
          <div class="w-2 h-2 m-1 bg-yellow-500 rounded-full"></div>
        </div> -->
            <!-- GREEN -->
            <!-- <div
          class="flex-1 w-4 h-4 m-1 bg-green-100 rounded-full category-badge m"
        >
          <div class="w-2 h-2 m-1 bg-green-500 rounded-full"></div>
        </div> -->
            <div class="flex-1 text-sm category-title">PHP</div>
          </div>
          <div class="font-medium title-post">Mon titre</div>

          <div class="text-base text-justify summary-post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis veritatis vel suscipit ex dolore possimus iure.
            <button
              @click="$router.push({ path: '/read/1' })"
              class="block p-2 mt-4 text-sm text-blue-500 bg-blue-100 rounded dark:bg-opacity-10"
            >
              <span class="">Baca Selengkapnya...</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



