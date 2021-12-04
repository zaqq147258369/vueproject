<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="deleteition">-</button>

    <h2>getters的操作</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h1>{{$store.getters.morget(222)}}</h1>
  </div>
</template>

<script>
export default {
  name: "vuex2",
  methods:{
    addition(){
      this.$store.commit('increment')

    },
    deleteition(){
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped>

</style>