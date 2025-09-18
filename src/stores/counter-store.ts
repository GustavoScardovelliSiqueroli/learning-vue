import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useMoneyStore } from './money-store'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const goal = ref(10)
    const moneyStore = useMoneyStore()

    const isAchieved = computed(() => count.value === goal.value)

    function increment() {
      moneyStore.increment()
      count.value++

      if (count.value == goal.value) {
        moneyStore.noteIncrement()
      }

      if (count.value > goal.value) {
        goal.value += Math.round(0.3 * count.value)
      }
    }
    return { count, goal, increment, isAchieved }
  },
  { persist: true },
)
