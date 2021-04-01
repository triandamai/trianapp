<template>
  <section
    class="h-full w-full border-box transition-all duration-500 linear"
    style="background-color: #141432"
  >
    <!-- Navbar -->
    <div style="font-family: 'Poppins', sans-serif">
      <nav-bar />

      <!-- Hero-header-2-3 -->
      <div>
        <div
          class="mx-auto flex pt-12 pb-16 lg:pb-20 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-row flex-col"
        >
          <!-- Left Column -->
          <div
            class="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center"
          >
            <p
              class="mb-8 leading-relaxed font-semibold text-sm"
              style="color: #fb6262"
            >
              HELLO I'AM
            </p>
            <h1
              class="lg:block hidden title-font sm:text-5xl lg:text-6xl text-4xl mb-8 font-semibold sm:leading-tight"
              style="color: #cbcbd2; line-height: 1.2"
            >
              Trian Damai<br />
            </h1>
            <h1
              class="lg:hidden block title-font sm:text-5xl lg:text-6xl text-4xl mb-8 lg::px-10 md:px-10 sm:px-6 px-0 font-semibold sm:leading-tight"
              style="color: #cbcbd2; line-height: 1.2"
            >
              Trian Damai
            </h1>
            <div
              class="inline-block items-center mx-auto lg:mx-0 lg:flex justify-center lg:space-x-8 md:space-x-2 sm:space-x-3 space-x-0"
            >
              <button
                class="btn-outline-header-2-3 font-normal text-black text-base py-4 px-6 rounded-xl focus:outline-none bg-transparent rounded hover:border-transparent"
                style="font-family: 'Poppins', sans-serif"
              >
                <div class="flex items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="15"
                    height="15"
                    class="mr-5"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Download Resume
                </div>
              </button>
            </div>
            <div class="flex text-white p-5"></div>
          </div>
          <!-- Right Column -->
          <div class="w-full lg:w-1/2 text-center justify-center flex pr-0">
            <img
              id="hero-header-2-3"
              src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import NavBar from "./NavBar.vue";
export default defineComponent({
  components: { NavBar },
  name: "HelloWorld",
  setup() {
    const open = ref(false);
    return {
      open,
    };
  },
});
</script>
