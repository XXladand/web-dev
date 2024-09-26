<template>
  <div class="dataSearch-container">
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
          <!-- <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item label="时间范围">
              <el-date-picker v-model="queryParams.startTime" type="datetime" placeholder="开始时间" style="width: 49%"
                value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" clearable="" />
                -
              <el-date-picker v-model="queryParams.endTime" type="datetime" placeholder="结束时间" style="width: 49%"
                value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" clearable="" />
            </el-form-item>
          </el-col> -->
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item>
              <el-button-group style="display: flex; align-items: center;">
                <el-button type="primary" icon="ele-Search" @click="handleQuery"> 查询
                </el-button>
                <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                <!-- <el-button icon="ele-ZoomIn" @click="changeAdvanceQueryUI" v-if="!showAdvanceQueryUI"
                  style="margin-left:5px;"> 高级查询 </el-button>
                <el-button icon="ele-ZoomOut" @click="changeAdvanceQueryUI" v-if="showAdvanceQueryUI"
                  style="margin-left:5px;"> 隐藏 </el-button>
                <el-button type="primary" style="margin-left:5px;" icon="ele-Plus" @click="openAddDataSearch"
                  v-auth="'dataSearch:add'"> 新增 </el-button> -->

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
        <el-table-column prop="taskName" label="任务名称" width="255" show-overflow-tooltip="" />
        <el-table-column prop="url" label="链接" width="255" show-overflow-tooltip="" />
        <el-table-column prop="time" label="时间" width="100" show-overflow-tooltip="" />
        <!-- <el-table-column prop="raw" label="原内容" show-overflow-tooltip="" /> -->
        <el-table-column prop="content" label="处理后内容" show-overflow-tooltip="" />
        <el-table-column prop="processType" label="处理类型" show-overflow-tooltip="" />
        <el-table-column label="操作" width="240" align="center" fixed="right" show-overflow-tooltip="">
          <template #default="scope">
            <!-- <el-button v-show="false" icon="ele-Edit" size="small" text="" type="primary"
              @click="openEditDataSearch(scope.row)" v-auth="'dataSearch:update'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delDataSearch(scope.row)"
              v-auth="'dataSearch:delete'"> 删除 </el-button> -->
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="view(scope.row)"> 查看处理后
            </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="viewRaw(scope.row)"> 查看原始
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination v-model:currentPage="tableParams.page" v-model:page-size="tableParams.pageSize"
        :total="tableParams.total" :page-sizes="[10, 20, 50, 100, 200, 500]" size="small" background=""
        @size-change="handleSizeChange" @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper" />
      <printDialog ref="printDialogRef" :title="printDataSearchTitle" @reloadTable="handleQuery" />
      <editDialog ref="editDialogRef" :title="editDataSearchTitle" @reloadTable="handleQuery" />
    </el-card>
    <el-dialog v-model="isDialogVisible" title="内容">
      <!-- <vue-markdown :source="markdownContent" /> -->
      <p>
        {{ markdownContent }}
      </p>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup="" name="dataSearch">
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { auth } from '/@/utils/authFunction';
//import VueMarkdown from 'vue-markdown';
import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
import { formatDate } from '/@/utils/formatTime';


import printDialog from '/@/views/system/print/component/hiprint/preview.vue'
import editDialog from '/@/views/main/dataSearch/component/editDialog.vue'
import { pageDataSearch, GetRaw } from '/@/api/main/dataSearch';
import { getNetTaskNetTaskIdDropdown } from "/@/api/main/netTaskProcess";

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

const printDataSearchTitle = ref("");
const editDataSearchTitle = ref("");
// 改变高级查询的控件显示状态
const changeAdvanceQueryUI = () => {
  showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
}
const isDialogVisible = ref(false);
const markdownContent = ref('');

const netTaskNetTaskIdDropdownList = ref<any>([]);
const getNetTaskNetTaskIdDropdownList = async () => {
  let list = await getNetTaskNetTaskIdDropdown();
  netTaskNetTaskIdDropdownList.value = list.data.result ?? [];
};
getNetTaskNetTaskIdDropdownList();

// 查询操作
const handleQuery = async () => {
  loading.value = true;
  var res = await pageDataSearch(Object.assign(queryParams.value, tableParams.value));
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
const openAddDataSearch = () => {
  editDataSearchTitle.value = '添加搜索';
  editDialogRef.value.openDialog({});
};
//查看
const view = (row: any) => {
  loading.value = true;
  GetRaw(row.id, 1)
    .then((res) => {
      isDialogVisible.value = true;
      markdownContent.value = res.data.result ?? "";
    }).finally(() => {
      loading.value = false;
    });
}
//查看原始
const viewRaw = async (row: any) => {
  loading.value = true;
  GetRaw(row.id, 2)
    .then((res) => {
      isDialogVisible.value = true;
      markdownContent.value = res.data.result ?? "";
    }).finally(() => {
      loading.value = false;
    });
}
// 打开打印页面
const openPrintDataSearch = async (row: any) => {
  printDataSearchTitle.value = '打印搜索引擎';
}

// 打开编辑页面
const openEditDataSearch = (row: any) => {
  editDataSearchTitle.value = '编辑搜索引擎';
  editDialogRef.value.openDialog(row);
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
