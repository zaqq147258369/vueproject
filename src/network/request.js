import axios from "axios";

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

// export function request(config,success,error){
//     //创建axios的实例
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     //发送真正的网络请求。
//     instance(config)
//         .then(res=>{
//             success(res)
//         })
//         .catch(err=>{
//             error(err)
//         })
// }

// export function request(config){
//     return new Promise((resolve, reject)=>{
//         const instance = axios.create({
//             baseURL:'http://123.207.32.32:8000',
//             timeout:5000
//         })
//         //发送真正的网络请求。
//         instance(config)
//             .then(res=>{
//               resolve(res)
//             })
//             .catch(err=>{
//                 reject(err)
//             })
//     })
// }

export function request(config){
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    // 请求拦截
    instance.interceptors.request.use(config=>{
        // console.log(config);
        // 使用原因
        // 1、config进行一些数据处理
        // 2、每次发送请求时，进行请求动画
        // 3、某些网络请求（登录（token）），必须携带信息
        return config
    },error => {
        console.log(error);
    })

    // 响应拦截
    instance.interceptors.response.use(res=>{
        console.log(res);
        return res.data
    },error => {
        console.log(error);
    })
    //发送真正的网络请求。
    return instance(config)
}

