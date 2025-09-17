<template>
  <div
    class=""
    style="
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      gap: 50px;
    "
  >
    <button @click="counter.increment" style="height: 50px; width: 80px">
      Somar 1
    </button>
    <h1>{{ counter.count }} / {{ counter.goal }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores'
const counter = useCounterStore()
</script>
