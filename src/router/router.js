export const loginRouter = {
    path: '/index',
    name: 'index',
    component:() => import('@/views/index'),
};
export const mainRouter = {
    path: '/about',
    name: 'about',
    component:() => import('@/views/about')
};
export const routers = [
    mainRouter,
    loginRouter
];
