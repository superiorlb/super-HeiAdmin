import request from "../utils/request";
export const getAdminList = () => request({
    url: '/admin/list',
    method: 'get',
})
export const getRoleList = () => request({
    url: '/role/list',
    method: 'get',
})
export const getMessageList = () => request({
    url: '/message/list',
    method: 'get',
})
export const login = () => request({
    url: '/login',
    method: 'post',
})