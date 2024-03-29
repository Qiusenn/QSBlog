<!-- 首页 -->
<template>
    <div>
        <sg-navbar></sg-navbar>
        <div class="container">
            <el-row  :gutter="30">
                <el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
                    <sg-articlelist></sg-articlelist>
                </el-col>
                <el-col :sm="24"  :md="8" >
                    <sg-rightlist></sg-rightlist>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import header from '../components/header.vue'
import articlelist from '../components/articlelist.vue'
import rightlist from '../components/rightlist.vue'
import  { mapMutations } from 'vuex'
    export default {
        name:'Home',
        data() { //选项 / 数据
            return {

            }
        },
        methods: { 
            ...mapMutations(['saveOrUpdateThemeObj']),
            initStoreUserinfo() {
                // 进入页面初始化个人store数据
                const themeObj = {
                    user_start: 'user',
                    head_portrait: ''
                }
                if(localStorage.getItem('userInfo')) {
                    const user_info = JSON.parse(localStorage.getItem('userInfo'));
                    themeObj.user_start = user_info.nickName;
                    themeObj.head_portrait = user_info.avatar;
                }
                this.$store.commit('saveOrUpdateThemeObj',themeObj)
            },
        },
        mounted() {
            this.initStoreUserinfo();
        },
        components: { //定义组件
            'sg-navbar':header,
            'sg-articlelist':articlelist,
            'sg-rightlist':rightlist,
        },
        created() { //生命周期函数

        }
    }
</script>

<style>

</style>
