<template>
  <div></div>
</template>

<script>
export default {
  name: "promise1",
  methods:{
    promiselearn(){
      // console.log('promise');
      //参数=>函数（resolve，reject）。resolve和reject本身就是函数
      // 链式编程
      //什么时候需要用到promise，一般是有异步操作是，使用promise对异步操作进行封装
      new Promise((resolve)=>{
        setTimeout(()=>{
          resolve()
        },1000)
      }).then(()=>{
        console.log('hello world');
        return new Promise((resolve)=>{
          setTimeout(()=>{
            resolve()
          },1000)
        })
      }).then(()=>{
        console.log('hello world111');
        return new Promise((resolve)=>{
          setTimeout(()=>{
            resolve()
          },1000)
        })
      }).then(()=>{
        console.log('hello world222');
      })
    },
    promiselearn2(){
      //学习promise，在promise内执行网络请求，但是对请求回的数据进行操作需要放到 .then() 当中执行，在promise内使用resolve(data) ,将data数据传到.then()中
      //Promise三种状态，
      new Promise((resolve, reject)=>{
        setTimeout((data)=>{
          //成功的时候调用resolve
          resolve(data)

          //失败的时候调用reject
          reject()
        },100)
      }).then((data)=>{
        console.log(data + 'success');
      }).catch(()=>{
        console.log('error');
      })
    },
    promiselearn3(){
      //promise的另一种写法
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('111');
          reject('222');
        })
      }).then((data)=>{
        console.log(data);
      },err=>{
        console.log(err);
      })
    },
    promiselearn4(){
      //Promise的链式调用
      // 网络请求
      new Promise((resolve)=>{
        setTimeout(()=>{
          resolve('aaa')
        },1000)
      }).then((res)=>{
        console.log(res,"首次处理");
        return Promise.resolve(res + "111");
      }).then(data =>{
        console.log(data+'第二次处理代码');
      })
    },
    promiselearn5(){
      new Promise((resolve)=>{
        setTimeout(()=>{
          resolve('aaa')
        },1000)
      }).then((res)=>{
        console.log(res,"首次处理");
        return res + "222";
      }).then(res =>{
        console.log(res+'第二次处理代码');
        // return res + '333'
        // eslint-disable-next-line no-unreachable
        throw 'err message'
      }).then((res)=>{
        console.log(res+'第三次处理代码');
      }).catch((err)=>{
        console.log(err);
      })
    }
  },
  mounted() {
    // this.promiselearn();
    // this.promiselearn4();
    this.promiselearn5();
  }
}
</script>

<style scoped>

</style>