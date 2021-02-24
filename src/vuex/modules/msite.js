/**
 * 首页模块相关数据管理
 */

import {
    reqAddress,
    reqFoodsCategorys,
    reqShops,
} from '../../api/index.js'

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
} from '../mutation-types.js'

export default {
    state:{
        latitude: 40.10038, // 纬度
        longitude: 116.36867, // 经度
        address: {}, // 地址信息对象
        categorys: [], // 分类数组
        shops: [], //商家数组
    },
    mutations:{
        [RECEIVE_ADDRESS] (state,address){          // 这个state是当前模块自己的state
            state.address = address
        },
        [RECEIVE_CATEGORYS] (state,categorys){
            state.categorys = categorys
        },
        [RECEIVE_SHOPS] (state,shops){
            state.shops = shops
        },
    },
    actions:{
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
    },
    getters:{}
}