export default {
    state:{
        name:'模块内的name'
    },
    mutations:{
        updateName(state,payload){
            state.name = payload
        }
    },
    actions:{

    },
    getters:{
        fullnanme(state){
            return state.name + 'xxx'
        },
        fullname2(state,getters,rootState){
            getters.fullname + rootState.counter
        }
    }
}