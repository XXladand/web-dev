<template>
  <div class="netTaskLog-container">
    <el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
      <el-form :model="queryParams" ref="queryForm" labelWidth="90">
        <el-row>

          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item label="任务">
              <el-select clearable="" filterable="" v-model="queryParams.netTaskId" placeholder="请选择任务">
                <el-option v-for="(item, index) in netTaskNetTaskIdDropdownList" :key="index" :value="item.value"
                  :label="item.label + '_' + item.value" />

              </el-select>

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item label="关键字">
              <el-input v-model="queryParams.searchKey" clearable="" placeholder="请输入模糊查询关键字" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="日志消息">
              <el-input v-model="queryParams.message" clearable="" placeholder="请输入日志消息" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="日志代码">
              <el-select clearable="" v-model="queryParams.code" placeholder="请选择日志代码">
                <el-option v-for="(item, index) in dl('rwrzdm')" :key="index" :value="item.code"
                  :label="`[${item.code}] ${item.value}`" />

              </el-select>

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="日志来源">
              <el-input v-model="queryParams.source" clearable="" placeholder="请输入日志来源" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="发生时间">
              <el-input v-model="queryParams.occurrenceTime" clearable="" placeholder="请输入发生时间" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="备注">
              <el-input v-model="queryParams.remark" clearable="" placeholder="请输入备注" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item>
              <el-button-group style="display: flex; align-items: center;">
                <el-button type="primary" icon="ele-Search" @click="handleQuery" v-auth="'netTaskLog:page'"> 查询
                </el-button>
                <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                <el-button icon="ele-ZoomIn" @click="changeAdvanceQueryUI" v-if="!showAdvanceQueryUI"
                  style="margin-left:5px;"> 高级查询 </el-button>
                <el-button icon="ele-ZoomOut" @click="changeAdvanceQueryUI" v-if="showAdvanceQueryUI"
                  style="margin-left:5px;"> 隐藏 </el-button>
                <!-- <el-button type="primary" style="margin-left:5px;" icon="ele-Plus" @click="openAddNetTaskLog"
                  v-auth="'netTaskLog:add'"> 新增 </el-button> -->

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
        <el-table-column prop="netTaskId" label="任务" show-overflow-tooltip="">
          <template #default="scope">
            <span>{{ scope.row.netTaskIdName }}</span>

          </template>

        </el-table-column>

        <el-table-column prop="infoUrl" label="url" show-overflow-tooltip="" />
        <el-table-column prop="infoStepName" label="阶段" show-overflow-tooltip="" />
        <el-table-column prop="state" width="70" label="状态" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag :type="di('rwzt', scope.row.infoState)?.tagType"> {{ di("rwzt", scope.row.infoState)?.value }} </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="message" label="日志消息" show-overflow-tooltip="" />
        <el-table-column prop="occurrenceTime" label="发生时间" show-overflow-tooltip="" />
        <!-- <el-table-column prop="remark" label="备注" show-overflow-tooltip="" /> -->
        <!-- <el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip=""
          v-if="auth('netTaskLog:update') || auth('netTaskLog:delete')">
          <template #default="scope">
            <el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditNetTaskLog(scope.row)"
              v-auth="'netTaskLog:update'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delNetTaskLog(scope.row)"
              v-auth="'netTaskLog:delete'"> 删除 </el-button>
          </template>
        </el-table-column> -->
      </el-table>
      <el-pagination v-model:currentPage="tableParams.page" v-model:page-size="tableParams.pageSize"
        :total="tableParams.total" :page-sizes="[10, 20, 50, 100, 200, 500]" size="small" background=""
        @size-change="handleSizeChange" @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper" />
      <printDialog ref="printDialogRef" :title="printNetTaskLogTitle" @reloadTable="handleQuery" />
      <editDialog ref="editDialogRef" :title="editNetTaskLogTitle" @reloadTable="handleQuery" />
    </el-card>
  </div>
</template>

<script lang="ts" setup="" name="netTaskLog">
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { auth } from '/@/utils/authFunction';

import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
import { formatDate } from '/@/utils/formatTime';


import printDialog from '/@/views/system/print/component/hiprint/preview.vue'
import editDialog from '/@/views/main/netTaskLog/component/editDialog.vue'
import { pageNetTaskLog, deleteNetTaskLog } from '/@/api/main/netTaskLog';
import { getNetTaskNetTaskIdDropdown } from '/@/api/main/netTaskLog';

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

const printNetTaskLogTitle = ref("");
const editNetTaskLogTitle = ref("");

// 改变高级查询的控件显示状态
const changeAdvanceQueryUI = () => {
  showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
}

// 查询操作
const handleQuery = async () => {
  loading.value = true;
  var res = await pageNetTaskLog(Object.assign(queryParams.value, tableParams.value));
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
const openAddNetTaskLog = () => {
  editNetTaskLogTitle.value = '添加任务日志';
  editDialogRef.value.openDialog({});
};

// 打开打印页面
const openPrintNetTaskLog = async (row: any) => {
  printNetTaskLogTitle.value = '打印任务日志';
}

// 打开编辑页面
const openEditNetTaskLog = (row: any) => {
  editNetTaskLogTitle.value = '编辑任务日志';
  editDialogRef.value.openDialog(row);
};

// 删除
const delNetTaskLog = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      await deleteNetTaskLog(row);
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

const netTaskNetTaskIdDropdownList = ref<any>([]);
const getNetTaskNetTaskIdDropdownList = async () => {
  let list = await getNetTaskNetTaskIdDropdown();
  netTaskNetTaskIdDropdownList.value = list.data.result ?? [];
};
getNetTaskNetTaskIdDropdownList();

handleQuery();
</script>
<style scoped>
:deep(.el-input),
:deep(.el-select),
:deep(.el-input-number) {
  width: 100%;
}
</style>
