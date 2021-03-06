import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
    // components:{
    //     App
    // },
    // template:'<App />'   //在脚手架3版本里 必须去vue.config.js配置，runtimeCompiler可支持编译为true
    render:h => h(App),
    router      //配置router，所有组件都能看到$router和$route,路由器和路由  <router-link>和<router-view/>

}).$mount('#app')