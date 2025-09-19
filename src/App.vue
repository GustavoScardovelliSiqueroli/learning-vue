<template>
  <div class="app-container">
    <NavBar />
    <main class="main-container">
      <RouterView />
    </main>
  </div>
</template>
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  line-height: 1.5;
  color: #c8c3bc;
  overflow-x: hidden;
  background-color: #131516;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Garante altura total da tela */
}

.main-container {
  flex: 1; /* Ocupa o resto do espaço */
  overflow: auto; /* Scroll se o conteúdo passar da tela */
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
button {
  background-color: #60686c;
  color: #c8c3bc;
  cursor: pointer;
}
</style>
