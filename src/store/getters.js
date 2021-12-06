export default {
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
}