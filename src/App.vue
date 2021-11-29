<template>
  <div id="app">
    <tar-bar>
      <tab-bar-item>
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/icon01.png" alt="">
        </template>
        <template v-slot:item-text>
          <div >首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item>
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/icon01.png" alt="">
        </template>
        <template v-slot:item-text>
          <div >首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item>
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/icon01.png" alt="">
        </template>
        <template v-slot:item-text>
          <div >首页</div>
        </template>
      </tab-bar-item>
    </tar-bar>
  </div>
</template>

<script>
import TarBar from "./components/TabBar/TarBar";
import TabBarItem from "./components/TabBar/TabBarItem";
export default {
  name: 'App',
  components: {
    TarBar,
    TabBarItem
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
