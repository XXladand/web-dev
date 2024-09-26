import request from '/@/utils/request';
enum Api {
	PageDataSearch = '/api/darkDataSearch/page',
	ProcessPage = '/api/darkDataSearch/ProcessPage',
	GetRaw = '/api/darkDataSearch/GetRaw',
}

// 分页查询搜索引擎
export const pageDarkDataSearch = (params?: any) =>
	request({
		url: Api.PageDataSearch,
		method: 'post',
		data: params,
	});

// 分页查询搜索数据-已处理
export const ProcessPage = (params?: any) =>
	request({
		url: Api.ProcessPage,
		method: 'post',
		data: params,
	});

// 详情数据提取
export const GetRaw = (id: any, type: any) =>
	request({
		url: Api.GetRaw,
		method: 'get',
		data: { id, type },
	});