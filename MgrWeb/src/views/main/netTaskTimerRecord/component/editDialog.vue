<template>
	<div class="netTaskTimerRecord-container">
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
						<el-form-item label="任务定时" prop="netTaskTimerId">
							<el-select clearable filterable v-model="ruleForm.netTaskTimerId" placeholder="请选择任务定时">
								<el-option v-for="(item,index) in netTaskTimerNetTaskTimerIdDropdownList" :key="index" :value="item.value" :label="item.label" />
								
							</el-select>
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="参数" prop="param">
							<el-input v-model="ruleForm.param" placeholder="请输入参数" maxlength="2000" show-word-limit clearable />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="结果" prop="result">
							<el-input v-model="ruleForm.result" placeholder="请输入结果" maxlength="2000" show-word-limit clearable />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="状态" prop="state">
							<el-select clearable v-model="ruleForm.state" placeholder="请选择状态">
								<el-option v-for="(item,index) in dl('rwdsjlzt')"  :key="index" :value="Number(item.code)" :label="`[${item.code}] ${item.value}`"></el-option>
								
							</el-select>
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="运行时间" prop="runTime">
							<el-date-picker v-model="ruleForm.runTime" type="date" placeholder="运行时间" />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="运行时长（秒）" prop="duration">
							<el-input-number v-model="ruleForm.duration" placeholder="请输入运行时长（秒）" clearable />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="结束时间" prop="finishTime">
							<el-date-picker v-model="ruleForm.finishTime" type="date" placeholder="结束时间" />
							
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
	import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
  	import { formatDate } from '/@/utils/formatTime';
	import { addNetTaskTimerRecord, updateNetTaskTimerRecord, detailNetTaskTimerRecord } from "/@/api/main/netTaskTimerRecord";
	import { getNetTaskTimerNetTaskTimerIdDropdown } from '/@/api/main/netTaskTimerRecord';

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
		param: [{required: true, message: '请输入参数！', trigger: 'blur',},],
		result: [{required: true, message: '请输入结果！', trigger: 'blur',},],
		state: [{required: true, message: '请选择状态！', trigger: 'change',},],
		runTime: [{required: true, message: '请选择运行时间！', trigger: 'change',},],
		duration: [{required: true, message: '请输入运行时长（秒）！', trigger: 'blur',},],
		finishTime: [{required: true, message: '请选择结束时间！', trigger: 'change',},],
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
			ruleForm.value = (await detailNetTaskTimerRecord(rowData.id)).data.result;
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
					await addNetTaskTimerRecord(values);
				} else {
					await updateNetTaskTimerRecord(values);
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

	const netTaskTimerNetTaskTimerIdDropdownList = ref<any>([]); 
	const getNetTaskTimerNetTaskTimerIdDropdownList = async () => {
		let list = await getNetTaskTimerNetTaskTimerIdDropdown();
		netTaskTimerNetTaskTimerIdDropdownList.value = list.data.result ?? [];
	};
	getNetTaskTimerNetTaskTimerIdDropdownList();
	





	//将属性或者函数暴露给父组件
	defineExpose({ openDialog });
</script>




