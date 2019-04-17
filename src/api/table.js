import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

export function UserList(data) {
  return request({
    url: '/user/list',
    method: 'post',
    data
  })
}

export function delUser(data) {
  return request({
    url: '/user/delUser',
    method: 'post',
    data
  })
}

export function roleList(data) {
  return request({
    url: '/role/rolelist',
    method: 'post',
    data
  })
}
