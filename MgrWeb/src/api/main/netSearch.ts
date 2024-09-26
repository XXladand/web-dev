import request from '/@/utils/request';
enum Api {
	AddNetSearch = '/api/netSearch/add',
	DeleteNetSearch = '/api/netSearch/delete',
	UpdateNetSearch = '/api/netSearch/update',
	PageNetSearch = '/api/netSearch/page',
	DetailNetSearch = '/api/netSearch/detail',
	GetLangRegionList = '/api/netSearch/getLangRegionList',
	GenerateQuery = '/api/netSearch/GenerateQuery',
	SearchGoogle = '/api/netSearch/SearchGoogle',
	SearchBing = '/api/netSearch/SearchBing',
	RunSearchTask = '/api/netSearch/RunSearchTask',
}

// 增加搜索引擎
export const addNetSearch = (params?: any) =>
	request({
		url: Api.AddNetSearch,
		method: 'post',
		data: params,
	});

// 删除搜索引擎
export const deleteNetSearch = (params?: any) =>
	request({
		url: Api.DeleteNetSearch,
		method: 'post',
		data: params,
	});

// 编辑搜索引擎
export const updateNetSearch = (params?: any) =>
	request({
		url: Api.UpdateNetSearch,
		method: 'post',
		data: params,
	});

// 分页查询搜索引擎
export const pageNetSearch = (params?: any) =>
	request({
		url: Api.PageNetSearch,
		method: 'post',
		data: params,
	});

// 执行
export const runSearchTask = (params?: any) =>
	request({
		url: Api.RunSearchTask,
		method: 'post',
		data: params,
	});

// 详情搜索引擎
export const detailNetSearch = (id: any) =>
	request({
		url: Api.DetailNetSearch,
		method: 'get',
		data: { id },
	});

// 获取地区语言数据
export enum EnumNetSearch_EngineType {
	Bing = 1,
	Google = 2
}
export interface LangRegionItem{
	name: string;
	code: string;
}
export interface GetLangRegionListInput {
	type: EnumSearchApiData_Type;
	lang?: string;
	region?: string;
}
export enum EnumSearchApiData_Type {
	BingLanguageRegion = 1,
	BingLanguage = 2,
	BingRegion = 3,
	GoogleLanguage = 4,
	GoogleRegion = 5,
	BingTranslate = 6
}
export const GetLangRegionList = (params?: GetLangRegionListInput) =>
	request({
		url: Api.GetLangRegionList,
		method: 'get',
		data: params,
	});

// 生成搜索查询
export const generateQuery = (keyWord: any) =>
	request({
		url: Api.GenerateQuery,
		method: 'get',
		data: { keyWord },
	});

// Bing搜索
export const searchBing = (keyWord: string, lang: string, region: string, timeRange: string) =>
	request({
		url: Api.SearchBing,
		method: 'get',
		data: { keyWord, lang, region, timeRange },
	});

// Google搜索
export const searchGoogle = (keyWord: string, lang: string, region: string, timeRange: string) =>
	request({
		url: Api.SearchGoogle,
		method: 'get',
		data: { keyWord, lang, region, timeRange },
	});