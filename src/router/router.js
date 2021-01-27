import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./../views/Home.vue')
  },
  {
    path: '*',
    name: 'ErrorPage',
    component: () => import('./../views/ErrorPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('./../views/Contact.vue')
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import('./../views/Basket.vue')
  },
  {
    path: '/women',
    name: 'Women',
    component: () => import('./../views/Women.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('./../views/Profile.vue')
  },
  {
    path: '/opencard/:id',
    name: 'OpenCard',
    component: () => import('./../views/OpenCard.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./../views/Login.vue')
  },
  {
    path: '/man',
    name: 'Man',
    component: () => import('./../views/Man.vue')
  },
  {
    path: '/registrate',
    name: 'Registrate',
    component: () => import('./../views/Registrate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
