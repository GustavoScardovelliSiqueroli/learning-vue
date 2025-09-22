import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useMoneyStore } from './money-store'
import { useBuffStore } from './buff-store.ts'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const moneyStore = useMoneyStore()
    const buffStore = useBuffStore()

    const clicks = ref(0)
    const count = ref(0)
    const goal = ref(10)

    const isAchieved = computed(() => count.value === goal.value)

    function increment() {
      clicks.value++
      moneyStore.coinIncrement(buffStore.clickValue)
      count.value +=
        (1 + buffStore.clickValue) * (1 + buffStore.clickMultiplier)

      if (count.value >= goal.value) {
        moneyStore.blackCoinIncrement()
      }

      if (count.value > goal.value) {
        goal.value += Math.round(0.3 * count.value)
      }
    }
    return { count, goal, clicks, increment, isAchieved }
  },
  { persist: true },
)
