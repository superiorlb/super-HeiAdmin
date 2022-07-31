import Cookies from 'js-cookie'
/**
 * 设置token
 * @param {*} token token信息
 * @param {*} name 存储名字
 * @param {*} expires 过期时间
 */
export const setToken = (token, name = 'token', expires = 2) => {
    Cookies.set(name, token, { expires })
}

/**
 * 获取token
 * @param {*} name 要获取的存储名字
 */
export const getToken = (name = 'token') => Cookies.get(name)

/**
 * 
 * @param {*} name 要移除的存储名字
 */
export const removeToken = (name = 'token') => {
    Cookies.remove(name)
}