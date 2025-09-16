import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const goal = ref(10)

  function increment() {
    count.value++
    if (count.value >= goal.value) {
      goal.value += 10
    }
  }
  return { count, goal, increment }
})
