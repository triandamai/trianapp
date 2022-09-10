<template>
    <div id="__trian.app__">
        <header
            class="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[40%] lg:items-start lg:overflow-y-auto xl:w-[40%]">
            <Sidebar />
            <Hero>
                <ProfilePicture />
                <Title />
                <About />
                <SocialMedia />
            </Hero>
        </header>
        <Nuxt />
        <Footer />
    </div>
</template>
<script>
import Prism from "prismjs"
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-kotlin.js'
import 'prismjs/components/prism-sql.js'
import 'prismjs/components/prism-yaml.js'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-json.js'
import 'prismjs/components/prism-groovy.js'

export default {
    mounted(){
        Prism.highlightAll()
    }
}
</script>
<style>
.nuxt-content blockquote {
    @apply bg-pink-600 bg-opacity-20 rounded-md pl-2 pr-2 pt-2 border-l-2;
}

.nuxt-content h1 {
    font-weight: 500;
    font-size: 34px;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #eaecef;
    margin-bottom: 1rem;
    @apply dark:text-white text-black;
}

.nuxt-content h2 {
    font-weight: 500;
    font-size: 30px;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #eaecef;
    margin-bottom: 1rem;
    @apply dark:text-white text-black;
}

.nuxt-content h3 {
    font-weight: 400;
    font-size: 22px;
    @apply dark:text-white text-black;
}

.nuxt-content h4 {
    font-weight: 400;
    font-size: 18px;
    @apply dark:text-white text-black;
}

.nuxt-content h5 {
    font-weight: 400;
    font-size: 16px;
    @apply dark:text-white text-black;
}

.nuxt-content h6 {
    font-weight: 400;
    font-size: 12px;
    @apply dark:text-white text-black;
}

.nuxt-content p {
    font-size: 16px;
    margin-bottom: 30px;
    word-spacing: 2px;
    line-height: 32px;
    @apply dark:text-white text-black;
}

.nuxt-content p code,
.nuxt-content h2 code,
.nuxt-content h3 code {
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-size: 0.85em;
    border-radius: 3px;
    font-family: Consolas, Roboto Mono, monospace;
    @apply bg-pink-500 bg-pink-300 bg-opacity-10 text-pink-800;
}

.nuxt-content ul {
    font-size: 16px;
    margin-bottom: 30px;
    word-spacing: 2px;
    line-height: 32px;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    @apply dark:text-white text-black;
}




/* show line number */
pre[class*="language-"].line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
}

pre[class*="language-"].line-numbers>code {
    position: relative;
    white-space: inherit;
}

.line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em;
    /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid rgb(255, 255, 255);

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.line-numbers-rows>span {
    display: block;
    counter-increment: linenumber;
}

.line-numbers-rows>span:before {
    content: counter(linenumber);
    color: rgb(81, 80, 80);
    display: block;
    padding-right: 0.8em;
    text-align: right;
}

/* filename */
.nuxt-content-highlight {
    @apply relative;

    /* Style filename span added by @nuxt/content */
    & > .filename {
      @apply absolute right-0 top-0 text-gray-100 z-10 font-mono text-sm tracking-tight leading-none mr-4 mt-3;
    }

    /* Add top padding to code blocks with filename */
    & > .filename + pre[class*="language-"] {
      @apply pt-8;
    }

    /* Style copy button added in `pages/_.vue` */
    & > .copy {
      @apply hidden absolute right-0 bottom-0 leading-none shadow-lg px-2 py-2 text-white bg-gray-800 text-sm uppercase rounded-md border border-white font-semibold mr-3 mb-3;

      &:hover {
        @apply bg-gray-700;
      }

      &:focus {
        @apply outline-none bg-gray-600;
      }
    }
    &:hover {
      & > .copy {
        @apply block;
      }
    }
  }

</style>

