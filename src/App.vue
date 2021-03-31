<template>
  <HelloWorld />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
.btn-outline-header-2-3 {
  border: 1px solid #707092;
  color: #707092;
}
.btn-outline-header-2-3:hover {
  border: 1px solid #ffffff;
  color: #ffffff;
}
.btn-outline-header-2-3:hover div path {
  fill: #ffffff;
}
.box-shadow-header-2-3:hover {
  --tw-shadow: inset 0 0px 25px 0 rgba(20, 20, 50, 0.7);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.navigation-header-2-3 a:hover,
.active::after {
  font-weight: 600;
}
.navigation-header-2-3 a:hover {
  color: #e7e7e8;
}
.navigation-header-2-3 {
  color: #707092;
}
.bg-screen-header-2-3 {
  background-color: #707092;
}
.bg-popup-header-2-3 {
  background-color: #141432;
}
.list-footer-2-3 li a {
  color: #707092;
}
.list-footer-2-3 li a:hover {
  color: #ffffff;
  cursor: pointer;
}
.border-color-footer-2-3 {
  color: #707092;
}
.footer-link-footer-2-3:hover {
  color: #ffffff;
  cursor: pointer;
}
.social-media-c-footer-2-3:hover circle,
.social-media-p-footer-2-3:hover path {
  fill: #ffffff;
  cursor: pointer;
}
</style>
