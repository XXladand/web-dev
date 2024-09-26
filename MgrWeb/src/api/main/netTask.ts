import request from '/@/utils/request';
enum Api {
  AddNetTask = '/api/netTask/add',
  DeleteNetTask = '/api/netTask/delete',
  UpdateNetTask = '/api/netTask/update',
  PageNetTask = '/api/netTask/page',
  DetailNetTask = '/api/netTask/detail',
}

// 增加任务
export const addNetTask = (params?: any) =>
	request({
		url: Api.AddNetTask,
		method: 'post',
		data: params,
	});

// 删除任务
export const deleteNetTask = (params?: any) => 
	request({
			url: Api.DeleteNetTask,
			method: 'post',
			data: params,
		});

// 编辑任务
export const updateNetTask = (params?: any) => 
	request({
			url: Api.UpdateNetTask,
			method: 'post',
			data: params,
		});

// 分页查询任务
export const pageNetTask = (params?: any) => 
	request({
			url: Api.PageNetTask,
			method: 'post',
			data: params,
		});

// 详情任务
export const detailNetTask = (id: any) => 
	request({
			url: Api.DetailNetTask,
			method: 'get',
			data: { id },
		});


