<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from "./views/mainTabbar/MainTabbar";
export default {
  name: 'App',
  components: {
    MainTabbar
  },
  data() {
    return {

    }
  },
  methods:{
  }
}
</script>

<style>
  /*在style中引入css*/
  @import "./assets/css/base.css";

</style>
