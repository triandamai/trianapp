
<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref } from "vue";
import { menuDashboard } from "@/store/model-types";
import { useTheme } from "@/store/ThemeRepository";
import { useAuth } from "@/store/AuthRepositoy";

export default defineComponent({
  name: "App",
  setup() {
    const sidebarOpen = ref(false);
    const dropdownOpen = reactive({ open: false });
    const { getAuthUser } = useAuth();
    const menus = menuDashboard;
    onBeforeMount(() => {
      getAuthUser();
    });

    return {
      sidebarOpen,
      dropdownOpen,
      menus,
      ...useTheme(),
      ...useAuth(),
    };
  },
});
</script>
<template>
  <section>
    <div :class="{ dark: theme.theme }">
      <div class="flex h-screen bg-white dark:bg-gray-800 font-roboto">
        <div
          :class="sidebarOpen ? 'block' : 'hidden'"
          @click="sidebarOpen = false"
          class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
        ></div>

        <div
          :class="
            sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
          "
          class="fixed inset-y-0 left-0 z-30 overflow-y-auto transition duration-300 transform bg-gray-100 w-60 dark:bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
        >
          <div class="flex items-center justify-center mt-8">
            <div class="flex items-center">
              <span class="text-2xl font-semibold text-gray-800 dark:text-white"
                >Dashboard</span
              >
            </div>
          </div>

          <nav class="flex flex-col px-4 mt-10 text-center">
            <router-link
              class="py-2 text-sm text-gray-700 rounded dark:text-gray-100 dark:bg-gray-800"
              v-for="(menu, index) in menus"
              :to="menu.to"
              :key="index"
              v-slot="{ isActive }"
              :class="isActive ? 'bg-white' : 'bg-gray-100'"
              >{{ menu.name }}</router-link
            >
          </nav>
        </div>

        <div class="flex flex-col flex-1 overflow-hidden">
          <header class="flex items-center justify-between p-6">
            <div class="flex items-center space-x-4 lg:space-x-0">
              <button
                @click="sidebarOpen = true"
                class="text-gray-500 dark:text-gray-300 focus:outline-none lg:hidden"
              >
                <svg
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <div>
                <h1 class="text-2xl font-medium text-gray-800 dark:text-white">
                  Overview
                </h1>
              </div>
              <div>
                <router-link
                  class="px-2 py-1 mx-3 text-yellow-600 bg-yellow-200 rounded-sm"
                  to="/dashboard/post"
                  >New</router-link
                >
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <button
                @click="changeTheme(!theme.theme)"
                class="flex text-gray-600 dark:text-gray-300 focus:outline-none"
                aria-label="Color Mode"
              >
                <svg
                  v-show="theme.theme"
                  class="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-show="!theme.theme"
                  class="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  />
                </svg>
              </button>
              <button
                class="flex text-gray-600 dark:text-gray-300 focus:outline-none"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <button
                class="flex text-gray-600 dark:text-gray-300 focus:outline-none"
              >
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <div class="relative">
                <button
                  @click="dropdownOpen.open = !dropdownOpen.open"
                  class="relative flex items-center space-x-2 focus:outline-none"
                >
                  <h2
                    class="hidden text-sm text-gray-700 dark:text-gray-300 sm:block"
                  >
                    {{ authState.currentUser.displayName }}
                  </h2>
                  <img
                    class="object-cover border-2 rounded-md h-9 w-9"
                    :src="authState.currentUser.photoURL"
                    alt="Your avatar"
                  />
                </button>

                <div
                  v-show="dropdownOpen.open"
                  class="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl"
                  @click="dropdownOpen.open = false"
                >
                  <a
                    @click="userSignOut"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-600 hover:text-white"
                    >Logout</a
                  >
                </div>
              </div>
            </div>
          </header>

          <main class="flex-1 overflow-x-hidden overflow-y-auto">
            <router-view />
          </main>
        </div>
      </div>
    </div>
  </section>
</template>