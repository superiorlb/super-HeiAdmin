import { createRouter, createWebHistory } from "vue-router";
import { getToken } from '../utils/token'
const isRouter = (url, next) => {
    const token = getToken() || null
    token ? next() : next('/login')
}
export const childrenRoutes = [
    {
        path: 'home',
        component: () => import('../views/home/home.vue'),
        meta: {
            title: '首页'
        },
        beforeEnter: (to, from, next) => {
            isRouter('home', next)
        }
    },
    {
        path: 'menu',
        component: () => import('../views/menu/menu.vue'),
        meta: {
            title: '菜单管理'
        },
        beforeEnter: (to, from, next) => {
            isRouter('menu', next)
        }
    },
    {
        path: 'admin',
        component: () => import('../views/admin/admin.vue'),
        meta: {
            title: '管理员管理'
        },
        beforeEnter: (to, from, next) => {
            isRouter('admin', next)
        }
    },
    {
        path: 'order',
        component: () => import('../views/order/order.vue'),
        meta: {
            title: '订单管理'
        },
        beforeEnter: (to, from, next) => {
            isRouter('order', next)
        }
    },
    {
        path: 'role',
        component: () => import('../views/role/role.vue'),
        meta: {
            title: '角色管理'
        },
        beforeEnter: (to, from, next) => {
            isRouter('role', next)
        }
    },
    {
        path: 'product',
        component: () => import('../views/product/product.vue'),
        meta: {
            title: '商品管理'
        },
        beforeEnter: (to, from, next) => {
            isRouter('product', next)
        }
    },
    {
        path: 'user',
        component: () => import('../views/user/user.vue'),
        meta: {
            title: '我的信息'
        },
        beforeEnter: (to, from, next) => {
            isRouter('user', next)
        }
    },
    {
        path: 'message',
        component: () => import('../views/user/message.vue'),
        meta: {
            title: '我的消息'
        },
        beforeEnter: (to, from, next) => {
            isRouter('user', next)
        }
    },
]
const routes = [
    {
        path: '/',
        component: () => import('../views/layout/index.vue'),
        redirect: 'home',
        children: [
            ...childrenRoutes
        ]
    },
    {
        path: '/login',
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/404',
        component: () => import('@/views/404/404.vue'),
        beforeEnter: (to, from, next) => {
            isRouter('/404', next)
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
// router.beforeEach((to, from, next) => {
//     if (!token && to.path !== '/login') next('/login')
//     else if (token && to.path === '/login') false
//     else next()
// })
export default router