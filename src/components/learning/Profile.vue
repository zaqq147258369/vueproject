<template>
  <div>
    <h2>Profile的组件</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.height }}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>