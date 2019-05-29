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
    name: 'code2',
    computed: {
    },
    data() {
        return {
        }
    },
    methods: {
        init () {
        },
    },
    mounted () {
        this.init();
    }
}
</script>

<style lang="scss" scoped>
.dashboard {
    &-container {
        margin: 30px;
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
</style>
