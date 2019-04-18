import Mock from 'mockjs'
import userAPI from './user'
import tableAPI from './table'
import articleAPI from './article'
import UserAPI from './moduls/user'
import RoleAPI from './moduls/role'
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}
Mock.setup({
  timeout: '350-600'
})

// User
Mock.mock(/\/user\/login/, 'post', userAPI.login)
Mock.mock(/\/user\/info/, 'get', userAPI.getInfo)
Mock.mock(/\/user\/logout/, 'post', userAPI.logout)
Mock.mock(/\/article\/list/, 'post', articleAPI.getList)
Mock.mock(/\/user\/list/, 'post', UserAPI.UserList)// 用户列表
Mock.mock(/\/user\/delUser/, 'post', UserAPI.delUser)// 删除
Mock.mock(/\/role\/rolelist/, 'post', RoleAPI.roleList)// 角色权限列表

// Table
Mock.mock(/\/table\/list/, 'get', tableAPI.list)

export default Mock
