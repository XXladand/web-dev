<template>
  <div class="netSearch-container">
    <el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
      <el-form :model="queryParams" ref="queryForm" labelWidth="90">
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item label="关键字">
              <el-input v-model="queryParams.searchKey" clearable="" placeholder="请输入模糊查询关键字" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="引擎类型">
              <el-select clearable="" v-model="queryParams.engineType" placeholder="请选择引擎类型">
                <el-option v-for="(item, index) in dl('ssyq')" :key="index" :value="item.code"
                  :label="`[${item.code}] ${item.value}`" />

              </el-select>

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="提示词">
              <el-input v-model="queryParams.prompt" clearable="" placeholder="请输入提示词" />

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="时间范围">
              <el-select clearable="" v-model="queryParams.timeRange" placeholder="请选择时间范围">
                <el-option v-for="(item, index) in dl('sjfw')" :key="index" :value="item.code"
                  :label="`[${item.code}] ${item.value}`" />

              </el-select>

            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item>
              <el-button-group style="display: flex; align-items: center;">
                <el-button type="primary" icon="ele-Search" @click="handleQuery" v-auth="'netSearch:page'"> 查询
                </el-button>
                <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                <el-button icon="ele-ZoomIn" @click="changeAdvanceQueryUI" v-if="!showAdvanceQueryUI"
                  style="margin-left:5px;"> 高级查询 </el-button>
                <el-button icon="ele-ZoomOut" @click="changeAdvanceQueryUI" v-if="showAdvanceQueryUI"
                  style="margin-left:5px;"> 隐藏 </el-button>
                <el-button type="primary" style="margin-left:5px;" icon="ele-Plus" @click="openAddNetSearch"
                  v-auth="'netSearch:add'"> 新增 </el-button>

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
        <!-- <el-table-column prop="engineType" label="引擎类型" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag :type="di('ssyq', scope.row.engineType)?.tagType"> {{ di("ssyq", scope.row.engineType)?.value }}
            </el-tag>
          </template>
</el-table-column> -->
        <el-table-column prop="id" label="Id" width="120" align="center" />
        <el-table-column prop="prompt" label="关键字" show-overflow-tooltip="" />
        <el-table-column prop="language" label="语言" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag :type="di('ssyq', scope.row.language)?.tagType"> {{ (di("ssyq", scope.row.language)?.code +
              di("ssyq", scope.row.language)?.name) ||
              scope.row.language }} </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="enableGpt" label="智能过滤搜索内容" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag> {{ scope.row.enableGpt ? '是' : '否' }} </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="deep" label="爬取深度" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag :type="di('pqsd', scope.row.deep)?.tagType"> {{ di("pqsd", scope.row.deep)?.value }} </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="isUnlocker" label="绕过反爬" show-overflow-tooltip="">
          <template #default="scope">
            <el-tag> {{ scope.row.isUnlocker ? '是' : '否' }} </el-tag>
          </template>
        </el-table-column>

        <el-table-column prop="createTime" label="创建时间" width="160" show-overflow-tooltip=""></el-table-column>
        <el-table-column label="操作" width="240" align="center" fixed="right" show-overflow-tooltip=""
          v-if="auth('netSearch:update') || auth('netSearch:delete')">
          <template #default="scope">
            <el-button icon="ele-Edit" size="small" text="" type="primary" @click="run(scope.row)"
              v-auth="'netSearch:update'"> 立即执行 </el-button>
            <el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditNetSearch(scope.row)"
              v-auth="'netSearch:update'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delNetSearch(scope.row)"
              v-auth="'netSearch:delete'"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination v-model:currentPage="tableParams.page" v-model:page-size="tableParams.pageSize"
        :total="tableParams.total" :page-sizes="[10, 20, 50, 100, 200, 500]" size="small" background=""
        @size-change="handleSizeChange" @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper" />
      <printDialog ref="printDialogRef" :title="printNetSearchTitle" @reloadTable="handleQuery" />
      <editDialog ref="editDialogRef" :title="editNetSearchTitle" @reloadTable="handleQuery" />
    </el-card>
  </div>
</template>

<script lang="ts" setup="" name="netSearch">
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { auth } from '/@/utils/authFunction';

import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
import { formatDate } from '/@/utils/formatTime';


import printDialog from '/@/views/system/print/component/hiprint/preview.vue'
import editDialog from '/@/views/main/netSearch/component/editDialog.vue'
import { pageNetSearch, deleteNetSearch, runSearchTask } from '/@/api/main/netSearch';

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

const printNetSearchTitle = ref("");
const editNetSearchTitle = ref("");

// 改变高级查询的控件显示状态
const changeAdvanceQueryUI = () => {
  showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
}

// 查询操作
const handleQuery = async () => {
  loading.value = true;
  var res = await pageNetSearch(Object.assign(queryParams.value, tableParams.value));
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
const openAddNetSearch = () => {
  editNetSearchTitle.value = '添加搜索';
  editDialogRef.value.openDialog({});
};

// 打开打印页面
const openPrintNetSearch = async (row: any) => {
  printNetSearchTitle.value = '打印搜索引擎';
}

// 打开编辑页面
const openEditNetSearch = (row: any) => {
  editNetSearchTitle.value = '编辑搜索引擎';
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
      await runSearchTask({ id: row.id }).then((res) => {
        //console.log(res);
        handleQuery();
        if (res.data.result.isSuccess) {
          ElMessage.success(`执行成功:${res.data.result.res.sent_count}`);
        } else {
          ElMessage.error(`执行失败:${res.data.result.resStr}`);
        }
      })
        .finally(() => {
          loading.value = false;
        });
    })
    .catch(() => { });
};

// 删除
const delNetSearch = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      await deleteNetSearch(row);
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
