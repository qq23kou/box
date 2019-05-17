import Vue from 'vue'
import VueRouter from 'vue-router'
import {routers} from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    routes: routers,
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
});
router.afterEach((to) => {
    // window.scrollTo(0, 0);
});
