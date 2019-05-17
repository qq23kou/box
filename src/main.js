import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// 创建一个vue实例，通过$mount 挂载到 名字#app 的id 上。
// 因为js引入了App 这个组件，所以那个页面呈现出来的是app的东西。
new Vue({
    render: h => h(App)
}).$mount('#app')
