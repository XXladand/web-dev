import request from '/@/utils/request';
enum Api {
	PageDataSearch = '/api/dataSearch/page',
	GetRaw = '/api/dataSearch/GetRaw',
	ExportTaskAsync = '/api/dataSearch/ExportTaskAsync',
}

// 分页查询搜索引擎
export const pageDataSearch = (params?: any) =>
	request({
		url: Api.PageDataSearch,
		method: 'post',
		data: params,
	});
// 详情数据提取
export const GetRaw = (id: any,type:any) =>
	request({
		url: Api.GetRaw,
		method: 'get',
		data: { id,type },
	});
// 详情数据导出
export const ExportTaskAsync = (id: any,type:any,fileName:any) =>
	request({
		url: Api.GetRaw,
		method: 'get',
		data: { id,type,fileName },
	});