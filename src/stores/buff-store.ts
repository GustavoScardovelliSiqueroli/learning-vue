import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { ShopItem } from '@/types/shop-item'

export const useBuffStore = defineStore(
  'buff',
  () => {
    const clickMultiplier = ref(0)
    const clickValue = ref(0)
    const buffItems: Ref<Array<ShopItem>> = ref([
      {
        name: 'click-value',
        title: 'Increase click value $$$',
        message: 'Increase by 1',
        value: 50,
        amount: 10,
        currency: 'coin',
        action: () => clickValue.value++,
      },
    ])

    function increaseClickMultiplier(increaseValue: number): void {
      clickMultiplier.value += increaseValue
    }

    function increaseClickValue(increaseValue: number) {
      clickValue.value += increaseValue
    }

    return {
      clickMultiplier,
      clickValue,
      increaseClickMultiplier,
      increaseClickValue,
      buffItems,
    }
  },
  { persist: true },
)
