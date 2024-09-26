<template>
	<div class="netSearch-container">
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
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="搜索关键字" prop="prompt">
							<el-input v-model="ruleForm.prompt" placeholder="请输入搜索关键字" type="textarea" maxlength="150"
								show-word-limit clearable />
							<span>搜索时间范围：Bing时间为Day,Week,Month。google为hour,week,month.</span>
						</el-form-item>

					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="语言" prop="language">
							<el-select clearable v-model="ruleForm.language" placeholder="请选择语言" filterable>
								<el-option v-for="(item, index) in langList" :key="index" :value="item.code"
									:label="`[${item.code}] ${item.name}`"></el-option>

							</el-select>

						</el-form-item>

					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="智能过滤搜索内容" prop="enableGpt">
							<el-switch v-model="ruleForm.enableGpt" active-text="是" inactive-text="否" />
							<!-- <br/>
							<span>按量计费，爬取成功率提高</span> -->
						</el-form-item>
					</el-col>
				</el-row>
				<el-divider />
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="爬取深度" prop="deep">
							<!-- <el-input-number v-model="ruleForm.deep" placeholder="请输入爬取深度" clearable /> -->
							<el-select clearable v-model="ruleForm.deep" placeholder="请选择爬取深度">
								<el-option v-for="(item, index) in dl('pqsd')" :key="index" :value="Number(item.code)"
									:label="`[${item.code}] ${item.value}`"></el-option>
							</el-select>
						</el-form-item>

					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="绕过反爬" prop="isUnlocker">
							<el-switch v-model="ruleForm.isUnlocker" active-text="是" inactive-text="否" />
							<!-- <br/>
							<span>按量计费，爬取成功率提高</span> -->
						</el-form-item>
					</el-col>
				</el-row>
				<el-divider />
				<div v-for="(item, index) in ruleForm.process" :key="index">
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="处理类型" prop="processType">
								<el-select clearable v-model="item.processType" placeholder="请选择处理类型">
									<el-option v-for="(item, index) in dl('cllx')" :key="index"
										:value="Number(item.code)" :label="`[${item.code}] ${item.value}`"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="翻译语言" prop="tanslateLanguage"
								v-if="item.processType == 3 || item.processType == 4">
								<el-select clearable v-model="item.tanslateLanguage" placeholder="翻译语言" filterable>
									<el-option v-for="(item, index) in langList" :key="index" :value="item.code"
										:label="`[${item.code}] ${item.name}`"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</el-row>
					<div class="button-container-end">
						<el-button @click="processDel">删除</el-button>
					</div>
				</div>
				<el-row :gutter="35">
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<div class="button-container-center">
							<el-button @click="processAdd">添加处理</el-button>
						</div>
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

.button-container-end {
	display: flex;
	justify-content: flex-end;
}

.button-container-center {
	display: flex;
	justify-content: center;
}
</style>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import type { FormRules } from "element-plus";
import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
import { formatDate } from '/@/utils/formatTime';
import {
	addNetSearch, updateNetSearch, detailNetSearch
	, generateQuery, EnumNetSearch_EngineType, LangRegionItem
	, GetLangRegionList, GetLangRegionListInput, EnumSearchApiData_Type
	, searchBing, searchGoogle
} from "/@/api/main/netSearch";

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
const regionList = ref<LangRegionItem[]>([]);
const searchResult = ref<any[]>([]);
const isLoading = ref(false);
//自行添加其他规则
const rules = ref<FormRules>({
	prompt: [{ required: true, message: '请输入关键字！', trigger: 'blur', },],
	language: [{ required: true, message: '请选择语言！', trigger: 'change', },],
	deep: [{ required: true, message: '请输入爬取深度！', trigger: 'blur', },],
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
	if (rowData.id) {
		ruleForm.value = (await detailNetSearch(rowData.id)).data.result;
	}
	else {
		ruleForm.value = rowData;
		ruleForm.value.process = ruleForm.value.process || [{}];
	}
	isShowDialog.value = true;
};

// 关闭弹窗
const closeDialog = () => {
	emit("reloadTable");
	isShowDialog.value = false;
};
//打开加载
const openLoading = async () => {
	isLoading.value = true;
};

//关闭加载

const closeLoading = async () => {
	isLoading.value = false;
};

const processAdd = async () => {
	ruleForm.value.process.push({});
};
const processDel = async (index: number) => {
	ruleForm.value.process.splice(index, 1);
};

// 取消
const cancel = () => {
	isShowDialog.value = false;
};

// 提交
const submit = async () => {
	//判断后处理
	const process = ruleForm.value.process;
	const processTypes = process.map((item: { processType: any; }) => item.processType);
	for (let i = 0; i < process.length; i++) {
		const item = process[i];
		if (!item.processType) {
			return ElMessage({
				message: `请选择处理类型！`,
				type: "error",
			});
		}
		if (new Set(processTypes).size !== process.length) {
			return ElMessage({
				message: `处理类型重复！`,
				type: "error",
			});
		}
		if (item.processType == 3 || item.processType == 4) {
			if (!item.tanslateLanguage) {
				return ElMessage({
					message: `请选择翻译语言！`,
					type: "error",
				});
			}
		}
	}

	ruleFormRef.value.validate(async (isValid: boolean, fields?: any) => {
		if (isValid) {
			await openLoading();
			let values = ruleForm.value;
			if (ruleForm.value.id == undefined || ruleForm.value.id == null || ruleForm.value.id == "" || ruleForm.value.id == 0) {
				await addNetSearch(values)
					.finally(() => {
						closeLoading();
						closeDialog();
					});
			} else {
				await updateNetSearch(values)
					.finally(() => {
						closeLoading();
						closeDialog();
					});
			}
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
