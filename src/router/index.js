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
        meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true, breadcrumb: false }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'example',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: { title: '发布新闻', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: '编辑新闻', noCache: true },
        hidden: true
      }
      // {
      //   path: 'list',
      //   component: () => import('@/views/example/list'),
      //   name: 'ArticleList',
      //   meta: { title: '新闻列表', icon: 'list' }
      // }
    ]
  },
  // {
  //   path: 'newList',
  //   component: Layout,
  //   redirect: '/listTable/newList',
  //   name: '新闻列表',
  //   hidden: true,
  //   children: [{
  //     path: 'InlineEditTable',
  //     component: () => import('@/views/listTable/newList')
  //   }]
  // },
  // {
  //   path: 'listTable',
  //   component: Layout,
  //   redirect: '/listTable/newList',
  //   hidden: false,
  //   children: [
  //     {
  //       path: 'InlineEditTable',
  //       component: () => import('@/views/listTable/newList'),
  //       name: 'InlineEditTable',
  //       meta: { title: '新闻列表', icon: 'list' }
  //     }
  //   ]
  // },

  {
    path: 'listTable',
    hidden: false,
    component: Layout,
    children: [{
      path: 'newList',
      component: () => import('@/views/listTable/newList'),
      name: 'InlineEditTable',
      meta: { title: '新闻列表', icon: 'list' }
    }]
  }
  // { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
