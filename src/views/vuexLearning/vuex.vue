<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <p>-------------------------------</p>
    <vuex2></vuex2>
  </div>
</template>

<script>
import Vuex2 from "./vuex2";
export default {
  name: "vuex",
  components: {Vuex2}
}
</script>

<style scoped>

</style>