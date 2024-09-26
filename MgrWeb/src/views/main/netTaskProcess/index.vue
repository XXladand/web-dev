<template>
  <div class="netTaskProcess-container">
    <el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
      <el-form :model="queryParams" ref="queryForm" labelWidth="90">
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="任务">
              <el-select clearable="" filterable="" v-model="queryParams.netTaskId" placeholder="请选择任务">
                <el-option v-for="(item, index) in netTaskNetTaskIdDropdownList" :key="index" :value="item.value"
                  :label="item.label + '_' + item.value" />

              </el-select>

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="处理类型">
              <el-select clearable="" v-model="queryParams.processType" placeholder="请选择处理类型">
                <el-option v-for="(item, index) in dl('cllx')" :key="index" :value="item.code"
                  :label="`[${item.code}] ${item.value}`" />

              </el-select>

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="状态">
              <el-select clearable="" v-model="queryParams.state" placeholder="请选择状态">
                <el-option v-for="(item, index) in dl('clzt')" :key="index" :value="item.code"
                  :label="`[${item.code}] ${item.value}`" />

              </el-select>

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item>
              <el-button-group style="display: flex; align-items: center;">
                <el-button type="primary" icon="ele-Search" @click="handleQuery" v-auth="'netTaskProcess:page'"> 查询
                </el-button>
                <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                <!-- <el-button type="primary" style="margin-left:5px;" icon="ele-Plus" @click="openAddNetTaskProcess"
                  v-auth="'netTaskProcess:add'"> 新增 </el-button> -->

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
        <el-table-column prop="id" label="Id" show-overflow-tooltip="" />
        <el-table-column prop="netTaskId" label="任务" show-overflow-tooltip="">
          <template #default="scope">
            <span>{{ scope.row.netTaskIdName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="processType" label="处理类型" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag :type="di('cllx', scope.row.processType)?.tagType"> {{ di("cllx", scope.row.processType)?.value }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="tanslateLanguage" label="翻译语言" show-overflow-tooltip="" />
        <el-table-column prop="state" label="状态" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag :type="di('clzt', scope.row.state)?.tagType"> {{ di("clzt", scope.row.state)?.value }} </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip="" />
        <el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip=""
          v-if="auth('netTaskProcess:update') || auth('netTaskProcess:delete')">
          <template #default="scope">
            <!-- <el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditNetTaskProcess(scope.row)"
              v-auth="'netTaskProcess:update'"> 编辑 </el-button> -->
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delNetTaskProcess(scope.row)"
              v-auth="'netTaskProcess:delete'"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination v-model:currentPage="tableParams.page" v-model:page-size="tableParams.pageSize"
        :total="tableParams.total" :page-sizes="[10, 20, 50, 100, 200, 500]" size="small" background=""
        @size-change="handleSizeChange" @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper" />
      <printDialog ref="printDialogRef" :title="printNetTaskProcessTitle" @reloadTable="handleQuery" />
      <editDialog ref="editDialogRef" :title="editNetTaskProcessTitle" @reloadTable="handleQuery" />
    </el-card>
  </div>
</template>

<script lang="ts" setup="" name="netTaskProcess">
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { auth } from '/@/utils/authFunction';

import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
import { formatDate } from '/@/utils/formatTime';

import printDialog from '/@/views/system/print/component/hiprint/preview.vue'
import editDialog from '/@/views/main/netTaskProcess/component/editDialog.vue'
import { pageNetTaskProcess, deleteNetTaskProcess } from '/@/api/main/netTaskProcess';
import { getNetTaskNetTaskIdDropdown } from '/@/api/main/netTaskProcess';

const showAdvanceQueryUI = ref(true);
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

const printNetTaskProcessTitle = ref("");
const editNetTaskProcessTitle = ref("");

// 改变高级查询的控件显示状态
const changeAdvanceQueryUI = () => {
  showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
}

// 查询操作
const handleQuery = async () => {
  loading.value = true;
  var res = await pageNetTaskProcess(Object.assign(queryParams.value, tableParams.value));
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
const openAddNetTaskProcess = () => {
  editNetTaskProcessTitle.value = '添加数据处理';
  editDialogRef.value.openDialog({});
};

// 打开打印页面
const openPrintNetTaskProcess = async (row: any) => {
  printNetTaskProcessTitle.value = '打印数据处理';
}

// 打开编辑页面
const openEditNetTaskProcess = (row: any) => {
  editNetTaskProcessTitle.value = '编辑数据处理';
  editDialogRef.value.openDialog(row);
};

// 删除
const delNetTaskProcess = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      await deleteNetTaskProcess(row);
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
