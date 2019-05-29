<template>
    <div class="margin40">
        <h1 class="bgBlue">标题</h1>
        <div class="mainText">
            内容
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
