<template>
    <div class="margin40">
        <h1 class="bgBlue">我理解的vue的路由</h1>
        <div class="mainText">
            vue的路由是什么。
        </div>
        <div class="mainText">
            vue的官方路由依赖是vue router 用这个可以很简单的构建出单页面应用（spa）<br />
            步骤一：将vue-router 引入，然后将组件components 映射到路由。其实就是使用"<router-view>" 这个标签进行路由的展示<br />
        </div>
    </div>
</template>

<script>
export default {
    name: 'code1',
    computed: {
    },
    data() {
        return {

        }
    },
    methods: {
        init () {
            // this.routerList = this.$router.options.routes[2].children; // 获取作者相关的 所有路由路径。
        },
    },
    mounted () {
        this.init();
    }
}
</script>
<style lang="scss" scoped>

</style>
