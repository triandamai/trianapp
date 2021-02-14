<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<template>
  <div class="flex flex-wrap">
    <div class="hidden w-full md:w-1/4 md:block lg:block xl:block">
      <div
        class="px-4 py-4 mt-20 ml-32 mr-10 bg-white rounded-md dark:bg-gray-800"
      >
        <button
          class="flex text-sm focus:outline-none"
          id="user-menu"
          aria-haspopup="true"
        >
          <span class="font-mono sr-only">Open user menu</span>
          <img
            class="w-1/2 rounded-md"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </button>
        <h2 class="mt-6 mb-6 text-2xl text-gray-900 dark:text-gray-50">
          Trian Damai
        </h2>
        <div class="border-t-2 border-gray-200 dark:border-gray-600"></div>
        <div class="flex flex-wrap">
          <router-link
            to="/dashboard/artikel"
            class="w-full min-w-full"
            v-slot="{ isActive }"
          >
            <a
              href="javascript.void(0);"
              class="inline-flex items-center py-2 font-mono font-normal rounded bg-gray-light dark:hover:text-gray-100"
              :class="
                isActive ? ' text-gray-700 dark:text-gray-100' : 'text-gray-400'
              "
            >
              <svg
                class="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clip-rule="evenodd"
                />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              <span>Artikel</span>
            </a>
          </router-link>
          <router-link
            to="/dashboard/tutorial"
            class="w-full"
            v-slot="{ isActive }"
          >
            <a
              href="javascript.void(0);"
              class="inline-flex items-center font-mono font-normal placeholder-blue-400 rounded bg-gray-light hover:text-gray-800 dark:hover:text-gray-100"
              :class="
                isActive ? 'text-gray-700 dark:text-gray-100' : 'text-gray-400'
              "
            >
              <svg
                class="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clip-rule="evenodd"
                />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              <span>Tutorial</span>
            </a>
          </router-link>
        </div>
        <button
          class="flex items-center justify-center w-full px-4 py-2 my-4 text-yellow-500 bg-yellow-300 rounded-md text-md dark:text-yellow-500 dark:bg-opacity-10 bg-opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Artikel
        </button>
      </div>
    </div>
    <div
      class="w-full h-full px-6 pt-20 mx-2 md:w-1/2 md:mx-0 lg:mx-0 xl:mx-0 md:px-2 lg:px-2"
    >
      <div class="flex justify-between w-full md:hidden lg:hidden xl:hidden">
        <span
          class="flex items-center justify-center text-justify text-gray-900 dark:text-gray-50 justify-items-center"
          >List Post Artikel</span
        >
        <button
          class="px-6 py-1 my-4 text-purple-500 bg-purple-300 rounded-sm justify-items-center text-md dark:text-purple-500 dark:bg-opacity-10 bg-opacity-70"
        >
          <span class="flex items-center justify-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-4 h-4 mr-4"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              /></svg
            >Artikel</span
          >
        </button>
      </div>
      <div
        class="items-center px-4 py-8 mt-1 bg-white rounded-sm md:rounded-md lg:rounded-md dark:bg-gray-800"
      >
        <section class="flex flex-col w-full px-8 pt-8 pb-4 overflow-auto">
          <ul id="gallery" class="flex flex-wrap flex-1 -m-1">
            <li
              id="empty"
              class="flex flex-col items-center justify-center w-full h-full text-center"
            >
              <img
                class="w-32 mx-auto animate-bounce"
                src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                alt="no data"
              />
              <span class="text-2xl text-gray-500 dark:text-gray-200"
                >Belum ada postingan</span
              >
            </li>
          </ul>
        </section>
      </div>
    </div>
    <div class="hidden w-full md:w-1/4 md:block lg:block xl:block">
      <div
        class="px-4 py-4 mt-20 ml-10 mr-32 bg-white rounded-md dark:bg-gray-800"
      >
        <h2 class="text-lg text-gray-900 dark:text-gray-50">Informasi</h2>
        <span class="flex justify-between mt-2"
          ><h3 class="text-gray-900 text-md dark:text-gray-50">Artikel</h3>
          <h3 class="text-gray-900 text-md dark:text-gray-50">2</h3></span
        >
        <span class="flex justify-between mt-2"
          ><h3 class="text-gray-900 text-md dark:text-gray-50">Tutorial</h3>
          <h3 class="text-gray-900 text-md dark:text-gray-50">2</h3></span
        >
      </div>
      <div
        class="px-4 py-4 mt-6 ml-10 mr-32 bg-white rounded-md dark:bg-gray-800"
      >
        <h2 class="text-lg text-gray-900 dark:text-gray-50">Lihat Home Page</h2>
      </div>
    </div>
  </div>
</template>