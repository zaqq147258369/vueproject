import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false
//向Vue原型上添加属性，可全局使用。
Vue.prototype.test = function (){
  console.log('test');
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

console.log(router);