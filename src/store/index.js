import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'

Vue.use(Vuex)

/** 状态定义 */
export const state = {
  loading: false,
  themeObj: {
    user_start: '',      // 用户名
    head_portrait: '',   // 头像
    center_smailimg: '', // 右侧小背景
    top_image: '',       // banner
  },//主题
  keywords:'',//关键词
  errorImg: 'this.onerror=null;this.src="' + require('../../static/img/tou.jpg') + '"',
  baseURL:'http://localhost:7777/'
}

export const mutations = {
    
    /**
     *  修改state的mutation方法
        每一个mutation方法都有对用的参数
        参数一 state  指的是当前vuex中state对象
        参数二 payload(形参)  载荷 提交mutations方法的时候传递的参数(任何形式的任何类型的值
     */
    saveOrUpdateThemeObj(state, payload) {
      // Object.assign()
      state.themeObj = payload;
    }
}

export default new Vuex.Store({
    state,
    mutations,
})
