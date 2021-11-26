<template>
  <div>
    <h2>xxxxx</h2>
    <h2>{{userId}}</h2>
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
  }
}
</script>

<style scoped>

</style>