<template>
  <div class="store-container">
    <StoreWindow
      :items="[
        {
          name: 'auto-clicker',
          title: 'Auto Clicker',
          value: 20,
          amount: 1,
          currency: 'black-coin',
        },
        {
          name: 'click-value',
          title: 'Increase click value $$$',
          message: 'Increase by 1',
          value: 50,
          amount: 1,
          currency: 'coin',
        },
      ]"
      @buy-item="buyItem"
    ></StoreWindow>
  </div>
</template>

<script setup lang="ts">
import StoreWindow from '@/components/ShopWindow.vue'
import type { Item } from '@/types/shop-item'

function buyItem(item: Item) {}
</script>

<style scoped>
.store-container {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
