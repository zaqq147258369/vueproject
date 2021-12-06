import Vue from "vue";
import Vuex from 'vuex';

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
//安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
    state:{
        counter:100,
        info:{
            name:'xxx',
            address:'111'
        }
    },
    mutations,
    actions,
    getters,
    modules:{
        a:moduleA
    }
})

export default store;