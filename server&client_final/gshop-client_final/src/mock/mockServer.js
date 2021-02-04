/* 
使用mockjs定义mock接口的模块
*/
import Mock from 'mockjs'

import data from './data.json'  // js对象


// 定义mock接口: goods
Mock.mock('/4000/goods', {code: 0, data: data.goods})

// 定义mock接口: ratings
Mock.mock('/4000/ratings', {code: 0, data: data.ratings})

// 定义mock接口: info
Mock.mock('/4000/info', {code: 0, data: data.info})

console.log('mockServer...')
// 不用向外暴露任何东西