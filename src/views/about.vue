<style lang="less">
</style>
<template>
    <div>
        子组件about
        <div @click="click">点击跳转其他的组件</div>
    </div>
</template>
<script>
    export default {
        components: {
        },
        data () {
            return {
            }
        },
        methods: {
            init () {
            },
            click(){
                this.$router.replace({name: 'index'})
            }
        },
        mounted () {
            this.init();
        }
    }
</script>

