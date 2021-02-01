/**
 * 包含N个用于间接更新状态数据的方法的对象
 * 方法可以包含异步和逻辑处理代码
 */

 // 引入接口请求函数
 import {reqAddress,reqFoodsCategorys,reqShops} from '../api/index.js'
 //引入常量
 import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types.js'

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
    async getCategorys ({commit}){
        // 发异步请求
        const result = await reqFoodsCategorys()
        // 请求成功后,提交给mutation
        if(result.code === 0){
            /**
             * response的data时axios定义的
             * result的data是后台工程师定义的
             */
            const categorys = result.data
            commit(RECEIVE_CATEGORYS,categorys)
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

}