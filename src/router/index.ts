import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import MeteoPage from '../views/Meteo.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/meteo'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/meteo',
    name: 'ConditionActuelle',
    component: MeteoPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
