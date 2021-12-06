<template>
  <div>
    <div>首页</div>
    <promise1></promise1>
    <vuex v-show="false"></vuex>
    <axioslearn></axioslearn>
  </div>

</template>

<script>

import Promise1 from "../promiseLearning/promise1";
import Vuex from "../vuexLearning/vuex";
import Axioslearn from "../axiosLearning/Axioslearn";
export default {
  name: "Home",
  components: {Axioslearn, Vuex, Promise1},
}
</script>

<style scoped>

</style>