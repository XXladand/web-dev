import request from '/@/utils/request';
enum Api {
  AddSocialMedia = '/api/socialMedia/add',
  DeleteSocialMedia = '/api/socialMedia/delete',
  UpdateSocialMedia = '/api/socialMedia/update',
  PageSocialMedia = '/api/socialMedia/page',
  DetailSocialMedia = '/api/socialMedia/detail',
  RunSocialMedia = '/api/socialMedia/RunSocialTask',
}
// 执行
export const runSocialTask = (params?: any) =>
	request({
		url: Api.RunSocialMedia,
		method: 'post',
		data: params,
	});

// 增加社交媒体
export const addSocialMedia = (params?: any) =>
	request({
		url: Api.AddSocialMedia,
		method: 'post',
		data: params,
	});

// 删除社交媒体
export const deleteSocialMedia = (params?: any) => 
	request({
			url: Api.DeleteSocialMedia,
			method: 'post',
			data: params,
		});

// 编辑社交媒体
export const updateSocialMedia = (params?: any) => 
	request({
			url: Api.UpdateSocialMedia,
			method: 'post',
			data: params,
		});

// 分页查询社交媒体
export const pageSocialMedia = (params?: any) => 
	request({
			url: Api.PageSocialMedia,
			method: 'post',
			data: params,
		});

// 详情社交媒体
export const detailSocialMedia = (id: any) => 
	request({
			url: Api.DetailSocialMedia,
			method: 'get',
			data: { id },
		});


