﻿<template>
	<div class="netTask-container">
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
						<el-form-item label="名称" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入名称" maxlength="64" show-word-limit clearable />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="网站链接" prop="data">
							<el-input v-model="ruleForm.data" placeholder="请输入网站链接" type="textarea" maxlength="2000" show-word-limit clearable />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="爬取深度" prop="deep">
							<!-- <el-input-number v-model="ruleForm.deep" placeholder="请输入爬取深度" clearable /> -->
							<el-select clearable v-model="ruleForm.deep" placeholder="请选择爬取深度">
								<el-option v-for="(item,index) in dl('pqsd')"  :key="index" :value="Number(item.code)" :label="`[${item.code}] ${item.value}`"></el-option>
							</el-select>
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="是否翻译" prop="isTranslate">
							<el-switch v-model="ruleForm.isTranslate" active-text="是" inactive-text="否" />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="是否提取视频" prop="isOutVideo">
							<el-switch v-model="ruleForm.isOutVideo" active-text="是" inactive-text="否" />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="执行方式" prop="execType">
							<el-select clearable v-model="ruleForm.execType" placeholder="请选择执行方式">
								<el-option v-for="(item,index) in dl('zxfs')"  :key="index" :value="Number(item.code)" :label="`[${item.code}] ${item.value}`"></el-option>
								
							</el-select>
							
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
	import { addNetTask, updateNetTask, detailNetTask } from "/@/api/main/netTask";

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
		name: [{required: true, message: '请输入名称！', trigger: 'blur',},],
		state: [{required: true, message: '请选择状态！', trigger: 'change',},],
		data: [{required: true, message: '请输入网站链接！', trigger: 'blur',},],
		deep: [{required: true, message: '请输入爬取深度！', trigger: 'blur',},],
		execType: [{required: true, message: '请选择执行方式！', trigger: 'change',},],
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
			ruleForm.value = (await detailNetTask(rowData.id)).data.result;
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
					await addNetTask(values);
				} else {
					await updateNetTask(values);
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




