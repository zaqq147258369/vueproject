<template>
  <div>
    <h2>xxxxx</h2>
    <h2>{{userId}}</h2>
    <button @click="btnClick">查询</button>
  </div>
</template>

<script>
export default {
  name: "User",
  data(){
    return{

    }
  },
  computed:{
    userId (){
      //$route代表当前活跃的url。
      return this.$route.params.userId
    }
  },
  methods:{
    btnClick(){
      //所有的组件都继承自Vue类的原型
      console.log(this.$router);
      console.log(this.$route);
      this.test();
    }
  }
}
</script>

<style scoped>

</style>