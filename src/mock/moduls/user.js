/* 
 * 用户管理模块
 */

// 保存
export function save() {
  return {
    url: 'http://localhost:8080/user/save',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}// 删除
export function del() {
  return {
    url: 'http://localhost:8080/user/delete',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// 分页查询
export function findPage() {
  return {
    url: 'http://localhost:8080/user/findPage',
    type: 'post',
    data: findPageData
  }
}