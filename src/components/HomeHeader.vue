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
              TTrian Damai
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
                    class="mr-2.5"
                    width="13"
                    height="12"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9293 7.99988L6.66668 5.15788V10.8419L10.9293 7.99988ZM12.9173 8.27722L5.85134 12.9879C5.80115 13.0213 5.74283 13.0404 5.6826 13.0433C5.62238 13.0462 5.5625 13.0327 5.50934 13.0042C5.45619 12.9758 5.41175 12.9334 5.38075 12.8817C5.34976 12.83 5.33337 12.7708 5.33334 12.7105V3.28922C5.33337 3.22892 5.34976 3.16976 5.38075 3.11804C5.41175 3.06633 5.45619 3.02398 5.50934 2.99552C5.5625 2.96706 5.62238 2.95355 5.6826 2.95644C5.74283 2.95932 5.80115 2.97848 5.85134 3.01188L12.9173 7.72255C12.963 7.75299 13.0004 7.79423 13.0263 7.84261C13.0522 7.89099 13.0658 7.94501 13.0658 7.99988C13.0658 8.05475 13.0522 8.10878 13.0263 8.15716C13.0004 8.20553 12.963 8.24678 12.9173 8.27722Z"
                      fill="#707092"
                    />
                  </svg>
                  Download Resume
                </div>
              </button>
            </div>
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
