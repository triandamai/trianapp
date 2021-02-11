<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref, watch } from "vue";
import { useStore } from "@/store";
import { ThemeActionTypes } from "@/store/module/action-type";

export default defineComponent({
  setup() {
    const menuProfil = ref(false);
    const view = reactive({
      atTopOfPage: true,
    });
    const profilToggle = () => {
      menuProfil.value = !menuProfil.value;
    };

    const store = useStore();

    const toggleTheme = () => {
      store.dispatch(ThemeActionTypes.INIT_THEME, "");
    };

    onBeforeMount(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 0) {
          if (view.atTopOfPage) view.atTopOfPage = false;
        } else {
          if (!view.atTopOfPage) view.atTopOfPage = true;
        }
      });
    });
    return {
      toggleTheme,
      menuProfil,
      profilToggle,
      store,
      view,
    };
  },
});
</script>
<template>
  <nav
    :class="{ scrolled: !view.atTopOfPage }"
    class="fixed w-screen bg-white dark:bg-gray-800"
  >
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center justify-center flex-1">
          <div class="flex items-center flex-shrink-0">
            <img
              class="block w-auto h-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <span class="mx-2 font-bold text-gray-800 dark:text-gray-300"
              >trianapp</span
            >
          </div>
        </div>
        <div
          class="flex items-center justify-center flex-1 hidden md:block lg:block"
        >
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link to="/" v-slot="{ isActive }">
              <a
                href="javascript.void(0);"
                class="inline-flex items-center px-4 py-2 font-normal rounded bg-gray-light hover:bg-gray-300 hover:text-gray-800 dark:hover:bg-gray-900 dark:hover:text-gray-100"
                :class="
                  isActive
                    ? 'bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-100'
                    : 'text-gray-400'
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
            <router-link to="/tutorial" v-slot="{ isActive }"
              ><a
                href="javascript.void(0);"
                class="inline-flex items-center px-4 py-2 font-normal rounded bg-gray-light hover:bg-gray-300 hover:text-gray-800 dark:hover:bg-gray-900 dark:hover:text-gray-100"
                :class="
                  isActive
                    ? 'bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-100'
                    : 'text-gray-400'
                "
              >
                <svg
                  class="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Tutorial</span>
              </a>
            </router-link>
            <router-link to="/about" v-slot="{ isActive }">
              <a
                href="javascript.void(0);"
                class="inline-flex items-center px-4 py-2 font-normal rounded bg-gray-light hover:bg-gray-300 hover:text-gray-800 dark:hover:bg-gray-900 dark:hover:text-gray-100"
                :class="
                  isActive
                    ? 'bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-100'
                    : 'text-gray-400'
                "
              >
                <svg
                  class="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Tentang</span>
              </a>
            </router-link>
          </div>
        </div>
        <div class="flex items-center justify-center flex-1">
          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div class="flex">
              <button
                @click="toggleTheme"
                class="flex items-center mx-5 text-sm text-gray-900 focus:outline-none dark:text-gray-100"
                id="user-menu"
                aria-haspopup="true"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  />
                </svg>
              </button>
              <button
                @click="profilToggle"
                class="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
            <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
            <div
              class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-900 ring-1 ring-black ring-opacity-5"
              role="menu"
              v-show="menuProfil"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
                >Your Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
                >Settings</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav {
  z-index: 10;
}
nav.scrolled {
  @apply shadow-lg;
  border-bottom: 0px;
}
</style>