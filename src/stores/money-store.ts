import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMoneyStore = defineStore(
  'money',
  () => {
    const amount = ref(0)
    const noteAmount = ref(0)

    function increment(): void {
      amount.value++
    }
    function noteIncrement(): void {
      noteAmount.value++
    }

    return { amount, noteAmount, increment, noteIncrement }
  },
  { persist: true },
)
