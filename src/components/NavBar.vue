<template>
  <nav>
    <RouterLink to="/"> HOME </RouterLink>
    <RouterLink to="/counter"> COUNTER </RouterLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  background-color: gray;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
nav a {
  font-size: 20px;
  color: white;
  font-weight: 600;
}
</style>
