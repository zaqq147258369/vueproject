<template>
  <div>
    <div>首页</div>
    <promise1></promise1>
    <vuex v-show="false"></vuex>
    <axioslearn></axioslearn>
    <div class="red">
      sass学习
    </div>
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

<style scoped lang="scss">
  $color:red;
  .red{
    color:$color;
    text-align: center;
    margin-top: 50px;
    border{
      color: aqua;
      style:solid;
      width: 2px;
    };
  }

</style>