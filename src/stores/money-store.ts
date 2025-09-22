import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { CurrencyType } from '@/types/shop-item'

export const useMoneyStore = defineStore(
  'money',
  () => {
    const coinAmount = ref(0)
    const blackCoinAmount = ref(0)

    function coinIncrement(buff: number): void {
      coinAmount.value += 1 + buff
    }
    function blackCoinIncrement(): void {
      blackCoinAmount.value++
    }
    function pay(payValue: number, currency: CurrencyType): boolean {
      let money: Ref<number>
      if (currency == 'coin') {
        money = coinAmount
      } else {
        money = blackCoinAmount
      }
      if (money.value < payValue) {
        return false
      }
      money.value -= payValue
      return true
    }

    return {
      coinAmount,
      blackCoinAmount,
      coinIncrement,
      blackCoinIncrement,
      pay,
    }
  },
  { persist: true },
)
