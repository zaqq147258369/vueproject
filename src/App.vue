<template>
  <div id="app">
    <tar-bar></tar-bar>
  </div>
</template>

<script>
import TarBar from "./components/TabBar/TarBar";
export default {
  name: 'App',
  components: {
    TarBar
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
