<template>
  <div class="counter-container">
    <button @click="incrementCounterMoney" style="height: 50px; width: 80px">
      Somar 1
    </button>
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

<style>
.counter-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
