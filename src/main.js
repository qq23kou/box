import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
// Vue.use(VueRouter);
// const Routers = [
//     {
//         path:"/index",
//         name:"index",
//         component:() => import('@/views/index')
//     },
//     {
//         path:"/about",
//         name:"about",
//         component:() => import('@/views/about')
//     },
// ]
// const routerBox = {
//     routes:Routers
// }
// const router = new VueRouter(routerBox);
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
