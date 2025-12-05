import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import About from '../pages/about.vue'
import Benefits from '../pages/benefits.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/benefits', component: Benefits },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router