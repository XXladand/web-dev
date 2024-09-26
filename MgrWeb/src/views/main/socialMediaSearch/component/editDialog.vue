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
					<el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18" class="mb20">
						<el-form-item label="搜索关键字">
							<el-input v-model="ruleForm.keyWord" placeholder="请输入搜索关键字" maxlength="500" show-word-limit
								clearable />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" class="mb20">
						<el-form-item label="">
							<el-button type="primary" plain @click="do_generateQuery">生成提示词</el-button>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="提示词" prop="prompt">
							<el-input v-model="ruleForm.prompt" placeholder="请输入提示词" type="textarea" maxlength="500"
								show-word-limit clearable />

						</el-form-item>

					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="引擎类型" prop="engineType">
							<el-select @change="engineTypeChange" clearable v-model="ruleForm.engineType"
								placeholder="请选择引擎类型">
								<el-option v-for="(item, index) in dl('ssyq')" :key="index" :value="Number(item.code)"
									:label="`[${item.code}] ${item.value}`"></el-option>

							</el-select>

						</el-form-item>

					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="语言" prop="language">
							<el-select @change="languageChange" clearable v-model="ruleForm.language"
								placeholder="请选择语言" filterable>
								<el-option v-for="(item, index) in langList" :key="index" :value="item.code"
									:label="`[${item.code}] ${item.name}`"></el-option>

							</el-select>

						</el-form-item>

					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="地区" prop="region">
							<el-select clearable v-model="ruleForm.region" placeholder="请选择地区" filterable>
								<el-option v-for="(item, index) in regionList" :key="index" :value="item.code"
									:label="`[${item.code}] ${item.name}`"></el-option>

							</el-select>

						</el-form-item>

					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="时间范围" prop="timeRange">
							<el-select clearable v-model="ruleForm.timeRange" placeholder="请选择时间范围">
								<el-option v-for="(item, index) in dl('sjfw')" :key="index" :value="item.code"
									:label="`[${item.code}] ${item.value}`"></el-option>

							</el-select>

						</el-form-item>

					</el-col>
				</el-row>
				<el-row justify="center">
					<el-col :xs="24" :sm="2" :md="2" :lg="2" :xl="2" class="mb20" justify="center">
						<el-form-item label="">
							<el-button type="primary" plain style="padding: 0 30px 0 30px;"
								@click="do_search">搜索</el-button>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20" justify="center">
						<el-form-item label="搜索结果" prop="urls">
							<el-checkbox-group v-model="ruleForm.urls">
								<el-checkbox v-for="(item, index) in searchResult" :label="item.title"
									:value="item.link" />
							</el-checkbox-group>
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
//自行添加其他规则
const rules = ref<FormRules>({
	engineType: [{ required: true, message: '请选择引擎类型！', trigger: 'change', },],
	prompt: [{ required: true, message: '请输入提示词！', trigger: 'blur', },],
	language: [{ required: true, message: '请选择语言！', trigger: 'change', },],
	region: [{ required: true, message: '请选择地区！', trigger: 'change', },],
	timeRange: [{ required: true, message: '请选择时间范围！', trigger: 'change', },],
	//checkedSearchResult: [{ required: false, message: '请选择搜索结果！', trigger: 'change', },],
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
		ruleForm.value = (await detailNetSearch(rowData.id)).data.result;
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
	rules.value.urls = [{ required: true, message: '请选择搜索结果！', trigger: 'change', },];

	ruleFormRef.value.validate(async (isValid: boolean, fields?: any) => {
		if (isValid) {
			debugger
			let values = ruleForm.value;
			if (ruleForm.value.id == undefined || ruleForm.value.id == null || ruleForm.value.id == "" || ruleForm.value.id == 0) {
				await addNetSearch(values);
			} else {
				await updateNetSearch(values);
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

// 生成提示词
const do_generateQuery = async () => {
	if (ruleForm.value.keyWord) {
		let value = ruleForm.value.keyWord;
		await generateQuery(value).then((res) => {
			ruleForm.value.prompt = res.data.result;
			ElMessage({
				message: `生成完成`,
				type: "success",
			});
		});
	} else {
		ElMessage({
			message: `请输入搜索关键字`,
			type: "error",
		});
	}
};
//搜索引擎改变
const engineTypeChange = (value: any) => {
	switch (value) {
		case EnumNetSearch_EngineType.Bing:
			GetLangRegionList({ type: EnumSearchApiData_Type.BingLanguage }).then((res) => {
				langList.value = res.data.result;
			});
			GetLangRegionList({ type: EnumSearchApiData_Type.BingRegion }).then((res) => {
				regionList.value = res.data.result;
			});
		case EnumNetSearch_EngineType.Google:
			GetLangRegionList({ type: EnumSearchApiData_Type.GoogleLanguage }).then((res) => {
				langList.value = res.data.result;
			});
			GetLangRegionList({ type: EnumSearchApiData_Type.GoogleRegion }).then((res) => {
				regionList.value = res.data.result;
			});
			break;
		default:
			langList.value = [];
			regionList.value = [];
			break;
	}
};
//语言改变
const languageChange = (value: any) => {
	if (ruleForm.value.engineType == EnumNetSearch_EngineType.Bing) {
		if (value) {
			GetLangRegionList({ type: EnumSearchApiData_Type.BingRegion, lang: value }).then((res) => {
				regionList.value = res.data.result;
			});
		}
	} else {
		GetLangRegionList({ type: EnumSearchApiData_Type.BingRegion }).then((res) => {
			regionList.value = res.data.result;
		});
	}
};
//地区改变
// const regionChange = (value: any) => {
// 	if (ruleForm.value.engineType == EnumNetSearch_EngineType.Bing) {
// 		if (value) {
// 			GetLangRegionList({ type: EnumSearchApiData_Type.BingLanguage, region: value }).then((res) => {
// 				langList.value = res.data.result;
// 			});
// 		}
// 	} else {
// 		GetLangRegionList({ type: EnumSearchApiData_Type.BingLanguage }).then((res) => {
// 			langList.value = res.data.result;
// 		});
// 	}
// };

//搜索
const do_search = async () => {
	rules.value.urls = [{ required: false, message: '请选择搜索结果！', trigger: 'change', },];

	ruleFormRef.value.validate(async (isValid: boolean, fields?: any) => {
		if (isValid) {
			let values = ruleForm.value;
			switch (values.engineType) {
				case EnumNetSearch_EngineType.Bing:
					searchBing(values.prompt, values.language, values.region, values.timeRange).then((res) => {
						let result = res.data.result;
						console.log(result);
						searchResult.value = result;
					});
					break;
				case EnumNetSearch_EngineType.Google:
					searchGoogle(values.prompt, values.language, values.region, values.timeRange).then((res) => {
						let result = res.data.result;
						console.log(result);
						searchResult.value = result;
					});
					break;
				default:
					break;
			}
		} else {
			ElMessage({
				message: `表单有${Object.keys(fields).length}处验证失败，请修改后再搜索`,
				type: "error",
			});
		}
	});
};

//将属性或者函数暴露给父组件
defineExpose({ openDialog });
</script>
