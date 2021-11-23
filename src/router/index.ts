import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import ButtonList from '../views/Button.vue'
import Connpass from '../views/Connpass.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'Button List',
    component: ButtonList
  },
  {
      path: '/connpass',
      name: 'Connpass API',
      component: Connpass
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
