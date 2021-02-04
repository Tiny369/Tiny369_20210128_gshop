import Vue from 'vue'
import 'lib-flexible'

import App from './App.vue'
import router from './router/index.js'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import store from './vuex/store.js'



//取消生产环境的提示
Vue.config.productionTip = false
//注册全局组件
Vue.component('Header',Header)
Vue.component('Star',Star)

new Vue({
    // components:{
    //     App
    // },
    // template:'<App />'   //在脚手架3版本里 必须去vue.config.js配置，runtimeCompiler可支持编译为true
    render:h => h(App),
    router,      //配置router，所有组件都能看到$router和$route,路由器和路由  <router-link>和<router-view/>
    store       // 所有组件都能看到: $store
}).$mount('#app')