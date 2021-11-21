<template>

</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped>

</style>

编译作用域

作用域插槽：准备
父组件替换插槽的标签，但是内容由子组件来提供

子组件使用 :data="xxx",
父组件 使用接受data

匿名函数：
;(function(){

})() // 这样可以将执行变成自己的作用域，不会造成与其他js内容的冲突

前端模块化：
  模块化的基本封装，在匿名函数中定义一个对象，然后将函数的需要的数据赋值给这个对象，再把对象return出去。其他js就可以通过调用这个对象实现对方法的调用，数据的使用。

模块化的常见规范：
  commonJs，AMD，CMD，ES6中的Modules

模块化的基本核心：导入和导出
CommonJs的导出：
  module.exports = {
    xxx,
    xxx,
    jjj,
  }

ES6的模块导入导出：
  export，import。
导出：
  export var xxx = xxx；

  export {
    xxx，
    ggg
  }

  export function xxx(){
      return xxx+xxx;
  }

ES6中的定义类： 和以前的java中的类方式一样，
  export class Person{
    run(){
      xxx;
    }
  }

var xxx = new Person();
xxx.run();

  export default xxx;
  export default {
      
  }




