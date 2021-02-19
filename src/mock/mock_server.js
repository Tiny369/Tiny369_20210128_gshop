/**
 * 使用mockjs提供mock接口数据
 */

import Mock from 'mockjs'
import data from './data.json'  // 得到的是js对象(自动解析好的)

//定义mock接口
Mock.mock('/api/goods',{code:0,data:data.goods})
Mock.mock('/api/ratings',{code:0,data:data.ratings})
Mock.mock('/api/info',{code:0,data:data.info})

console.log('MockData...')  

// 不用暴露
// export default