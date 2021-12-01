<template>
  <div id="app">
    <router-view></router-view>
    <tar-bar>
      <tab-bar-item path="/home" activeColor="#669600">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/icon01.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/icon01_active.png" alt="">
        </template>
        <template v-slot:item-text>
          <div >首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#886960">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/icon02.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/icon02_active.png" alt="">
        </template>
        <template v-slot:item-text>
          <div >分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#119600">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/icon03.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/icon03_active.png" alt="">
        </template>
        <template v-slot:item-text>
          <div >购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/icon04.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/icon04_active.png" alt="">
        </template>
        <template v-slot:item-text>
          <div >个人</div>
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
