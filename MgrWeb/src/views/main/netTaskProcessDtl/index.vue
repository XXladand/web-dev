<template>
  <div class="netTaskProcessDtl-container">
    <el-card shadow="hover" :body-style="{ paddingBottom: '0' }"> 
      <el-form :model="queryParams" ref="queryForm" labelWidth="90">
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item label="关键字">
              <el-input v-model="queryParams.searchKey" clearable="" placeholder="请输入模糊查询关键字"/>
              
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="任务后处理id">
              <el-input v-model="queryParams.netTaskProcessId" clearable="" placeholder="请输入任务后处理id"/>
              
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="参数">
              <el-input v-model="queryParams.param" clearable="" placeholder="请输入参数"/>
              
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="原始内容数据id">
              <el-input v-model="queryParams.resultRawId" clearable="" placeholder="请输入原始内容数据id"/>
              
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="爬取完成数据id">
              <el-input v-model="queryParams.processedId" clearable="" placeholder="请输入爬取完成数据id"/>
              
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="处理类型">
              <el-select clearable="" v-model="queryParams.processType" placeholder="请选择处理类型">
                <el-option v-for="(item,index) in dl('EnumNetTaskProcess_Type')" :key="index" :value="item.code" :label="`[${item.code}] ${item.value}`" />
                
              </el-select>
              
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="状态">
              <el-select clearable="" v-model="queryParams.state" placeholder="请选择状态">
                <el-option v-for="(item,index) in dl('EnumNetTaskProcess_State')" :key="index" :value="item.code" :label="`[${item.code}] ${item.value}`" />
                
              </el-select>
              
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="状态消息">
              <el-input v-model="queryParams.stateMsg" clearable="" placeholder="请输入状态消息"/>
              
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="类型">
              <el-select clearable="" v-model="queryParams.type" placeholder="请选择类型">
                <el-option v-for="(item,index) in dl('EnumNetTask_Type')" :key="index" :value="item.code" :label="`[${item.code}] ${item.value}`" />
                
              </el-select>
              
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10" v-if="showAdvanceQueryUI">
            <el-form-item label="原始数据创建时间">
              <el-date-picker type="daterange" v-model="queryParams.rawCreateTimeRange"  value-format="YYYY-MM-DD HH:mm:ss" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]" />
              
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="4" class="mb10">
            <el-form-item >
              <el-button-group style="display: flex; align-items: center;">
                <el-button type="primary"  icon="ele-Search" @click="handleQuery" v-auth="'netTaskProcessDtl:page'"> 查询 </el-button>
                      <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                        <el-button icon="ele-ZoomIn" @click="changeAdvanceQueryUI" v-if="!showAdvanceQueryUI" style="margin-left:5px;"> 高级查询 </el-button>
                        <el-button icon="ele-ZoomOut" @click="changeAdvanceQueryUI" v-if="showAdvanceQueryUI" style="margin-left:5px;"> 隐藏 </el-button>
                <!-- <el-button type="primary" style="margin-left:5px;" icon="ele-Plus" @click="openAddNetTaskProcessDtl" v-auth="'netTaskProcessDtl:add'"> 新增 </el-button> -->
                
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
        <el-table-column prop="netTaskId" label="任务id"  show-overflow-tooltip="" />
        <el-table-column prop="netTaskProcessId" label="任务后处理id"  show-overflow-tooltip="" />
        <el-table-column prop="param" label="参数"  show-overflow-tooltip="" />
        <el-table-column prop="resultRawId" label="原始内容数据id"  show-overflow-tooltip="" />
        <el-table-column prop="processedId" label="爬取完成数据id"  show-overflow-tooltip="" />
          <el-table-column prop="processType" label="处理类型"  show-overflow-tooltip="" >
            <template #default="scope">
              <el-tag :type="di('EnumNetTaskProcess_Type', scope.row.processType)?.tagType"> {{di("EnumNetTaskProcess_Type", scope.row.processType)?.value}} </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="状态"  show-overflow-tooltip="" >
            <template #default="scope">
              <el-tag :type="di('EnumNetTaskProcess_State', scope.row.state)?.tagType"> {{di("EnumNetTaskProcess_State", scope.row.state)?.value}} </el-tag>
            </template>
          </el-table-column>
        <el-table-column prop="stateMsg" label="状态消息"  show-overflow-tooltip="" />
          <el-table-column prop="type" label="类型"  show-overflow-tooltip="" >
            <template #default="scope">
              <el-tag :type="di('EnumNetTask_Type', scope.row.type)?.tagType"> {{di("EnumNetTask_Type", scope.row.type)?.value}} </el-tag>
            </template>
          </el-table-column>
        <el-table-column prop="createTime" label="创建时间"  show-overflow-tooltip="" />
        <el-table-column prop="rawCreateTime" label="原始数据创建时间"  show-overflow-tooltip="" />
        <!-- <el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip="" v-if="auth('netTaskProcessDtl:update') || auth('netTaskProcessDtl:delete')">
          <template #default="scope">
            <el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditNetTaskProcessDtl(scope.row)" v-auth="'netTaskProcessDtl:update'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delNetTaskProcessDtl(scope.row)" v-auth="'netTaskProcessDtl:delete'"> 删除 </el-button>
          </template>
        </el-table-column> -->
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
        :title="printNetTaskProcessDtlTitle"
        @reloadTable="handleQuery" />
      <editDialog
        ref="editDialogRef"
        :title="editNetTaskProcessDtlTitle"
        @reloadTable="handleQuery"
      />
    </el-card>
  </div>
</template>

<script lang="ts" setup="" name="netTaskProcessDtl">
  import { ref } from "vue";
  import { ElMessageBox, ElMessage } from "element-plus";
  import { auth } from '/@/utils/authFunction';

  import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
  import { formatDate } from '/@/utils/formatTime';


  import printDialog from '/@/views/system/print/component/hiprint/preview.vue'
  import editDialog from '/@/views/main/netTaskProcessDtl/component/editDialog.vue'
  import { pageNetTaskProcessDtl, deleteNetTaskProcessDtl } from '/@/api/main/netTaskProcessDtl';

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

  const printNetTaskProcessDtlTitle = ref("");
  const editNetTaskProcessDtlTitle = ref("");

  // 改变高级查询的控件显示状态
  const changeAdvanceQueryUI = () => {
    showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
  }

  // 查询操作
  const handleQuery = async () => {
    loading.value = true;
    var res = await pageNetTaskProcessDtl(Object.assign(queryParams.value, tableParams.value));
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
  const openAddNetTaskProcessDtl = () => {
    editNetTaskProcessDtlTitle.value = '添加任务处理明细';
    editDialogRef.value.openDialog({});
  };

  // 打开打印页面
  const openPrintNetTaskProcessDtl = async (row: any) => {
    printNetTaskProcessDtlTitle.value = '打印任务处理明细';
  }
  
  // 打开编辑页面
  const openEditNetTaskProcessDtl = (row: any) => {
    editNetTaskProcessDtlTitle.value = '编辑任务处理明细';
    editDialogRef.value.openDialog(row);
  };

  // 删除
  const delNetTaskProcessDtl = (row: any) => {
    ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
  .then(async () => {
    await deleteNetTaskProcessDtl(row);
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

  handleQuery();
</script>
<style scoped>
:deep(.el-input),
:deep(.el-select),
:deep(.el-input-number) {
	width: 100%;
}
</style>

