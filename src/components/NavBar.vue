<template>
  <nav>
    <div class="nav-pages">
      <RouterLink to="/"> HOME </RouterLink>
      <RouterLink to="/counter"> COUNTER </RouterLink>
      <RouterLink to="/store"> STORE </RouterLink>
    </div>
    <div class="nav-panel">
      <div class="panel-item">
        <img src="/emojis/1FA99.svg" alt="coin" />
        <span>{{ money.amount }}</span>
      </div>
      <div class="panel-item">
        <img src="/emojis/1F311.svg" alt="black-coin" />
        <span>{{ money.noteAmount }}</span>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useMoneyStore } from '@/stores'

const money = useMoneyStore()
</script>

<style scoped>
nav {
  background-color: #60686c;
  color: #c8c3bc;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
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
  gap: 5px;
}
.nav-panel img,
.nav-panel span {
  height: 35px;
  line-height: 35px;
  font-weight: 600;
}
.panel-item {
  display: flex;
  gap: 2px;
}
.nav-pages {
  display: flex;
  gap: 20px;
}
</style>
