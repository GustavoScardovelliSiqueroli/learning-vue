<template>
  <div class="store-container">
    <StoreWindow :items="buffStore.buffItems" @buy-item="buyItem"></StoreWindow>
  </div>
</template>

<script setup lang="ts">
import StoreWindow from '@/components/ShopWindow.vue'
import type { ShopItem } from '@/types/shop-item'
import { useMoneyStore, useBuffStore } from '@/stores'

const moneyStore = useMoneyStore()
const buffStore = useBuffStore()

function buyItem(item: ShopItem) {
  if (!moneyStore.pay(item.value, item.currency)) {
    return
  }
  console.log(item)

  item.action()
  console.log('teste')

  if (item.amount > 1) {
    item.amount--
    return
  }
  buffStore.buffItems = buffStore.buffItems.filter(
    (aItem) => aItem.name != item.name,
  )
}
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
