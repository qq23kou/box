import Main from '@/views/Main.vue'
export const mainRouter = {
        path: '/',
        name: 'main',
        redirect: '/login',
        component: Main,
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/home.vue'),
            },
        ]
    };

export const routers = [
    mainRouter
];
