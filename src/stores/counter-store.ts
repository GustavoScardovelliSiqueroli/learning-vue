import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const goal = ref(10)

    const isAchieved = computed(() => count.value === goal.value)

    function increment() {
      count.value++
      if (count.value > goal.value) {
        goal.value += Math.round(0.3 * count.value)
      }
    }
    return { count, goal, increment, isAchieved }
  },
  { persist: true },
)
