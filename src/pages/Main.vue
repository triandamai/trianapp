<template>
  <div class="text-center" id="content">
    <div>
      <h1 class="font-extrabold text-5xl text" id="name">Trian Damai</h1>
      <h2 class="text-lg mt-4">Software Enginer @Cexup</h2>
      <div>
        <span class="mx-2 underline hover:text-orange-500 cursor-pointer"
          >Github</span
        ><span class="mx-2 underline hover:text-orange-500 cursor-pointer"
          >LinkedIn</span
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style lang="scss" scoped>
$font: "Mono", mono;

::selection {
  background-color: #c3cfe2;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(to right, #fdfbfb, #ebedee 70%);
}

.text {
  text-transform: uppercase;
  background: linear-gradient(to right, #ef4444 0%, #e8ab12 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: {
    size: 6vw;
    family: $font;
  }
}
</style>
