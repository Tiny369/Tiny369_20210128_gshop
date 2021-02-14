/**
 * 所有路由配置的数组
 */
import Msite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import Goods from '../pages/Shop/Goods.vue'
import Ratings from '../pages/Shop/Ratings.vue'
import Info from '../pages/Shop/Info.vue'

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
        meta:{
            isFooterGuide:true
        }
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/shop',
        component:Shop,
        children:[
            {
                path:'/shop/goods',
                component:Goods
            },
            {
                path:'/shop/ratings',
                component:Ratings
            },
            {
                path:'/shop/info',
                component:Info
            },
            {
                path:'',
                redirect:'/shop/goods'
            },
        ]
    },

    {
        path:'/',
        redirect:'/msite'
    },
    
]