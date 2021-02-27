/**
 * 使用mockjs提供mock接口数据
 */

import Mock from 'mockjs'
import data from './data.json'  // 得到的是js对象(自动解析好的)
import shops from './shops.json'

//定义mock接口
Mock.mock('/api/goods',{code:0,data:data.goods})
Mock.mock('/api/ratings',{code:0,data:data.ratings})
Mock.mock('/api/info',{code:0,data:data.info})

// 根据请求在id参数返回对应的商家数据
Mock.mock(/^\/api\/shop\/\d+$/,function(options){   // /api/shop/12
    // 得到请求params参数id
    let id = options.url.substring(10)
    // 找到对应shops
    let shop = shops.find(shop => shop.id==id)
    console.log('/api/shop',shops,id,options,shop || shops[0],shops[0]);
    // 返回一个动态数据
    return Mock.mock({code:0,data:shop || shops[0]})
}) 


console.log('MockData...')  

// 不用暴露
// export default