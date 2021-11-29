<template>
  <div>
    <h2>首页</h2>
    <p>首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      path:'/home/news'
    }
  },
  created() {//组件内的创建。
    document.title = '首页';
    this.$router.push(this.path)
  },
  destroyed() {//组件销毁
    console.log('销毁');
  },
  activated() { //该函数只要当组件被保持了keep-alive才能被执行。
    this.$router.push(this.path)
  },
  beforeRouteLeave(to,from,next){
    this.path = this.$route.path;
    next();
  }
}
</script>

<style scoped>

</style>