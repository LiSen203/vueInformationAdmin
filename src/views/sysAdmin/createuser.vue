<template>
    <div class="container" style="width:100%;">
      <!-- 工具栏 -->
        <div class="toolbar" style="float:left; padding:18px;">
          <el-form  size="small">
              <el-form-item>
                  <el-input placeholder="用户名"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" >查询</el-button>
              </el-form-item>
              <el-form-item>
                  <el-button label="新增" type="primary">新增</el-button>
              </el-form-item>
          </el-form>
        </div>

      <!-- 表格栏内容 -->

        <kt-table>
        </kt-table>

    <!-- 新增编辑界面 -->
        <el-dialog :title="operation?'新增':'编辑'" width="40%">
            <el-form label-width="80px"  ref="dataForm">
                <el-form-item label="ID" prop="id">
                    <el-input  :disabled="true" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户名" prop="name">
                    <el-input  auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input  type="password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="机构" prop="deptName">
                    <popup-tree-input>
                    </popup-tree-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="dataForm.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="mobile">
                    <el-input v-model="dataForm.mobile" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="editDialogVisible = false">取消</el-button>
                <el-button type="primary">提交</el-button>
            </div>
       </el-dialog>
    </div>
</template>
<script>
// import PopupTreeInput  from "module";
export default {
  
}
</script>
