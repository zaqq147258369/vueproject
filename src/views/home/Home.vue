<template>
  <div>
    <div>首页</div>
    <promise1></promise1>
    <vuex></vuex>
  </div>

</template>

<script>

import Promise1 from "../promiseLearning/promise1";
import Vuex from "../vuexLearning/vuex";
export default {
  name: "Home",
  components: {Vuex, Promise1},
}
</script>

<style scoped>

</style>