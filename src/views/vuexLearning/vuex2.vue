<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="deleteition">-</button>
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