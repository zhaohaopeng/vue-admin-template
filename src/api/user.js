import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/LoginSuccess',
    method: 'get',
    params
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export function logout(data) {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post',
    data
  })
}
