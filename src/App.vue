<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <router-link to="/home" tag="button">首页</router-link>-->
<!--    <router-link to="/about" tag="button">关于</router-link>-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
<!--    <router-link :to="'/user/'+userId" tag="button">我的</router-link>-->
<!--    <router-link to="/profile">档案</router-link>-->
<!--    <router-link :to="{path:'/profile',query:{-->
<!--      name:'zhangsan',-->
<!--      age:'12',-->
<!--      height:'1.33'-->
<!--    }}">档案</router-link>-->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      userId:'zhangsan'
    }
  },
  methods:{
    homeClick(){
      console.log("首页点击");
      this.$router.replace('/home')
    },
    aboutClick(){
      console.log("about点击");
      this.$router.replace('/about')
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'xxx',
          age:14,
          height:'555'
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
