<template>
  <div class="darkWeb-container">
    <el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
      <el-form :model="queryParams" ref="queryForm" labelWidth="90">
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item label="关键字">
              <el-input v-model="queryParams.searchKey" clearable="" placeholder="请输入模糊查询关键字" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="名称">
              <el-input v-model="queryParams.name" clearable="" placeholder="请输入名称" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item>
              <el-button-group style="display: flex; align-items: center;">
                <el-button type="primary" icon="ele-Search" @click="handleQuery" v-auth="'darkWeb:page'"> 查询
                </el-button>
                <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                <el-button icon="ele-ZoomIn" @click="changeAdvanceQueryUI" v-if="!showAdvanceQueryUI"
                  style="margin-left:5px;"> 高级查询 </el-button>
                <el-button icon="ele-ZoomOut" @click="changeAdvanceQueryUI" v-if="showAdvanceQueryUI"
                  style="margin-left:5px;"> 隐藏 </el-button>
                <el-button type="primary" style="margin-left:5px;" icon="ele-Plus" @click="openAddDarkWeb"
                  v-auth="'darkWeb:add'"> 新增 </el-button>

              </el-button-group>
            </el-form-item>

          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="full-table" shadow="hover" style="margin-top: 5px">
      <el-table :data="tableData" style="width: 100%" v-loading="loading" tooltip-effect="light" row-key="id"
        @sort-change="sortChange" border="">
        <el-table-column type="index" label="序号" width="55" align="center" />
        <el-table-column prop="id" label="主键Id" show-overflow-tooltip="" />
        <el-table-column prop="name" label="名称" show-overflow-tooltip="" />
        <el-table-column prop="data" label="任务数据" show-overflow-tooltip="" />
        <!-- <el-table-column prop="deep" label="爬取深度" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag :type="di('pqsd', scope.row.deep)?.tagType"> {{ di("pqsd", scope.row.deep)?.value }} </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="isUnlocker" label="绕过反爬" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag v-if="scope.row.isUnlocker"> 是 </el-tag>
            <el-tag type="danger" v-else> 否 </el-tag>

          </template>

        </el-table-column> -->
        <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip="" />
        <el-table-column label="操作" width="240" align="center" fixed="right" show-overflow-tooltip=""
          v-if="auth('darkWeb:update') || auth('darkWeb:delete')">
          <template #default="scope">
            <el-button icon="ele-Edit" size="small" text="" type="primary" @click="run(scope.row)"
              v-auth="'darkWeb:update'"> 立即执行 </el-button>
            <el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditDarkWeb(scope.row)"
              v-auth="'darkWeb:update'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delDarkWeb(scope.row)"
              v-auth="'darkWeb:delete'"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination v-model:currentPage="tableParams.page" v-model:page-size="tableParams.pageSize"
        :total="tableParams.total" :page-sizes="[10, 20, 50, 100, 200, 500]" size="small" background=""
        @size-change="handleSizeChange" @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper" />
      <printDialog ref="printDialogRef" :title="printDarkWebTitle" @reloadTable="handleQuery" />
      <editDialog ref="editDialogRef" :title="editDarkWebTitle" @reloadTable="handleQuery" />
    </el-card>
  </div>
</template>

<script lang="ts" setup="" name="darkWeb">
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { auth } from '/@/utils/authFunction';

import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
import { formatDate } from '/@/utils/formatTime';


import printDialog from '/@/views/system/print/component/hiprint/preview.vue'
import editDialog from '/@/views/main/darkWeb/component/editDialog.vue'
import { pageDarkWeb, deleteDarkWeb, runDarkTask } from '/@/api/main/darkWeb';

const showAdvanceQueryUI = ref(false);
const printDialogRef = ref();
const editDialogRef = ref();
const loading = ref(false);
const tableData = ref<any>([]);
const queryParams = ref<any>({});
const tableParams = ref({
  page: 1,
  pageSize: 10,
  total: 0,
});

const printDarkWebTitle = ref("");
const editDarkWebTitle = ref("");

// 改变高级查询的控件显示状态
const changeAdvanceQueryUI = () => {
  showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
}

// 查询操作
const handleQuery = async () => {
  loading.value = true;
  var res = await pageDarkWeb(Object.assign(queryParams.value, tableParams.value));
  tableData.value = res.data.result?.items ?? [];
  tableParams.value.total = res.data.result?.total;
  loading.value = false;
};

// 列排序
const sortChange = async (column: any) => {
  queryParams.value.field = column.prop;
  queryParams.value.order = column.order;
  await handleQuery();
};

// 打开新增页面
const openAddDarkWeb = () => {
  editDarkWebTitle.value = '添加暗网任务';
  editDialogRef.value.openDialog({});
};

// 打开打印页面
const openPrintDarkWeb = async (row: any) => {
  printDarkWebTitle.value = '打印暗网任务';
}

// 打开编辑页面
const openEditDarkWeb = (row: any) => {
  editDarkWebTitle.value = '编辑暗网任务';
  editDialogRef.value.openDialog(row);
};

//立即执行
const run = async (row: any) => {
  ElMessageBox.confirm(`立即执行吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      loading.value = true;
      await runDarkTask({ id: row.id }).then((res) => {
        //console.log(res);
        handleQuery();
        ElMessage.success(`执行成功:${res.data.result.count}`);
      })
        .finally(() => {
          loading.value = false;
        });
    })
    .catch(() => { });
};
// 删除
const delDarkWeb = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      await deleteDarkWeb(row);
      handleQuery();
      ElMessage.success("删除成功");
    })
    .catch(() => { });
};

// 改变页面容量
const handleSizeChange = (val: number) => {
  tableParams.value.pageSize = val;
  handleQuery();
};

// 改变页码序号
const handleCurrentChange = (val: number) => {
  tableParams.value.page = val;
  handleQuery();
};

handleQuery();
</script>
<style scoped>
:deep(.el-input),
:deep(.el-select),
:deep(.el-input-number) {
  width: 100%;
}
</style>
