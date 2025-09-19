<template>
  <div class="counter-container">
    <button
      @click="incrementCounterMoney"
      style="height: 50px; width: 80px"
    ></button>
    <h1>{{ counter.count }} / {{ counter.goal }}</h1>
    <h1 :style="`opacity: ${counter.isAchieved ? 100 : 0};`">🎉</h1>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores'
const counter = useCounterStore()

function incrementCounterMoney() {
  counter.increment()
}
</script>

<style scoped>
.counter-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
button {
  background-color: #60686c;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  border: none;
  transition: all 0.05s;
}
button:hover {
  background-color: #505659;
}
button:active {
  background-color: #505659;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
