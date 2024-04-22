import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'main',
      path: '/',
      component: MainView
    },
    {
      name: 'login',
      path: '/login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const valuesCookies = ['apiUrl', 'port', 'user', 'password']

  const hasAllValues = valuesCookies.every((value) => Cookies.get(value))

  if (to.path !== '/login' && !hasAllValues) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
