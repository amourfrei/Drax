// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '' },
    redirect: '/loans/check',
    children: [
      //数据统计
      {
        path: '/stats',
        redirect: '/stats/risk',
        component: PageView,
        meta: { title: '数据统计', icon: 'slack', permission: ['form'] },
        children: [
          {
            path: '/stats/risk',
            name: 'StatsRisk',
            component: () => import('@/views/stats/risk'),
            meta: { title: '风控数据', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/stats/biz',
            name: 'StatsBiz',
            component: () => import('@/views/stats/biz'),
            meta: { title: '业务运营数据', keepAlive: true, permission: ['form'] }
          }
        ]
      },
      //贷款审批
      {
        path: '/loans',
        redirect: '/loans/check',
        component: PageView,
        meta: { title: '贷款审批', icon: 'table', permission: ['form'] },
        children: [
          {
            path: '/loans/check',
            name: 'LoansCheck',
            component: () => import('@/views/loans/check'),
            meta: { title: '申请单初审', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/loans/review',
            name: 'LoansReview',
            component: () => import('@/views/loans/review'),
            meta: { title: '申请单复审', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/loans/record',
            name: 'LoansRecord',
            component: () => import('@/views/loans/record'),
            meta: { title: '审核历史记录', keepAlive: true, permission: ['form'] }
          }
        ]
      },

      //线下放款管理
      {
        path: '/credit',
        redirect: '/credit/check',
        component: PageView,
        meta: { title: '线下放贷管理', icon: 'profile', permission: ['form'] },
        children: [
          {
            path: '/credit/grant',
            name: 'CreditGrant',
            component: () => import('@/views/credit/grant'),
            meta: { title: '贷款发放', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/credit/check',
            name: 'CreditCheck',
            component: () => import('@/views/credit/check'),
            meta: { title: '放款一级审核', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/credit/first',
            name: 'CreditFirst',
            component: () => import('@/views/credit/checkRecord'),
            meta: { title: '放款一级审核日志', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/credit/review',
            name: 'CreditReview',
            component: () => import('@/views/credit/review'),
            meta: { title: '放款二级级审核', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/credit/second',
            name: 'CreditSecond',
            component: () => import('@/views/credit/reviewRecord'),
            meta: { title: '放款二级审核日志', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/credit/finance',
            name: 'CreditFinance',
            component: () => import('@/views/credit/finance'),
            meta: { title: '放款财务审核', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/credit/third',
            name: 'CreditThird',
            component: () => import('@/views/credit/financeRecord'),
            meta: { title: '放款财务审核日志', keepAlive: true, permission: ['form'] }
          }
        ]
      },
      //产品管理
      {
        path: '/prod',
        redirect: '/prod/pub',
        component: PageView,
        meta: { title: '产品管理', icon: 'form', permission: ['form'] },
        children: [
          {
            path: '/prod/pub',
            name: 'ProdPub',
            component: () => import('@/views/prod/publish'),
            meta: { title: '产品发布', keepAlive: true, permission: ['form'] }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
