import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
import LoginView from '@/views/LoginView.vue'
import MonitoringView from '@/views/MonitoringView.vue'
import StorageView from '@/views/StorageView.vue'
import UsersView from '@/views/UsersView.vue'
import GroupsView from '@/views/GroupsView.vue'
import EventsView from '@/views/EventsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/lagatrix'
    },
    {
      name: 'lagatrix',
      path: '/lagatrix',
      redirect: '/lagatrix/monitoring',
      children: [
        {
          name: 'monitoring',
          path: 'monitoring',
          component: MonitoringView
        },
        {
          name: 'storage',
          path: 'storage',
          component: StorageView
        },
        {
          name: 'users',
          path: 'users',
          component: UsersView
        },
        {
          name: 'groups',
          path: 'groups',
          component: GroupsView
        },
        {
          name: 'events',
          path: 'events',
          component: EventsView
        }
      ]
    },
    {
      name: 'login',
      path: '/login',
      component: LoginView
    },
    { path: '/:catchAll(.*)', redirect: '/404' }
  ]
})

router.beforeEach((to, _from, next) => {
  const valuesCookies = ['apiUrl', 'port', 'user', 'password']

  const hasAllValues = valuesCookies.every((value) => Cookies.get(value))

  if (to.path !== '/login' && !hasAllValues) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
