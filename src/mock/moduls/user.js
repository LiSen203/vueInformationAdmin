import Mock from 'mockjs'

const role = ['管理员', '超级管理员', '编辑员']
const userList = Mock.mock({
  'user|100': [
    { id: '@increment()', name: '@cname', compnay: '@province', email: '@email()', phone: '@ip', 'role|1': role }
  ]
})

export default {
  UserList: config => {
    const { page = 1, pageSize = 15, id } = JSON.parse(config.body)
    const list = userList
    let pageList = list.user.filter((item, index) => index < pageSize * page && index >= pageSize * (page - 1))
    if (id) pageList = pageList.filter(item => item.id !== id)
    return {
      total: list.user.length,
      list: pageList,
      code: 0
    }
  }
}
