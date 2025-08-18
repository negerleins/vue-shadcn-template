import { createRouter, createWebHistory } from 'vue-router'
import Home from './app/pages/Home.vue'
import About from './app/pages/About.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
