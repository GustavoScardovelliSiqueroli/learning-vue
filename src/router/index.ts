import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '@/views/CounterView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counter',
      component: CounterView,
      name: 'counter',
    },
    {
      path: '/',
      component: HomeView,
      name: 'home',
    },
  ],
})

export default router
