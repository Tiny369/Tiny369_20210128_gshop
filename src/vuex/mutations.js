/**
 * 包含N个用于直接更新状态数据的方法的对象
 * 方法不可以包含异步和逻辑处理代码
 */

 //引入常量
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types.js'


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
 }