import Vue from "vue";
import Vuex from 'vuex';
import * as types from './mutations-type'

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
    mutations:{
        // 方法
        [types.INCREMENT](){
            this.state.counter++;
        },
        decrement(){
            this.state.counter--;
        },
        incrementCount(state,count){
            state.counter += count
        },
        // 获取到的data是一个对象，包含组件传来的所有值
        // data包含:{type:'incrementCount2', count:222}
        incrementCount2(state,data){
            state.counter += data.count
        },
        updateInfor(state){
            Vue.delete(state.info,'address')
            // state.info['age'] = 22
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
        momore(getters){
            return getters.more20stu+2
        },
        morget(getters){
            return num => {
                 return getters.momore * num
            }
        }
    },
    modules:{

    }
})

export default store;