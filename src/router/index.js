import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolio.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
    path: '/contact',
    name: 'contact',
    component: Contact
      
    },
    {
      path: '/porfolio',
      name: 'portfolio',
      component: Portfolio
    }
  ]
})

export default router
