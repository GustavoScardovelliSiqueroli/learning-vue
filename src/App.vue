<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>
<style>
html,
body,
#app,
main {
  height: 100%;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: sans-serif;
  line-height: 1.5;
  color: #333;
  background-color: #fff;
}
ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
body {
  overflow-x: hidden;
}
</style>
