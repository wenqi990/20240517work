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
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: () => import('../views/活動/Activity.vue'),
    },
    {
      path: '/Map',
      name: 'Map',
      component: () => import('../views/Map.vue'),
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: () => import('../views/Footer.vue'),
    }
    
  ]
})

export default router
