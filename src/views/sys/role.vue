<template>
  <div class="rolelist">
    <el-form :inline="true">
      <el-form-item>
        <el-input placeholder="角色名" size="medium" suffix-icon="el-icon-date"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="medium">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" icon="el-icon-circle-plus" @click="addRole(item)">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="loading" :data="rolelist" border>
      <el-table-column label="id" prop="id" sortable></el-table-column>
      <el-table-column label="角色名" prop="name" sortable></el-table-column>
      <el-table-column label="角色职位" prop="role" sortable></el-table-column>
      <el-table-column label="创建人" prop="creatuser" sortable></el-table-column>
      <el-table-column label="创建时间" prop="date" sortable></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" icon="el-icon-edit" @click="editRole(scope)">权限编辑</el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        :total="total"
        :page-size="param.pageSize"
        background
        layout="prev, pager, next"
        @current-change="sizeChange">
      </el-pagination>
    </div>
    <el-dialog
      :visible.sync="addDialogVisible"
      title="新增"
      width="30%"
      center>
      <el-form label-width="60px">
        <el-form-item label="角色名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item :required="true" label="角色职位">
          <el-input type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="editDialogVisible"
      title="权限编辑"
      width="30%"
      center>
      <el-form label-width="60px">
        <el-form-item label="角色名">
          <el-input v-model="item.name"></el-input>
        </el-form-item>
        <el-form-item :required="true" label="角色职位">
          <el-input v-model="item.role" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { roleList } from '@/api/table'
export default {
  name: 'Rolelist',
  data() {
    return {
      rolelist: [],
      loading: false,
      item: {},
      total: 0,
      addDialogVisible: false,
      editDialogVisible: false,
      param: {
        page: 1,
        pageSize: 5
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      roleList(this.param).then(res => {
        this.loading = false
        this.total = res.total
        this.rolelist = res.rolelist
      })
    },
    editRole(item) {
      this.item = item.row
      this.editDialogVisible = true
    },
    addRole(item) {
      this.addDialogVisible = true
    },
    sizeChange(val) {
      this.param.page = val
      this.getList()
    }
  }
}
</script>
<style>
.rolelist{
  margin: 15px;
}
.page{
  text-align: right;
  margin-top: 10px;
}
</style>
