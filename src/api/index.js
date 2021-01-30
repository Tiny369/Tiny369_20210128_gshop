/**
 * 包含n个接口请求函数的模块
*/

import axios from './ajax.js'

// 1、根据经纬度获取位置详情
export const reqAddress = (latitude,longitude)=> axios(`/position/${latitude},${longitude}`)

// 2、获取食品分类列表
export const reqFoodsCategorys = () => axios('/index_category')

// 3、根据经纬度获取商铺列表
export const reqShops = ({latitude,longitude}) => axios('/shops',{
    params:{ 
        latitude,
        longitude 
    }
})