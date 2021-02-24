/**
 * vuex最核心的管理对象store
 */

import Vue from 'vue'
import Vuex from 'vuex'

// import state from './state.js'
// import mutations from './mutations.js'
// import actions from './actions.js'
// import getters from './getters.js'
import msite from './modules/msite.js'
import user from './modules/user.js'
import shop from './modules/shop.js'

Vue.use(Vuex)      //使用vuex

export default new Vuex.Store({
  // state,  
  // mutations,  // 总的mutations，它内部看到的就是总的state
  // actions,    // 总的actions，它内部看到的就是总的actions
  // getters,
  modules:{
    msite,
    user,
    shop
  }
})

// **********************************************
/**
 * 总的state的结构：
 * {
 *  msite:{a:1},
 *  user:{b:'tiny'},
 *  shop:{c:[]},
 * }
 */