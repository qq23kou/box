<template>
<div class="main">
    <div class="mine" v-if="!show">
        <p>想了解我，先回答下面的问题吧。</p>
        <el-input class="w260" placeholder="请问卖鱼强的替身的名称是什么。" v-model="password"></el-input>
        <el-button type="primary" size="mini" @click="ok" round>确定</el-button>
    </div>
    <div class="mine" v-if="show">
        欧拉欧拉欧拉欧拉
    </div>
</div>
</template>

<script>
export default {
    name: 'son',
    computed: { // 组件引入
    },
     data() {
        return {
            show: false,
            password: ''
        }
     },
     methods: {
            init () {
            },
            ok (){
                if(this.password == "白金之星"){
                    this.$message({
                        message: '恭喜你回答成功。',
                        type: 'success'
                    });
                    this.show = true;
                }else{
                    this.$message.error('我怀疑你根本不是替身使者。');
                }
            }
        },
        mounted () {
            this.init();
        }
}
</script>

<style lang="scss" scoped>
 @import '../../../styles/main.scss';
</style>
