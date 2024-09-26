<template>
	<div class="netTaskTimer-container">
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
							<el-input v-model="ruleForm.name" placeholder="请输入名称" maxlength="64" show-word-limit
								clearable />

						</el-form-item>

					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="类型" prop="type">
							<el-select clearable v-model="ruleForm.type" placeholder="请选择类型" :disabled="ruleForm.id > 0">
								<el-option v-for="(item, index) in dl('EnumNetTaskTimer_Type')" :key="index"
									:value="Number(item.code)" :label="`[${item.code}] ${item.value}`"></el-option>

							</el-select>

						</el-form-item>

					</el-col>
				</el-row>
				<el-divider />
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="间隔时长/分钟" prop="interval">
							<el-input-number v-model="ruleForm.interval" placeholder="请输入间隔时长/分钟" clearable />

						</el-form-item>

					</el-col>
				</el-row>
				<el-row :gutter="35">

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="间隔生效开始时间" prop="intervalSTime">
							<el-date-picker v-model="ruleForm.intervalSTime" type="datetime" placeholder="间隔生效开始时间" value-format="YYYY-MM-DD HH:mm:ss" />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="间隔生效结束时间" prop="intervalETime">
							<el-date-picker v-model="ruleForm.intervalETime" type="datetime" placeholder="间隔生效结束时间" value-format="YYYY-MM-DD HH:mm:ss" />
						</el-form-item>
					</el-col>
				</el-row>
				<el-divider />
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="整点" prop="times">
							<el-select clearable v-model="ruleForm.times" placeholder="请选择整点" multiple>
								<el-option v-for="(item, index) in dl('EnumHourOfDay')" :key="index" :value="item.code"
									:label="`[${item.code}] ${item.value}`"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-divider />
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="失效时间" prop="finishTime">
							<el-date-picker v-model="ruleForm.finishTime" type="datetime" placeholder="失效时间" />
						</el-form-item>
					</el-col>
				</el-row>
				<el-divider />
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="备注" prop="remark">
							<el-input v-model="ruleForm.remark" type="textarea" placeholder="请输入备注" maxlength="200"
								show-word-limit clearable />
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
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import type { FormRules } from "element-plus";
import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
import { formatDate } from '/@/utils/formatTime';
import { addNetTaskTimer, updateNetTaskTimer, detailNetTaskTimer } from "/@/api/main/netTaskTimer";

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
	name: [{ required: true, message: '请输入名称！', trigger: 'blur', },],
	type: [{ required: true, message: '请选择类型！', trigger: 'change', },],
	interval: [{ required: true, message: '请输入间隔时长/分钟！', trigger: 'blur', },],
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
		ruleForm.value = (await detailNetTaskTimer(rowData.id)).data.result;
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
				await addNetTaskTimer(values);
			} else {
				await updateNetTaskTimer(values);
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
