import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hotel',
      name: 'hotel',
      component:() =>import("../views/住宿/hotel.vue"),
    },
    {
      path: '/Attractions',
      name: 'attractions',
      component:() =>import("../views/景點/Attractions.vue"),
    },
    {
      path: '/TainanFood',
      name: 'tainanFood',
      component:() =>import("../views/グルメ/TainanFood.vue"),
    }
    
  ]
})

export default router
