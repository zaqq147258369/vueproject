import * as types from "./mutations-type";

export default {
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
        // Vue.delete(state.info,'address')
        // state.info['age'] = 22
        state.info.name = '22222'
    }
}