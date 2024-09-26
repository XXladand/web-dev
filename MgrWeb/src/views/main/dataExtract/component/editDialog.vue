<template>
	<div class="dataExtract-container">
		<el-dialog v-model="isShowDialog" :width="800" draggable="" :close-on-click-modal="false">
			<template #header>
				<div style="color: #fff">
					<!--<el-icon size="16" style="margin-right: 3px; display: inline; vertical-align: middle"> <ele-Edit /> </el-icon>-->
					<span>{{ props.title }}</span>
				</div>
			</template>
			<el-form :model="ruleForm" ref="ruleFormRef" label-width="auto" :rules="rules">
				<el-row :gutter="35">
					<el-form-item v-show="false">
						<el-input v-model="ruleForm.id" />
					</el-form-item>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="任务" prop="netTaskId">
							<el-select clearable filterable v-model="ruleForm.netTaskId" placeholder="请选择任务">
								<el-option v-for="(item,index) in netTaskNetTaskIdDropdownList" :key="index" :value="item.value" :label="item.label" />
								
							</el-select>
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="提取次数" prop="count">
							<el-input-number v-model="ruleForm.count" placeholder="请输入提取次数" clearable />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="来源" prop="source">
							<el-input v-model="ruleForm.source" placeholder="请输入来源" maxlength="255" show-word-limit clearable />
							
						</el-form-item>
						
					</el-col>
				</el-row>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="cancel">取 消</el-button>
					<el-button type="primary" @click="submit">确 定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>
<style lang="scss" scoped>
:deep(.el-select),
:deep(.el-input-number) {
	width: 100%;
}
</style>
<script lang="ts" setup>
	import { ref,onMounted } from "vue";
	import { ElMessage } from "element-plus";
	import type { FormRules } from "element-plus";
  	import { formatDate } from '/@/utils/formatTime';
	import { addDataExtract, updateDataExtract, detailDataExtract } from "/@/api/main/dataExtract";
	import { getNetTaskNetTaskIdDropdown } from '/@/api/main/dataExtract';

	//父级传递来的参数
	var props = defineProps({
		title: {
		type: String,
		default: "",
	},
	});
	//父级传递来的函数，用于回调
	const emit = defineEmits(["reloadTable"]);
	const ruleFormRef = ref();
	const isShowDialog = ref(false);
	const ruleForm = ref<any>({});
	//自行添加其他规则
	const rules = ref<FormRules>({
		count: [{required: true, message: '请输入提取次数！', trigger: 'blur',},],
	});

	// 页面加载时
	onMounted(() => {

	});

	// 打开弹窗
	const openDialog = async (row: any) => {
		// ruleForm.value = JSON.parse(JSON.stringify(row));
		// 改用detail获取最新数据来编辑
		let rowData = JSON.parse(JSON.stringify(row));
		if (rowData.id)
			ruleForm.value = (await detailDataExtract(rowData.id)).data.result;
		else
			ruleForm.value = rowData;
		isShowDialog.value = true;
	};

	// 关闭弹窗
	const closeDialog = () => {
		emit("reloadTable");
		isShowDialog.value = false;
	};

	// 取消
	const cancel = () => {
		isShowDialog.value = false;
	};

	// 提交
	const submit = async () => {
		ruleFormRef.value.validate(async (isValid: boolean, fields?: any) => {
			if (isValid) {
				let values = ruleForm.value;
				if (ruleForm.value.id == undefined || ruleForm.value.id == null || ruleForm.value.id == "" || ruleForm.value.id == 0) {
					await addDataExtract(values);
				} else {
					await updateDataExtract(values);
				}
				closeDialog();
			} else {
				ElMessage({
					message: `表单有${Object.keys(fields).length}处验证失败，请修改后再提交`,
					type: "error",
				});
			}
		});
	};

	const netTaskNetTaskIdDropdownList = ref<any>([]); 
	const getNetTaskNetTaskIdDropdownList = async () => {
		let list = await getNetTaskNetTaskIdDropdown();
		netTaskNetTaskIdDropdownList.value = list.data.result ?? [];
	};
	getNetTaskNetTaskIdDropdownList();
	





	//将属性或者函数暴露给父组件
	defineExpose({ openDialog });
</script>




