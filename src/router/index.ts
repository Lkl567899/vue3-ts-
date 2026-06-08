import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      redirect:'/article/channel',
      name: 'layout',
      component: () => import('@/views/layout/index.vue'),
      children: [
        {
          path: 'article/channel', name: 'channel', component: () => import('@/views/channel/index.vue')
        }
      ]
    }
  ],
})

export default router
