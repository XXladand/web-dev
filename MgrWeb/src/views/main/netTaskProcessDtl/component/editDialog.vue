<template>
	<div class="netTaskProcessDtl-container">
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
						<el-form-item label="任务后处理id" prop="netTaskProcessId">
							<el-input v-model="ruleForm.netTaskProcessId" placeholder="请输入任务后处理id" maxlength="0" show-word-limit clearable />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="参数" prop="param">
							<el-input v-model="ruleForm.param" placeholder="请输入参数" maxlength="2000" show-word-limit clearable />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="原始内容数据id" prop="resultRawId">
							<el-input v-model="ruleForm.resultRawId" placeholder="请输入原始内容数据id" maxlength="255" show-word-limit clearable />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="爬取完成数据id" prop="processedId">
							<el-input v-model="ruleForm.processedId" placeholder="请输入爬取完成数据id" maxlength="255" show-word-limit clearable />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="处理类型" prop="processType">
							<el-select clearable v-model="ruleForm.processType" placeholder="请选择处理类型">
								<el-option v-for="(item,index) in dl('EnumNetTaskProcess_Type')"  :key="index" :value="Number(item.code)" :label="`[${item.code}] ${item.value}`"></el-option>
								
							</el-select>
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="状态" prop="state">
							<el-select clearable v-model="ruleForm.state" placeholder="请选择状态">
								<el-option v-for="(item,index) in dl('EnumNetTaskProcess_State')"  :key="index" :value="Number(item.code)" :label="`[${item.code}] ${item.value}`"></el-option>
								
							</el-select>
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="状态消息" prop="stateMsg">
							<el-input v-model="ruleForm.stateMsg" placeholder="请输入状态消息" type="textarea" maxlength="2000" show-word-limit clearable />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="类型" prop="type">
							<el-select clearable v-model="ruleForm.type" placeholder="请选择类型">
								<el-option v-for="(item,index) in dl('EnumNetTask_Type')"  :key="index" :value="Number(item.code)" :label="`[${item.code}] ${item.value}`"></el-option>
								
							</el-select>
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="原始数据创建时间" prop="rawCreateTime">
							<el-date-picker v-model="ruleForm.rawCreateTime" type="date" placeholder="原始数据创建时间" />
							
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
	import { addNetTaskProcessDtl, updateNetTaskProcessDtl, detailNetTaskProcessDtl } from "/@/api/main/netTaskProcessDtl";

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
		netTaskProcessId: [{required: true, message: '请输入任务后处理id！', trigger: 'blur',},],
		resultRawId: [{required: true, message: '请输入原始内容数据id！', trigger: 'blur',},],
		processType: [{required: true, message: '请选择处理类型！', trigger: 'change',},],
		state: [{required: true, message: '请选择状态！', trigger: 'change',},],
		type: [{required: true, message: '请选择类型！', trigger: 'change',},],
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
			ruleForm.value = (await detailNetTaskProcessDtl(rowData.id)).data.result;
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
					await addNetTaskProcessDtl(values);
				} else {
					await updateNetTaskProcessDtl(values);
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






	//将属性或者函数暴露给父组件
	defineExpose({ openDialog });
</script>




