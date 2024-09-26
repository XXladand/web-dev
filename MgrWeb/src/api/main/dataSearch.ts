import request from '/@/utils/request';
enum Api {
	PageDataSearch = '/api/dataSearch/page',
	GetRaw = '/api/dataSearch/GetRaw',
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