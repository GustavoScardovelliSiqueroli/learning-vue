import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBuffStore = defineStore(
  'buff',
  () => {
    const clickMultiplier = ref(0)
    const clickValue = ref(0)

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
    }
  },
  { persist: true },
)
