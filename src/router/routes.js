/**
 * 所有路由配置的数组
 */
import Msite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

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
        path:'/',
        redirect:'/msite'
    },
    
]