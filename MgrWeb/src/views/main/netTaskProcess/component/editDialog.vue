<template>
	<div class="netTaskProcess-container">
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
								<el-option v-for="(item, index) in netTaskNetTaskIdDropdownList" :key="index"
									:value="item.value" :label="item.label+'_'+item.value" />
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="处理类型" prop="processType">
							<el-select clearable v-model="ruleForm.processType" placeholder="请选择处理类型">
								<el-option v-for="(item, index) in dl('cllx')" :key="index" :value="Number(item.code)"
									:label="`[${item.code}] ${item.value}`"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="翻译语言" prop="tanslateLanguage">
							<el-select clearable v-model="ruleForm.tanslateLanguage" placeholder="翻译语言" filterable>
								<el-option v-for="(item, index) in langList" :key="index" :value="item.code"
									:label="`[${item.code}] ${item.name}`"></el-option>

							</el-select>

						</el-form-item>

					</el-col>
					<!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="状态" prop="state">
							<el-select clearable v-model="ruleForm.state" placeholder="请选择状态">
								<el-option v-for="(item,index) in dl('clzt')"  :key="index" :value="Number(item.code)" :label="`[${item.code}] ${item.value}`"></el-option>
								
							</el-select>
							
						</el-form-item>
						
					</el-col> -->
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
import { addNetTaskProcess, updateNetTaskProcess, detailNetTaskProcess } from "/@/api/main/netTaskProcess";
import { getNetTaskNetTaskIdDropdown } from '/@/api/main/netTaskProcess';
import { EnumSearchApiData_Type, GetLangRegionList, LangRegionItem } from "/@/api/main/netSearch";

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
const langList = ref<LangRegionItem[]>([]);
//自行添加其他规则
const rules = ref<FormRules>({
	netTaskId: [{ required: true, message: '请选择任务！', trigger: 'change', },],
	processType: [{ required: true, message: '请选择处理类型！', trigger: 'change', },],
	tanslateLanguage: [
        { 
            validator: (rule, value, callback) => {
				//debugger
                const processType = ruleForm.value.processType;
                if ((processType === 3 || processType === 4) && !value) {
                    callback(new Error('请选择翻译语言！'));
                } else {
                    callback();
                }
            }, 
            trigger: 'change' 
        }
    ]
});

// 页面加载时
onMounted(() => {
	GetLangRegionList({ type: EnumSearchApiData_Type.BingTranslate }).then((res) => {
		langList.value = res.data.result;
	});
});

// 打开弹窗
const openDialog = async (row: any) => {
	// ruleForm.value = JSON.parse(JSON.stringify(row));
	// 改用detail获取最新数据来编辑
	let rowData = JSON.parse(JSON.stringify(row));
	if (rowData.id)
		ruleForm.value = (await detailNetTaskProcess(rowData.id)).data.result;
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
				await addNetTaskProcess(values);
			} else {
				await updateNetTaskProcess(values);
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
