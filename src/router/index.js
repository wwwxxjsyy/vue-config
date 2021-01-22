import {
  createRouter,
  // createWebHashHistory,
  createWebHistory
} from 'vue-router'

// 2. 定义路由配置
const routes = [
  {
    path: '/',
    redirect: '/gdmap'
  },
  {
    path: '/gdmap',
    name: 'gdmap',
    component: () => import('@/components/GdMap')
  },
  {
    path: '/fscss',
    name: 'fscss',
    component: () => import('@/views/fsCssFile')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/404')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]

// 3. 创建路由实例
const router = createRouter({
  // 4. 采用hash 模式
  // history: createWebHashHistory(),
  // 采用 history 模式
  history: createWebHistory(),
  routes // short for `routes: routes`
})

export default router
