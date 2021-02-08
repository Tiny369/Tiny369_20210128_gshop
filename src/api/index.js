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

// 4、发送短信验证码
export const reqSendCode = (phone) => axios.get('/sendcode',{
    // url:'/sendcode'
    params:{
        phone
    }
})

// 5、用户名密码登陆
export const reqPwdLogin = ({name,pwd,captcha}) => axios.post('/login_pwd',{name,pwd,captcha})

// 6、手机号验证码登陆
export const reqSmsLogin = ({phone,code}) => axios.post('/login_sms',{phone,code})


