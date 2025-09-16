import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '@/components/CounterView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counter',
      component: CounterView,
      name: 'counter',
    },
  ],
})

export default router
