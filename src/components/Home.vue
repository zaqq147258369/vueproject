<template>
  <div>
    <h2>首页</h2>
    <p>首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {//组件内的创建。
    document.title = '首页'
  }
}
</script>

<style scoped>

</style>