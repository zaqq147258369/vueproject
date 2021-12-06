<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="deleteition">-</button>
    <h2>mutation的传参数操作</h2>
    <button @click="addCount(10)">++</button>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改内容</button>
    <h2>getters的操作</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h1>{{$store.getters.morget(222)}}</h1>

    <h3>获取store中module中的值</h3>
    <h2>{{$store.state.a.name}}</h2>

  </div>
</template>

<script>
import {INCREMENT} from "@/store/mutations-type";
export default {
  name: "vuex2",
  methods:{
    addition(){
      this.$store.commit(INCREMENT)

    },
    deleteition(){
      this.$store.commit('decrement')
    },
    addCount(count){
      // 1、普通的提交方式
      // this.$store.commit('incrementCount',count)

      // 2、特殊的提交方式,提交之后是一个对象
      this.$store.commit({
        type:'incrementCount2',
        count:count
      });
    },
    updateInfo(){
      //mutation的操作，同步
      // this.$store.commit('updateInfor');
      // action的操作，异步操作1
     // this.$store.dispatch('aUpdateInfor', {
     //   message:'1111',
     //   success:()=>{
     //     console.log('6666');
     //   }
     // });
      // action的操作，异步操作2
      this.$store.dispatch('aUpdateInfor','2222').then(res=>{
            console.log(res);
          });
    }
  }
}
</script>

<style scoped>

</style>