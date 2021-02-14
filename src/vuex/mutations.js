/**
 * 包含N个用于直接更新状态数据的方法的对象
 * 方法不可以包含异步和逻辑处理代码
 */

 //引入常量
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_TOKEN,RECEIVE_USER,RESET_TOKEN,RESET_USER,RECEIVE_GOODS,RECEIVE_RATINGS,RECEIVE_INFO} from './mutation-types.js'


 export default {
    [RECEIVE_ADDRESS] (state,address){
        state.address = address
    },
    [RECEIVE_CATEGORYS] (state,categorys){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS] (state,shops){
        state.shops = shops
    },

    [RECEIVE_TOKEN] (state,{token}){
        state.token = token
    },
    [RECEIVE_USER] (state,{user}){
        state.user = user
    },

    [RESET_TOKEN] (state){
        state.token = ''
    },
    [RESET_USER] (state){
        state.user = {}
    },

    [RECEIVE_GOODS] (state,{goods}){
        state.goods = goods
    },
    [RECEIVE_RATINGS] (state,{ratings}){
        state.ratings = ratings
    },
    [RECEIVE_INFO] (state,{info}){
        state.info = info
    },

 }