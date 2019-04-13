import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
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
        meta: { title: '首页', icon: 'home', noCache: true, affix: true, breadcrumb: false }
      }
    ]
  },
  {
    path: '/sysAdmin',
    component: Layout,
    redirect: '/sysAdmin/user',
    name: 'useradmin',
    meta: {
      title: '系统管理',
      icon: 'user'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/sysAdmin/createuser'),
        name: 'CreateArticle',
        meta: { title: '用户管理', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/sysAdmin/edituser'),
        name: 'EditArticle',
        meta: { title: '修改用户信息', noCache: true },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/sysAdmin/listuser'),
        name: 'ArticleList',
        meta: { title: '用户列表', icon: 'list' }
      }
    ]
  },
  // { path: '*', redirect: '/404', hidden: true }
  // 新闻查询路由菜单
  // {
  //   path: '/listTable',
  //   hidden: false,
  //   component: Layout;
  //   children: [{
  //     path: 'newsList',
  //     component: () => import('@/views/listTable/newsList'),
  //     name: 'InlineEditTable',
  //     meta: { title: '新闻查询', icon: 'search' }
  //   }]
  // },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: '新闻管理',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/newsAdmin/create'),
        name: 'CreateArticle',
        meta: { title: '添加新闻', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/newsAdmin/edit'),
        name: 'EditArticle',
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
  },
]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap 
})