import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMoneyStore = defineStore(
  'money',
  () => {
    const amount = ref(0)
    function increment() {
      amount.value++
    }

    return { amount, increment }
  },
  { persist: true },
)
