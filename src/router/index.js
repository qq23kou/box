import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
}
*/

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
},

{
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
},

// 作者简介
{
    path: '/songyang',
    component: Layout,
    redirect: '/example/son',
    name: 'songyang',
    meta: {
    title: '作者相关',
    icon: 'dashboard'
    },
    children: [{
        path: 'son',
        name: 'son',
        component: () => import('@/views/songyang/son/index'),
        meta: {
            title: '关于本人',
            icon: 'dashboard'
        }
    },{
        path: 'son2',
        name: 'son2',
        component: () => import('@/views/songyang/son/index2'),
        meta: {
            title: 'son2',
            icon: 'dashboard'
        }
    }]
},

// 新增 代码 区域
{
    path: '/technology',
    component: Layout,
    redirect: '/technology/test',
    name: 'technology',
    children: [{
        path: 'test',
        name: 'test',
        component: () => import('@/views/technology/test/index'),
        meta: {
            title: '代码相关',
            icon: 'dashboard'
        }
    }]
},
// 新增技术文档 区域
{
    path: '/doc',
    component: Layout,
    redirect: '/doc/test',
    name: 'doc',
    children: [{
        path: 'test',
        name: 'test',
        component: () => import('@/views/doc/test/index'),
        meta: {
            title: '文档相关',
            icon: 'dashboard'
        }
    }]
},
{
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
            title: 'Dashboard',
            icon: 'dashboard'
        }
    }]
},

{
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: {
    title: 'Example',
    icon: 'example'
    },
    children: [{
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: {
        title: 'Table',
        icon: 'table'
        }
    },
    {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: {
        title: 'Tree',
        icon: 'tree'
        }
    }
    ]
},
{
    path: '/form',
    component: Layout,
    children: [{
    path: 'index',
    name: 'Form',
    component: () => import('@/views/form/index'),
    meta: {
        title: 'Form',
        icon: 'form'
    }
    }]
},
{
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
    title: 'Nested',
    icon: 'nested'
    },
    children: [{
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: {
        title: 'Menu1'
        },
        children: [{
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: {
            title: 'Menu1-1'
            }
        },
        {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: {
            title: 'Menu1-2'
            },
            children: [{
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: {
                title: 'Menu1-2-1'
                }
            },
            {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: {
                title: 'Menu1-2-2'
                }
            }
            ]
        },
        {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: {
            title: 'Menu1-3'
            }
        }
        ]
    },
    {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: {
        title: 'menu2'
        }
    }
    ]
},

{
    path: 'external-link',
    component: Layout,
    children: [{
    path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
    meta: {
        title: 'External Link',
        icon: 'link'
    }
    }]
},

    // 404 page must be placed at the end !!!
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
