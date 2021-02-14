<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import firebase from "firebase/app";
import { AuthGoogle, dbUser } from "@/store/firbaseDatabase";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const form = reactive({
      email: "",
      password: "",
    });
    const router = useRouter();
    const loginGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();

      AuthGoogle.signInWithRedirect(provider);
    };
    const loginBasic = () => {
      console.log("login basic");
      AuthGoogle.signInWithEmailAndPassword(form.email, form.password)
        .then((user) => {
          if (user) {
            dbUser
              .doc(user.user?.uid)
              .get()
              .then((snapshot) => {
                router.push({ path: "/dashboard" });
              });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };
    onMounted(() => {
      AuthGoogle.getRedirectResult()
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    });

    return {
      loginBasic,
      loginGoogle,
      form,
    };
  },
});
</script>
<template>
  <section
    class="flex flex-col items-center h-screen bg-white md:flex-row dark:bg-gray-900"
  >
    <div
      class="relative hidden w-full h-screen bg-gray-400 lg:block md:w-1/3 xl:w-1/3"
    >
      <img
        src="https://dummyimage.com/600x500/F3F4F7/64748b"
        alt=""
        class="absolute object-cover w-full h-full"
      />
    </div>
    <div
      class="flex w-full h-screen px-6 bg-white bg-blue-1300 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12 items-left justify-left dark:bg-gray-900"
    >
      <div class="w-full py-32 lg:py-6 lg:h-100">
        <h1
          class="my-12 text-2xl font-semibold tracking-tighter text-blue-700 sm:text-3xl title-font dark:text-blue-900"
        >
          Sign Up to a new world.
        </h1>
        <div class="flex justify-enter">
          <button
            type="button"
            @click="loginGoogle"
            class="inline-flex w-full px-4 py-3 font-semibold text-blue-800 border border-gray-300 rounded-lg dark:text-blue-800 dark:border-gray-800 bg-blue-1300 hover:bg-blue-800 hover:text-white focus:bg-gray-100 dark:bg-gray-800 dark:hover:text-white"
          >
            <div class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlink:href="#a" overflow="visible" />
                </clipPath>
                <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clip-path="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clip-path="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clip-path="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              <span class="ml-4"> Log in with Google </span>
            </div>
          </button>
          <button
            type="button"
            class="inline-flex px-4 py-3 ml-8 font-semibold text-blue-800 border border-gray-300 rounded-lg dark:border-gray-800 bg-blue-1300 hover:bg-blue-800 dark:hover:bg-blue-500 dark:hover:bg-opacity-10 focus:bg-gray-100 hover:text-blue-500"
          >
            <div class="flex items-center justify-center">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <form class="mt-6" @submit.prevent="loginBasic">
          <div>
            <label
              class="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700 dark:text-white"
              >Email Address</label
            >
            <input
              type="email"
              v-model="form.email"
              placeholder="Your Email "
              class="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:outline-none"
              autofocus
              autocomplete="email"
              required
            />
          </div>
          <div class="mt-4">
            <label
              class="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700 dark:text-white"
              >Password</label
            >
            <input
              type="password"
              v-model="form.password"
              placeholder="Your Password"
              minlength="6"
              autocomplete="current-password"
              class="w-full px-4 py-2 text-base bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:outline-none"
              required
            />
          </div>
          <div class="mt-2 text-right">
            <a
              href="#"
              class="text-sm font-semibold leading-relaxed text-gray-700 hover:text-blue-700 focus:text-blue-700 dark:text-white"
              >Forgot Password?</a
            >
          </div>
          <button
            type="submit"
            class="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:shadow-outline focus:outline-none"
          >
            Log In
          </button>
        </form>
        <p class="mt-8 text-center text-gray-900 dark:text-white">
          Need an account?
          <router-link
            to="/auth/register"
            class="font-semibold text-blue-500 hover:text-blue-400"
            >Sign Up</router-link
          >
        </p>
      </div>
    </div>
  </section>
</template>