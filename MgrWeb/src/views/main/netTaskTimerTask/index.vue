<template>
  <div class="netTaskTimerTask-container">
    <el-card shadow="hover" :body-style="{ paddingBottom: '0' }"> 
      <el-form :model="queryParams" ref="queryForm" labelWidth="90">
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="定时器">
              <el-select clearable="" filterable="" v-model="queryParams.netTaskTimerId" placeholder="请选择定时器">
                <el-option v-for="(item,index) in netTaskTimerNetTaskTimerIdDropdownList" :key="index" :value="item.value" :label="item.label" />
                
              </el-select>
              
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="任务">
              <el-select clearable="" v-model="queryParams.netTaskId" placeholder="请选择任务">
                <el-option v-for="(item,index) in dl('EnumElasticsearchDb')" :key="index" :value="item.code" :label="`[${item.code}] ${item.value}`" />
                
              </el-select>
              
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item >
              <el-button-group style="display: flex; align-items: center;">
                <el-button type="primary"  icon="ele-Search" @click="handleQuery" v-auth="'netTaskTimerTask:page'"> 查询 </el-button>
                      <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                <el-button type="primary" style="margin-left:5px;" icon="ele-Plus" @click="openAddNetTaskTimerTask" v-auth="'netTaskTimerTask:add'"> 新增 </el-button>
                
              </el-button-group>
            </el-form-item>
            
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="full-table" shadow="hover" style="margin-top: 5px">
      <el-table
				:data="tableData"
				style="width: 100%"
				v-loading="loading"
				tooltip-effect="light"
                				row-key="id"
                @sort-change="sortChange"
				border="">
        <el-table-column type="index" label="序号" width="55" align="center"/>
        <el-table-column prop="id" label="主键Id"  show-overflow-tooltip="" />
        <el-table-column prop="netTaskTimerId" label="定时器"  show-overflow-tooltip="">
          <template #default="scope">
            <span>{{scope.row.netTaskTimerIdName}}</span>
            
          </template>
          
        </el-table-column>
          <el-table-column prop="netTaskName" label="任务"  show-overflow-tooltip="" />
        <el-table-column prop="createTime" label="创建时间"  show-overflow-tooltip="" />
        <el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip="" v-if="auth('netTaskTimerTask:update') || auth('netTaskTimerTask:delete')">
          <template #default="scope">
            <el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditNetTaskTimerTask(scope.row)" v-auth="'netTaskTimerTask:update'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delNetTaskTimerTask(scope.row)" v-auth="'netTaskTimerTask:delete'"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
				v-model:currentPage="tableParams.page"
				v-model:page-size="tableParams.pageSize"
				:total="tableParams.total"
				:page-sizes="[10, 20, 50, 100, 200, 500]"
				size="small"
				background=""
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				layout="total, sizes, prev, pager, next, jumper"
	/>
      <printDialog
        ref="printDialogRef"
        :title="printNetTaskTimerTaskTitle"
        @reloadTable="handleQuery" />
      <editDialog
        ref="editDialogRef"
        :title="editNetTaskTimerTaskTitle"
        @reloadTable="handleQuery"
      />
    </el-card>
  </div>
</template>

<script lang="ts" setup="" name="netTaskTimerTask">
  import { ref } from "vue";
  import { ElMessageBox, ElMessage } from "element-plus";
  import { auth } from '/@/utils/authFunction';

  import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
  import { formatDate } from '/@/utils/formatTime';


  import printDialog from '/@/views/system/print/component/hiprint/preview.vue'
  import editDialog from '/@/views/main/netTaskTimerTask/component/editDialog.vue'
  import { pageNetTaskTimerTask, deleteNetTaskTimerTask } from '/@/api/main/netTaskTimerTask';
  import { getNetTaskTimerNetTaskTimerIdDropdown } from '/@/api/main/netTaskTimerTask';

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

  const printNetTaskTimerTaskTitle = ref("");
  const editNetTaskTimerTaskTitle = ref("");

  // 改变高级查询的控件显示状态
  const changeAdvanceQueryUI = () => {
    showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
  }

  // 查询操作
  const handleQuery = async () => {
    loading.value = true;
    var res = await pageNetTaskTimerTask(Object.assign(queryParams.value, tableParams.value));
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
  const openAddNetTaskTimerTask = () => {
    editNetTaskTimerTaskTitle.value = '添加定时器任务';
    editDialogRef.value.openDialog({});
  };

  // 打开打印页面
  const openPrintNetTaskTimerTask = async (row: any) => {
    printNetTaskTimerTaskTitle.value = '打印定时器任务';
  }
  
  // 打开编辑页面
  const openEditNetTaskTimerTask = (row: any) => {
    editNetTaskTimerTaskTitle.value = '编辑定时器任务';
    editDialogRef.value.openDialog(row);
  };

  // 删除
  const delNetTaskTimerTask = (row: any) => {
    ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
  .then(async () => {
    await deleteNetTaskTimerTask(row);
    handleQuery();
    ElMessage.success("删除成功");
  })
  .catch(() => {});
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

