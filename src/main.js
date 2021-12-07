import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

Vue.config.productionTip = false
//向Vue原型上添加属性，可全局使用。
Vue.prototype.test = function (){
  console.log('test');
}

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

console.log(router);

//axios的基本使用
// 全局的使用
// axios.defaults.baseURL = 'http://123.207.32.32:8000';
// axios.defaults.timeout = 5000
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res);
// })
//
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params: {
//    type:'pop',
//    page:1
//   }
// }).then(res=>{
//   console.log(res);
// })
//
// //获取多个请求
// axios.all([
//     axios({
//       url:'/home/data',
//       params: {
//         type:'pop',
//         page:1
//       }
//     }),
//     axios({
//       url:'/home/data',
//       params: {
//         type:'pop',
//         page:5
//       }
//     })
// ]).then(res=>{
//   console.log(res);
// })

// // 创建对应axios的实例
// const instance1 = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:1000
// })
// instance1({
//     url:'/home/data',
//     params:{
//         type:'pop',
//         page:1
//     }
// }).then(res=>{
//     console.log(res);
// })
