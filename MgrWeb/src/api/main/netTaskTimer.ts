import request from '/@/utils/request';
enum Api {
  AddNetTaskTimer = '/api/netTaskTimer/add',
  DeleteNetTaskTimer = '/api/netTaskTimer/delete',
  UpdateNetTaskTimer = '/api/netTaskTimer/update',
  PageNetTaskTimer = '/api/netTaskTimer/page',
  DetailNetTaskTimer = '/api/netTaskTimer/detail',
}

// 增加任务定时
export const addNetTaskTimer = (params?: any) =>
	request({
		url: Api.AddNetTaskTimer,
		method: 'post',
		data: params,
	});

// 删除任务定时
export const deleteNetTaskTimer = (params?: any) => 
	request({
			url: Api.DeleteNetTaskTimer,
			method: 'post',
			data: params,
		});

// 编辑任务定时
export const updateNetTaskTimer = (params?: any) => 
	request({
			url: Api.UpdateNetTaskTimer,
			method: 'post',
			data: params,
		});

// 分页查询任务定时
export const pageNetTaskTimer = (params?: any) => 
	request({
			url: Api.PageNetTaskTimer,
			method: 'post',
			data: params,
		});

// 详情任务定时
export const detailNetTaskTimer = (id: any) => 
	request({
			url: Api.DetailNetTaskTimer,
			method: 'get',
			data: { id },
		});


