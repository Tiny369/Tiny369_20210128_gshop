
/**
 * 包含N个用于间接更新状态数据的方法的对象
 * 方法可以包含异步和逻辑处理代码
 */

 // 引入接口请求函数
 import {reqAddress,reqFoodsCategorys,reqShops,reqAutoLogin} from '../api/index.js'
 //引入常量
 import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_TOKEN,RECEIVE_USER,RESET_USER,RESET_TOKEN} from './mutation-types.js'

export default {
    /*
    获取当前地址信息对象的异步action
    */
    async getAddress ({commit,state}){
        const {latitude,longitude} = state
        // 发异步请求
        const result = await reqAddress(latitude,longitude)
        // 请求成功后,提交给mutation
        if(result.code === 0){
            /**
             * response的data时axios定义的
             * result的data是后台工程师定义的
             */
            const address = result.data
            commit(RECEIVE_ADDRESS,address)
        }
    },

    /*
    获取商品分类数组的异步action
    */
    async getCategorys ({commit},callback){
        // 发异步请求
        const result = await reqFoodsCategorys()
        // 请求成功后,提交给mutation
        if(result.code === 0){
            /**
             * response的data时axios定义的
             * result的data是后台工程师定义的
             */
            const categorys = result.data
            commit(RECEIVE_CATEGORYS,categorys)     //内部同步调用mutation更新状态数据
            //在数据更新之后调用回调函数
            typeof callback === 'function' && callback()
        }
    },

    /*
    获取商家数组的异步action
    */
    async getShops ({commit,state}){
        const {latitude,longitude} = state
        // 发异步请求
        const result = await reqShops({latitude,longitude})
        // 请求成功后,提交给mutation
        if(result.code === 0){
            /**
             * response的data时axios定义的
             * result的data是后台工程师定义的
             */
            const shops = result.data
            commit(RECEIVE_SHOPS,shops)
        }
    },

    /**
     * 保存用户
     */
    saveUser({commit},user) {
        const token = user.token
        // 将token保存local
        localStorage.setItem('token_key',token)
        
        delete user.token   //删除user内部的token
        // 将token保存到state
        commit(RECEIVE_USER,{user})
        // 将user保存到state
        commit(RECEIVE_TOKEN,{token})
    },

    /**
     * 自动登录的异步action
     */
    async autoLogin ({commit,state}) {
        if(state.token && !state.user._id){     // 必须要有token且没有user信息
            // 发送自动登录的请求
            let result = await reqAutoLogin()
            if(result.code === 0){
                let user = result.data  // 没有token
                commit(RECEIVE_USER,{user})
            }
        }
    },

    logout ({commit}) {
        localStorage.removeItem('token_key')
        commit(RESET_USER)
        commit(RESET_TOKEN)
    }

}