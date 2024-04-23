import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
import LoginView from '@/views/LoginView.vue'
import MonitoringView from '@/views/MonitoringView.vue'
import StorageView from '@/views/StorageView.vue'
import UsersView from '@/views/UsersView.vue'
import GroupsView from '@/views/GroupsView.vue'
import EventsView from '@/views/EventsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      name: 'lagatrix',
      path: '/lagatrix',
      redirect: '/lagatrix/monitoring',
      children: [
        {
          name: 'monitoring',
          path: '/lagatrix/monitoring',
          component: MonitoringView
        },
        {
          name: 'storage',
          path: '/lagatrix/storage',
          component: StorageView
        },
        {
          name: 'users',
          path: '/lagatrix/users',
          component: UsersView
        },
        {
          name: 'groups',
          path: '/lagatrix/users',
          component: GroupsView
        },
        {
          name: 'events',
          path: '/lagatrix/events',
          component: EventsView
        }
      ]
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
