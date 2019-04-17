import Mock from 'mockjs'
const beizhu = ['管理员', 'visitor', '编辑员']
const roleList = Mock.mock({
  'role|20': [
    { id: '@increment()', name: '@cname', 'role|1': beizhu, creatuser: 'admin', date: '@datetime()' }
  ]
})
console.log(roleList)
export default {
  roleList: config => {
    const { page = 1, pageSize = 5 } = JSON.parse(config.body)
    const rolelist = roleList
    const pageList = rolelist.role.filter((item, index) => index < pageSize * page && index >= pageSize * (page - 1))
    // if (id) pageList = pageList.filter(item => item.id !== id)
    return {
      total: rolelist.role.length,
      rolelist: pageList,
      code: 0
    }
  }

}

