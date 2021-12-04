import Vue from "vue";
import Vuex from 'vuex';

//安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
    state:{
        counter:100
    },
    mutations:{
        // 方法
        increment(){
            this.state.counter++;
        },
        decrement(){
            this.state.counter--;
        }
    },
    actions:{

    },
    getters:{
        powerCounter(state){
            return state.counter * state.counter
        },
        more20stu(){
            return this.state.counter * 2;
        },
        momore(){
            return this.getters.more20stu+2
        },
        morget(){
            return num => {
                 return this.getters.momore * num
            }
        }
    },
    modules:{

    }
})

export default store;