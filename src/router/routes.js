/**
 * 所有路由配置的数组
 */

// 静态引入：打包时引入
/* import Msite from '../pages/MSite/MSite.vue'    // 静态引入：打包时引入
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue' */

/**
 * 路由组件懒加载：
 *      1.在打包时路由组件会被单独打包(代码分割：code split)
 *      2.默认不请求加载路由组件打包文件，当请求需要路由组件时才请求加载
 *      
 * 1.import动态引入：
 *      import(模块路径)
 *      结果：被引入的模块会被单独打包(代码分割：code split)
 * 2.配置的路由组件是函数(返回动态加载的路由组件模块)
 *      函数开始是不执行(开始不加载【请求】单独打包的路由组件模块代码)
 *      当请求对应路径需要显示组件界面时，去加载路由组件打包文件
 * 
 * 作用：减小首屏需要加载的js文件 ==> 显示更快(用户体验更好)
 */
let Msite = () =>  import('../pages/MSite/MSite.vue')    // 动态引入
let Search = () => import('../pages/Search/Search.vue')
let Order = () => import('../pages/Order/Order.vue') 
let Profile = () => import('../pages/Profile/Profile.vue') 

import A from '../pages/test/A.vue'
import B from '../pages/test/B.vue'
import B1 from '../pages/test/B1.vue'
import B2 from '../pages/test/B2.vue'


import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import Goods from '../pages/Shop/Goods.vue'
import Ratings from '../pages/Shop/Ratings.vue'
import Info from '../pages/Shop/Info.vue'


import Review from '../pages/Review/Review.vue'
import SlotTest from '../pages/Review/SlotTest/SlotTest.vue'
import MixinTest from '../pages/Review/MixinTest/MixinTest.vue'
import ComponentTest from '../pages/Review/ComponentTest/ComponentTest.vue'
import EventTest from '../pages/Review/EventTest/EventTest.vue'
import ModelTest from '../pages/Review/ModelTest/ModelTest.vue'
import ReactiveTest from '../pages/Review/ReactiveTest/ReactiveTest.vue'

export default [
    {
        path:'/msite',
        component:Msite,
        meta:{
            isFooterGuide:true
        }
    },
    {
        path:'/search',
        component:Search,
        meta:{
            isFooterGuide:true
        }
    },
    {
        path:'/order',
        component:Order,
        meta:{
            isFooterGuide:true
        }
    },
    {
        path:'/profile',
        component:Profile,
        // component:() => import('../pages/Profile/Profile.vue'),
        meta:{
            isFooterGuide:true
        }
    },
    {
        path:'/login',
        component:Login
    },
    {
        name:'shop',
        path:'/shop/:id',
        props:true ,// 将所有params参数转换成标签属性传递给子路由组件
        // props: toRoute => ({id:toRoute.params.id}),
        component:Shop,
        children:[
            {
                // path:'/shop/goods',
                path:'goods',
                component:Goods
            },
            {
                // path:'/shop/ratings',
                path:'ratings',
                component:Ratings
            },
            {
                // path:'/shop/info',
                path:'info',
                component:Info
            },
            /* {
                path:'',
                redirect:'/shop/goods'
            }, */
            {
                path:'',
                // redirect:'/shop/:id/goods'
                redirect:'goods'
            },
        ]
    },

    {
        path:'/a',
        component:A
    },
    {
        path:'/b',
        component:B,
        children:[
            {
                path:'/b/B1',
                component:B1
            },
            {
                path:'/b/B2',
                component:B2
            },
        ]
    },

    {
        path:'/',
        redirect:'/msite'
    },



    {
        path:'/review',
        component:Review,
        children:[
            {
                path: '/review/slot',
                component: SlotTest
            },
            {
                path: '/review/mixin',
                component: MixinTest
            },
            {
                path: '/review/component',
                component: ComponentTest
            },
            {
                path: '/review/event',
                component: EventTest
            },
            {
                path: '/review/model',
                component: ModelTest
            },
            {
                path: '/review/reactive',
                component: ReactiveTest
            },

            
        ]
    }
    
]