import request from '/@/utils/request';
enum Api {
	PageDataSearch = '/api/socialMediaSearch/page',
}

// 分页查询搜索引擎
export const pageDataSearch = (params?: any) =>
	request({
		url: Api.PageDataSearch,
		method: 'post',
		data: params,
	});