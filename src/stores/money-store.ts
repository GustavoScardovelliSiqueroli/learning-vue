import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMoneyStore = defineStore(
  'money',
  () => {
    const coinAmount = ref(0)
    const blackCoinAmount = ref(0)

    function coinIncrement(): void {
      coinAmount.value++
    }
    function blackCoinIncrement(): void {
      blackCoinAmount.value++
    }
    function coinPay(payValue: number): void {
      coinAmount.value -= payValue
    }
    function blackCoinPay(payValue: number) {
      blackCoinAmount.value -= payValue
    }

    return {
      coinAmount,
      blackCoinAmount,
      coinIncrement,
      blackCoinIncrement,
      coinPay,
      blackCoinPay,
    }
  },
  { persist: true },
)
