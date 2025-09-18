<template>
  <nav>
    <div class="nav-pages">
      <RouterLink to="/"> HOME </RouterLink>
      <RouterLink to="/counter"> COUNTER </RouterLink>
    </div>
    <div class="nav-panel">
      <img src="/emojis/1FA99.svg" alt="coin" />
      <span>{{ money.amount }}</span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useMoneyStore } from '@/stores'

const money = useMoneyStore()
</script>

<style scoped>
nav {
  background-color: gray;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  color: white;
  font-size: 20px;
  padding: 10px;
}
nav a {
  font-weight: 600;
}
.nav-panel {
  display: flex;
  justify-content: flex-end;
  width: 30%;
}
.nav-panel img,
.nav-panel span {
  height: 35px;
  line-height: 35px;
}
</style>
