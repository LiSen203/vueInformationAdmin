<template>
  <div class="list">
    <el-form inline>
      <el-form-item label="用户名">
        <el-input v-model="search.username" placeholder="请输入用户名" size="medium" suffix-icon="el-icon-date"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" icon="el-icon-search">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" icon="el-icon-circle-plus" @click="add(item)">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="loading" :data="list" border>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="id" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="机构" prop="compnay"></el-table-column>
      <el-table-column label="邮箱" prop="email"></el-table-column>
      <el-table-column label="手机" prop="phone"></el-table-column>
      <el-table-column label="用户组" prop="role"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" icon="el-icon-edit" @click="edit(scope)">编辑</el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="delItem(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-button type="danger" disabled="disabled">批量删除</el-button>
      <el-pagination
        :total="total"
        :page-size="param.pageSize"
        background
        layout="prev, pager, next"
        @current-change="sizeChange">
      </el-pagination>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      title="编辑"
      width="30%"
      center>
      <el-form label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="item.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="item.password" auto-complete="off" type="password"></el-input>
        </el-form-item>
        <el-form-item label="机构">
          <el-input v-model="item.compnay"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="item.email"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="item.phone"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-input v-model="item.role"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button>取消</el-button>
        <el-button type="primary">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogADD"
      title="新增"
      width="30%"
      center>
      <el-form label-width="60px">
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input auto-complete="off" type="password"></el-input>
        </el-form-item>
        <el-form-item label="机构">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input></el-input>·
        </el-form-item>
        <el-form-item label="角色">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogADD=false">取消</el-button>
        <el-button type="primary">提交</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { UserList } from '@/api/table'

export default {
  name: 'UserList',
  data() {
    return {
      list: [],
      dialogVisible: false,
      dialogADD: false,
      loading: false,
      item: {},
      total: 0,
      search: {
        username: ''
      },
      param: {
        page: 1,
        pageSize: 15
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      UserList(this.param).then(res => {
        this.loading = false
        this.total = res.total
        this.list = res.list
      })
    },
    sizeChange(val) {
      this.param.page = val
      this.getList()
    },
    edit(item) {
      this.item = item.row
      this.dialogVisible = true
    },
    add(item) {
      this.dialogADD = true
    },
    handleClose() {},
    delItem(item) {
      this.$confirm('你确定删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.loading = true
        UserList({ id: item.row.id }).then(res => {
          this.loading = false
          this.list = res.list
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        })
      }).catch(() => {

      })
    }
  }
}
</script>
<style>
.list {
    margin: 15px;
}
.page {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
}
</style>
