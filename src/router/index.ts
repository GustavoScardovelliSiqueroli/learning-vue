import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '@/views/CounterView.vue'
import HomeView from '@/views/HomeView.vue'
import StoreView from '@/views/StoreView.vue'

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
    {
      path: '/store',
      component: StoreView,
      name: 'store',
    },
  ],
})

export default router
