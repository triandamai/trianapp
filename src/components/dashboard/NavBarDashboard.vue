<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "NavBarDashboard",
  setup(_, { emit }) {
    const menuProfil = ref(false);
    const store = useStore();
    const view = reactive({
      atTopOfPage: true,
    });
    const profilToggle = () => {
      menuProfil.value = !menuProfil.value;
    };

    const toggleTheme = () => {
      emit("theme", true);
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
  <nav :class="{ scrolled: !view.atTopOfPage }" class="fixed w-screen">
    <div class="px-6 sm:px-8 lg:px-10">
      <div class="relative flex justify-between h-16">
        <div class="flex items-center justify-start flex-1">
          <div class="flex items-center flex-shrink-0">
            <img
              @click="$router.push({ path: '/article' })"
              class="block w-auto h-8 cursor-pointer"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <span
              class="mx-2 font-mono font-bold text-gray-800 cursor-pointer dark:text-gray-300"
              >trianapp</span
            >
          </div>
        </div>

        <div class="flex items-center justify-end flex-1">
          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div class="flex">
              <button
                class="flex items-center mx-5 text-sm text-gray-900 focus:outline-none dark:text-gray-100"
                id="user-menu"
                @click="toggleTheme"
                aria-haspopup="true"
              >
                <svg
                  class="w-5 h-5 mr-2 transition ease-in"
                  v-if="store.state.theme == 'light'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  />
                </svg>
                <svg
                  class="w-5 h-5 mr-2 transition ease-out"
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </button>
              <button
                @click="profilToggle"
                class="flex text-sm bg-gray-800 rounded-full focus:outline-none"
                id="user-menu"
                aria-haspopup="true"
              >
                <span class="font-mono sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-md"
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
              class="absolute right-0 w-48 py-1 mt-2 font-mono origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-900 ring-1 ring-black ring-opacity-5"
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
              <router-link
                to="/new"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
                >Post Article</router-link
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
                >Settings</a
              >
              <router-link
                to="/auth/login"
                class="block px-4 py-2 text-sm text-gray-700 cursor-pointer dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
                >Sign out</router-link
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