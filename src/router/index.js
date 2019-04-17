import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRoutes = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  // shouye
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    hidden: false,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/sys',
    component: Layout,
    redirect: '/sys/User',
    meta: {
      title: '系统管理',
      icon: 'user'
    },
    children: [
      {
        path: 'User',
        component: () => import('@/views/sys/User'),
        name: 'UserList',
        meta: { title: '用户管理', icon: 'user' }
      },
      {
        path: 'role',
        component: () => import('@/views/sys/role'),
        name: 'rolelist',
        meta: { title: '角色权限', icon: 'user' }
      }
    ]
  },
  {
    path: '/newsAdmin',
    component: Layout,
    redirect: '/newsAdmin/list',
    meta: {
      title: '新闻管理',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/newsAdmin/create'),
        name: 'create',
        meta: { title: '添加新闻', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/newsAdmin/edit'),
        name: 'EditForm',
        meta: { title: '修改新闻', noCache: true },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/newsAdmin/list'),
        name: 'ArticleList',
        meta: { title: '新闻列表', icon: 'list' }
      },
      {
        path: 'searcList',
        component: () => import('@/views/newsAdmin/searcList'),
        name: 'ComplexTable',
        meta: { title: '新闻查询', icon: 'search' }
      }
    ]
  }
]
export const asyncRoutes = []
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
