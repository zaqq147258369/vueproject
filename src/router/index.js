import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
//通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//创建VueRouter对象
const routes = [
    {
        path: '',
        //redirect重定向,修改url。
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'news'
            }
        ]
    },{
        path:'/about',
        component: About
    },{
        path: '/user/:userId',
        component: User
    }
]
const router = new VueRouter({
    //配置路由和组件之间的应用关系
    routes,
    //h5的history模式。
    mode:'history',
    //设置活跃的样式。
    // linkActiveClass:''
})

//将router对象传入到Vue实例
export default router

