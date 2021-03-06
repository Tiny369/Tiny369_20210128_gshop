/**
 * 向外暴露路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import store from '../vuex/store.js'

//声明使用vue插件
Vue.use(VueRouter)



let router = new VueRouter({
    mode:'history',     //路由路径没有#

    //项目中所有路由
    routes

})

/* 功能：进入a/b必须登录，如果没有登录自动跳转到登录 */ 
let paths = ['/a','/b'] // 所有需要进行登录检查的路由路径数组
// 定义全局前置守卫
router.beforeEach((to,from,next)=>{
    console.log('global beforeEach()');
    // 如果请求的路由路径需要检查
    let path = to.path
    if(paths.indexOf(path)!==-1){
        // 如果没有登录，强制跳转到登录界面
        if(!store.state.user.token){
            next('/login')
            return
        }
    }
    // 其他情况，放行 (1.不需要检查 2.需要检查但你已经登录了)
    next()
})

export default router