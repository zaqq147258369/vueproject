import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "../components/learning/Home";
import About from "../components/learning/About";
import User from "../components/learning/User";
const Profile = () => import('../components/learning/Profile')
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
        meta:{
          title:'首页'
        },
        children:[
            {
                path: '',
                redirect:'news'
            },
            {
                path:'news',
                component:()=>import('../components/learning/HomeNew')
            },
            {
                path: 'message',
                component:()=>import('../components/learning/HomeMessage')
            }
        ]
    },{
        path:'/about',
        component: About,
        meta:{
            title:'关于'
        },
        //路由独享守卫
        beforEnter:(to,from,next)=>{
            next();
        }
    },{
        path: '/user/:userId',
        component: User,
        meta:{
            title:'个人'
        },
    },{
        path: '/profile',
        component: Profile
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
//全局守卫：
// 前置守卫（guard）
router.beforeEach((to,from,next)=>{
    //从from跳转到to
    //路由导航，导航守卫
    document.title = to.matched[0].meta.title
    next();
})
// 后置钩子（hook）
router.afterEach((to,from) =>{
    console.log(to);
    console.log(from);
    console.log('....');
})

//将router对象传入到Vue实例
export default router

