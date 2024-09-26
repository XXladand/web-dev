<template>
  <div class="netTask-container">
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
          <!-- <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="状态">
              <el-select clearable="" v-model="queryParams.state" placeholder="请选择状态">
                <el-option v-for="(item, index) in dl('rwzt')" :key="index" :value="item.code"
                  :label="`[${item.code}] ${item.value}`" />

              </el-select>

            </el-form-item>
          </el-col> -->
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="网站链接">
              <el-input v-model="queryParams.data" clearable="" placeholder="请输入网站链接" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="爬取深度">
              <el-input-number v-model="queryParams.deep" clearable="" placeholder="请输入爬取深度" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item>
              <el-button-group style="display: flex; align-items: center;">
                <el-button type="primary" icon="ele-Search" @click="handleQuery" v-auth="'netTask:page'"> 查询
                </el-button>
                <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                <el-button icon="ele-ZoomIn" @click="changeAdvanceQueryUI" v-if="!showAdvanceQueryUI"
                  style="margin-left:5px;"> 高级查询 </el-button>
                <el-button icon="ele-ZoomOut" @click="changeAdvanceQueryUI" v-if="showAdvanceQueryUI"
                  style="margin-left:5px;"> 隐藏 </el-button>
                <!-- <el-button type="primary" style="margin-left:5px;" icon="ele-Plus" @click="openAddNetTask"
                  v-auth="'netTask:add'"> 新增 </el-button> -->

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
        <el-table-column prop="id" label="任务Id" width="120" show-overflow-tooltip="" />
        <el-table-column prop="name" label="名称" show-overflow-tooltip="" />
        <el-table-column prop="createSource" width="110" label="任务来源" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag :type="di('rwly', scope.row.createSource)?.tagType"> {{ di("rwly", scope.row.createSource)?.value }} </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="sourceId" width="120" label="源Id" show-overflow-tooltip=""/>
        <el-table-column prop="state" width="70" label="状态" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag :type="di('rwzt', scope.row.state)?.tagType"> {{ di("rwzt", scope.row.state)?.value }} </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="data" label="任务参数" show-overflow-tooltip="" />
        <el-table-column prop="deep" width="70" label="爬取深度" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag :type="di('pqsd', scope.row.deep)?.tagType"> {{ di("pqsd", scope.row.deep)?.value }} </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="isUnlocker" width="70" label="绕过反爬" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag> {{ scope.row.isUnlocker ? '是' : '否' }} </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="dtlCount" label="明细数量" show-overflow-tooltip="" />
        <el-table-column prop="createTime" width="130" label="创建时间" show-overflow-tooltip="" />
        <!-- <el-table-column prop="updateTime" label="更新时间" show-overflow-tooltip="" /> -->
        <!-- <el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip=""
          v-if="auth('netTask:update') || auth('netTask:delete')">
          <template #default="scope">
            <el-button v-show="false" icon="ele-Edit" size="small" text="" type="primary"
              @click="openEditNetTask(scope.row)" v-auth="'netTask:update'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delNetTask(scope.row)"
              v-auth="'netTask:delete'"> 删除 </el-button>
          </template>
        </el-table-column> -->
      </el-table>
      <el-pagination v-model:currentPage="tableParams.page" v-model:page-size="tableParams.pageSize"
        :total="tableParams.total" :page-sizes="[10, 20, 50, 100, 200, 500]" size="small" background=""
        @size-change="handleSizeChange" @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper" />
      <printDialog ref="printDialogRef" :title="printNetTaskTitle" @reloadTable="handleQuery" />
      <editDialog ref="editDialogRef" :title="editNetTaskTitle" @reloadTable="handleQuery" />
    </el-card>
  </div>
</template>

<script lang="ts" setup="" name="netTask">
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { auth } from '/@/utils/authFunction';

import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
import { formatDate } from '/@/utils/formatTime';


import printDialog from '/@/views/system/print/component/hiprint/preview.vue'
import editDialog from '/@/views/main/netTask/component/editDialog.vue'
import { pageNetTask, deleteNetTask } from '/@/api/main/netTask';

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

const printNetTaskTitle = ref("");
const editNetTaskTitle = ref("");

// 改变高级查询的控件显示状态
const changeAdvanceQueryUI = () => {
  showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
}

// 查询操作
const handleQuery = async () => {
  loading.value = true;
  var res = await pageNetTask(Object.assign(queryParams.value, tableParams.value));
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
const openAddNetTask = () => {
  editNetTaskTitle.value = '添加任务';
  editDialogRef.value.openDialog({});
};

// 打开打印页面
const openPrintNetTask = async (row: any) => {
  printNetTaskTitle.value = '打印任务';
}

// 打开编辑页面
const openEditNetTask = (row: any) => {
  editNetTaskTitle.value = '编辑任务';
  editDialogRef.value.openDialog(row);
};

// 删除
const delNetTask = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      await deleteNetTask(row);
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
