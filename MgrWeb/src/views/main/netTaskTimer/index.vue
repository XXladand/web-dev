<template>
  <div class="netTaskTimer-container">
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
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="类型">
              <el-select clearable="" v-model="queryParams.type" placeholder="请选择类型">
                <el-option v-for="(item, index) in dl('EnumNetTaskTimer_Type')" :key="index" :value="item.code"
                  :label="`[${item.code}] ${item.value}`" />

              </el-select>

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="间隔时长/分钟">
              <el-input-number v-model="queryParams.interval" clearable="" placeholder="请输入间隔时长/分钟" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="定时">
              <el-select clearable="" v-model="queryParams.times" placeholder="请选择定时">
                <el-option v-for="(item, index) in dl('EnumHourOfDay')" :key="index" :value="item.code"
                  :label="`[${item.code}] ${item.value}`" />

              </el-select>

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="失效时间">
              <el-date-picker type="datetimerange" v-model="queryParams.finishTimeRange" value-format="YYYY-MM-DD HH:mm:ss"
                start-placeholder="开始日期" end-placeholder="结束日期"
                :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="备注">
              <el-input v-model="queryParams.remark" clearable="" placeholder="请输入备注" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="上次执行时间">
              <el-date-picker type="daterange" v-model="queryParams.lastRunTimeRange" value-format="YYYY-MM-DD HH:mm:ss"
                start-placeholder="开始日期" end-placeholder="结束日期"
                :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="间隔生效开始时间">
              <el-date-picker type="daterange" v-model="queryParams.intervalSTimeRange"
                value-format="YYYY-MM-DD HH:mm:ss" start-placeholder="开始日期" end-placeholder="结束日期"
                :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="间隔生效结束时间">
              <el-date-picker type="daterange" v-model="queryParams.intervalETimeRange"
                value-format="YYYY-MM-DD HH:mm:ss" start-placeholder="开始日期" end-placeholder="结束日期"
                :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item>
              <el-button-group style="display: flex; align-items: center;">
                <el-button type="primary" icon="ele-Search" @click="handleQuery" v-auth="'netTaskTimer:page'"> 查询
                </el-button>
                <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                <el-button icon="ele-ZoomIn" @click="changeAdvanceQueryUI" v-if="!showAdvanceQueryUI"
                  style="margin-left:5px;"> 高级查询 </el-button>
                <el-button icon="ele-ZoomOut" @click="changeAdvanceQueryUI" v-if="showAdvanceQueryUI"
                  style="margin-left:5px;"> 隐藏 </el-button>
                <el-button type="primary" style="margin-left:5px;" icon="ele-Plus" @click="openAddNetTaskTimer"
                  v-auth="'netTaskTimer:add'"> 新增 </el-button>

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
        <el-table-column prop="type" label="类型" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag :type="di('EnumNetTaskTimer_Type', scope.row.type)?.tagType"> {{ di("EnumNetTaskTimer_Type",
              scope.row.type)?.value }} </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="interval" label="间隔时长/分钟" show-overflow-tooltip="" />
        <el-table-column prop="intervalSTime" label="间隔生效开始时间" show-overflow-tooltip="" />
        <el-table-column prop="intervalETime" label="间隔生效结束时间" show-overflow-tooltip="" />
        <el-table-column prop="times" label="整点" show-overflow-tooltip="" />
        <el-table-column prop="finishTime" label="失效时间" show-overflow-tooltip="" />
        <el-table-column prop="remark" label="备注" show-overflow-tooltip="" />
        <el-table-column prop="lastRunTime" label="上次执行时间" show-overflow-tooltip="" />
        <el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip=""
          v-if="auth('netTaskTimer:update') || auth('netTaskTimer:delete')">
          <template #default="scope">
            <el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditNetTaskTimer(scope.row)"
              v-auth="'netTaskTimer:update'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delNetTaskTimer(scope.row)"
              v-auth="'netTaskTimer:delete'"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination v-model:currentPage="tableParams.page" v-model:page-size="tableParams.pageSize"
        :total="tableParams.total" :page-sizes="[10, 20, 50, 100, 200, 500]" size="small" background=""
        @size-change="handleSizeChange" @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper" />
      <printDialog ref="printDialogRef" :title="printNetTaskTimerTitle" @reloadTable="handleQuery" />
      <editDialog ref="editDialogRef" :title="editNetTaskTimerTitle" @reloadTable="handleQuery" />
    </el-card>
  </div>
</template>

<script lang="ts" setup="" name="netTaskTimer">
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { auth } from '/@/utils/authFunction';

import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
import { formatDate } from '/@/utils/formatTime';


import printDialog from '/@/views/system/print/component/hiprint/preview.vue'
import editDialog from '/@/views/main/netTaskTimer/component/editDialog.vue'
import { pageNetTaskTimer, deleteNetTaskTimer } from '/@/api/main/netTaskTimer';

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

const printNetTaskTimerTitle = ref("");
const editNetTaskTimerTitle = ref("");

// 改变高级查询的控件显示状态
const changeAdvanceQueryUI = () => {
  showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
}

// 查询操作
const handleQuery = async () => {
  loading.value = true;
  var res = await pageNetTaskTimer(Object.assign(queryParams.value, tableParams.value));
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
const openAddNetTaskTimer = () => {
  editNetTaskTimerTitle.value = '添加任务定时';
  editDialogRef.value.openDialog({});
};

// 打开打印页面
const openPrintNetTaskTimer = async (row: any) => {
  printNetTaskTimerTitle.value = '打印任务定时';
}

// 打开编辑页面
const openEditNetTaskTimer = (row: any) => {
  editNetTaskTimerTitle.value = '编辑任务定时';
  editDialogRef.value.openDialog(row);
};

// 删除
const delNetTaskTimer = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      await deleteNetTaskTimer(row);
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
