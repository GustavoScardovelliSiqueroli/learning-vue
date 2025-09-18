<template>
  <div class="window-container">
    <div class="window-header">
      <h2>name</h2>
      <h2>value</h2>
    </div>
    <div class="window-item" v-for="item in props.items" :key="item.name">
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Item {
  name: string
  title: string
  message?: string
  value: number
  amount: number
  currency: 'black-coin' | 'coin'
}

const props = defineProps<{
  items: Item[]
}>()

console.log(props)
</script>

<style scoped>
.window-container {
  background-color: #60686c;
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 600px;
}
.window-header {
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
}
.window-item {
  background-color: red;
  height: 100px;
}
</style>
