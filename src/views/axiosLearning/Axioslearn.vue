<template>
  <div></div>
</template>

<script>
import {request} from "src/network/request";
export default {
  name: "axioslearn",
  created() {
    // this.requestDemo();
    this.requestPromise()
  },
  methods:{
    // requestDemo(){
    //   request({
    //     url:'/home/multidata'
    //   },res=>{
    //     console.log(res);
    //   },err=>{
    //     console.log(err);
    //   })
    // }
    requestPromise(){
      request({
        url:'/home/multidata'
      }).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>

</style>