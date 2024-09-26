<template>
  <div class="netTaskTimerRecord-container">
    <el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
      <el-form :model="queryParams" ref="queryForm" labelWidth="90">
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item label="关键字">
              <el-input v-model="queryParams.searchKey" clearable="" placeholder="请输入模糊查询关键字" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item label="任务定时">
              <el-select clearable="" filterable="" v-model="queryParams.netTaskTimerId" placeholder="请选择任务定时">
                <el-option v-for="(item, index) in netTaskTimerNetTaskTimerIdDropdownList" :key="index"
                  :value="item.value" :label="item.label" />

              </el-select>

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="参数">
              <el-input v-model="queryParams.param" clearable="" placeholder="请输入参数" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="结果">
              <el-input v-model="queryParams.result" clearable="" placeholder="请输入结果" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="状态">
              <el-select clearable="" v-model="queryParams.state" placeholder="请选择状态">
                <el-option v-for="(item, index) in dl('rwdsjlzt')" :key="index" :value="item.code"
                  :label="`[${item.code}] ${item.value}`" />

              </el-select>

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="运行时间">
              <el-date-picker type="daterange" v-model="queryParams.runTimeRange" value-format="YYYY-MM-DD HH:mm:ss"
                start-placeholder="开始日期" end-placeholder="结束日期"
                :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="运行时长（秒）">
              <el-input-number v-model="queryParams.duration" clearable="" placeholder="请输入运行时长（秒）" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="结束时间">
              <el-date-picker type="daterange" v-model="queryParams.finishTimeRange" value-format="YYYY-MM-DD HH:mm:ss"
                start-placeholder="开始日期" end-placeholder="结束日期"
                :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item>
              <el-button-group style="display: flex; align-items: center;">
                <el-button type="primary" icon="ele-Search" @click="handleQuery" v-auth="'netTaskTimerRecord:page'"> 查询
                </el-button>
                <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                <el-button icon="ele-ZoomIn" @click="changeAdvanceQueryUI" v-if="!showAdvanceQueryUI"
                  style="margin-left:5px;"> 高级查询 </el-button>
                <el-button icon="ele-ZoomOut" @click="changeAdvanceQueryUI" v-if="showAdvanceQueryUI"
                  style="margin-left:5px;"> 隐藏 </el-button>
                <!-- <el-button type="primary" style="margin-left:5px;" icon="ele-Plus" @click="openAddNetTaskTimerRecord"
                  v-auth="'netTaskTimerRecord:add'"> 新增 </el-button> -->

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
        <el-table-column prop="netTaskTimerId" label="任务定时" show-overflow-tooltip="">
          <template #default="scope">
            <span>{{ scope.row.netTaskTimerIdName }}</span>

          </template>

        </el-table-column>
        <el-table-column prop="param" label="参数" show-overflow-tooltip="" />
        <el-table-column prop="result" label="结果" show-overflow-tooltip="" />
        <el-table-column prop="state" label="状态" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag :type="di('rwdsjlzt', scope.row.state)?.tagType"> {{ di("rwdsjlzt", scope.row.state)?.value }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="runTime" label="运行时间" show-overflow-tooltip="" />
        <el-table-column prop="duration" label="运行时长（秒）" show-overflow-tooltip="" />
        <el-table-column prop="finishTime" label="结束时间" show-overflow-tooltip="" />
        <el-table-column prop="target" label="目标" show-overflow-tooltip="" />
        <!-- <el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip=""
          v-if="auth('netTaskTimerRecord:update') || auth('netTaskTimerRecord:delete')">
          <template #default="scope">
            <el-button icon="ele-Edit" size="small" text="" type="primary"
              @click="openEditNetTaskTimerRecord(scope.row)" v-auth="'netTaskTimerRecord:update'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delNetTaskTimerRecord(scope.row)"
              v-auth="'netTaskTimerRecord:delete'"> 删除 </el-button>
          </template>
        </el-table-column> -->
      </el-table>
      <el-pagination v-model:currentPage="tableParams.page" v-model:page-size="tableParams.pageSize"
        :total="tableParams.total" :page-sizes="[10, 20, 50, 100, 200, 500]" size="small" background=""
        @size-change="handleSizeChange" @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper" />
      <printDialog ref="printDialogRef" :title="printNetTaskTimerRecordTitle" @reloadTable="handleQuery" />
      <editDialog ref="editDialogRef" :title="editNetTaskTimerRecordTitle" @reloadTable="handleQuery" />
    </el-card>
  </div>
</template>

<script lang="ts" setup="" name="netTaskTimerRecord">
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { auth } from '/@/utils/authFunction';

import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
import { formatDate } from '/@/utils/formatTime';


import printDialog from '/@/views/system/print/component/hiprint/preview.vue'
import editDialog from '/@/views/main/netTaskTimerRecord/component/editDialog.vue'
import { pageNetTaskTimerRecord, deleteNetTaskTimerRecord } from '/@/api/main/netTaskTimerRecord';
import { getNetTaskTimerNetTaskTimerIdDropdown } from '/@/api/main/netTaskTimerRecord';

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

const printNetTaskTimerRecordTitle = ref("");
const editNetTaskTimerRecordTitle = ref("");

// 改变高级查询的控件显示状态
const changeAdvanceQueryUI = () => {
  showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
}

// 查询操作
const handleQuery = async () => {
  loading.value = true;
  var res = await pageNetTaskTimerRecord(Object.assign(queryParams.value, tableParams.value));
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
const openAddNetTaskTimerRecord = () => {
  editNetTaskTimerRecordTitle.value = '添加任务定时记录';
  editDialogRef.value.openDialog({});
};

// 打开打印页面
const openPrintNetTaskTimerRecord = async (row: any) => {
  printNetTaskTimerRecordTitle.value = '打印任务定时记录';
}

// 打开编辑页面
const openEditNetTaskTimerRecord = (row: any) => {
  editNetTaskTimerRecordTitle.value = '编辑任务定时记录';
  editDialogRef.value.openDialog(row);
};

// 删除
const delNetTaskTimerRecord = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      await deleteNetTaskTimerRecord(row);
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

const netTaskTimerNetTaskTimerIdDropdownList = ref<any>([]);
const getNetTaskTimerNetTaskTimerIdDropdownList = async () => {
  let list = await getNetTaskTimerNetTaskTimerIdDropdown();
  netTaskTimerNetTaskTimerIdDropdownList.value = list.data.result ?? [];
};
getNetTaskTimerNetTaskTimerIdDropdownList();

handleQuery();
</script>
<style scoped>
:deep(.el-input),
:deep(.el-select),
:deep(.el-input-number) {
  width: 100%;
}
</style>
