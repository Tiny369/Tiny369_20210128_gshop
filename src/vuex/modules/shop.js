/**
 * 商家模块相关数据管理
 */
import Vue from 'vue'

import {
    reqGoods,
    reqRatings,
    reqInfo
} from '../../api/index.js'

import {
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    ADD_FOOD_COUNT,
    REDUCE_FOOD_COUNT
} from '../mutation-types.js'

export default {
    state:{
        goods: [], // 商品列表
        ratings: [], // 商家评价列表
        info: {}, // 商家信息
    },
    mutations:{
        [RECEIVE_GOODS] (state,{goods}){
            state.goods = goods
        },
        [RECEIVE_RATINGS] (state,{ratings}){
            state.ratings = ratings
        },
        [RECEIVE_INFO] (state,{info}){
            state.info = info
        },
    
        [ADD_FOOD_COUNT] (state,{food}){
            // food.name = 'tiny'
            if(food.count){     // food有count
                food.count++
            }else{
                // 如果food中没有count,给food添加count属性,值为1
                // 问题:给响应式对象添加一个新的属性,没有数据绑定效果(不是响应式的)
                // food.count = 1
                // 解决：给响应式对象添加一个响应式属性
                // Vue.set(target,key,value)
                Vue.set(food,'count',1)
            }
        },
        [REDUCE_FOOD_COUNT] (state,{food}){
            if(food.count > 0){     // 只有数量大于0时
                food.count--
            }
        },
    },
    actions:{
        // 异步获取商家商品列表
        async getGoods ({commit},cb){
            let result = await reqGoods()
            if(result.code === 0){
                let goods = result.data
                commit(RECEIVE_GOODS,{goods})
                typeof cb === 'function' && cb()
            }
        },
        // 异步获取商家评价列表
        async getRatings ({commit},cb){
            let result = await reqRatings()
            if(result.code === 0){
                let ratings = result.data
                commit(RECEIVE_RATINGS,{ratings})
                typeof cb === 'function' && cb()
            }
        },
        // 异步获取商家信息
        async getInfo ({commit},cb){
            let result = await reqInfo()
            if(result.code === 0){
                let info = result.data
                commit(RECEIVE_INFO,{info})
                typeof cb === 'function' && cb()
            }
        },

        // 更新food中的数量的同步action
        updateFoodCount ({commit},{isAdd,food}){
            if(isAdd){
                commit(ADD_FOOD_COUNT,{food})
            }else{
                commit(REDUCE_FOOD_COUNT,{food})
            }
        },
    },
    getters:{}
}

