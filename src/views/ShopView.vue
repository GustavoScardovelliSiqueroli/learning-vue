<template>
  <div class="store-container">
    <StoreWindow :items="items" @buy-item="buyItem"></StoreWindow>
  </div>
</template>

<script setup lang="ts">
import StoreWindow from '@/components/ShopWindow.vue'
import type { ShopItem } from '@/types/shop-item'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useMoneyStore } from '@/stores'

const moneyStore = useMoneyStore()

const items: Ref<ShopItem[]> = ref([
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
    amount: 2,
    currency: 'coin',
  },
])

function buyItem(item: ShopItem) {
  if (!moneyStore.pay(item.value, item.currency)) {
    return
  }
  if (item.amount > 1) {
    item.amount--
    return
  }
  items.value = items.value.filter((aItem) => aItem.name != item.name)
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
