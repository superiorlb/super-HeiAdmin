import Cookies from 'js-cookie'
/**
 * 设置token
 * @param {*} token token信息
 * @param {*} name 存储名字
 */
export const setToken = (token, name = 'token') => {
    Cookies.set(name, token)
}

/**
 * 获取token
 * @param {*} name 要获取的存储名字
 */
export const getToken = (name = 'token') => {
    Cookies.get(name)
}

/**
 * 
 * @param {*} name 要移除的存储名字
 */
export const removeToken = (name = 'token') => {
    Cookies.remove(name)
}