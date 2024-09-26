import request from '/@/utils/request';
enum Api {
  AddNetTaskProcessDtl = '/api/netTaskProcessDtl/add',
  DeleteNetTaskProcessDtl = '/api/netTaskProcessDtl/delete',
  UpdateNetTaskProcessDtl = '/api/netTaskProcessDtl/update',
  PageNetTaskProcessDtl = '/api/netTaskProcessDtl/page',
  DetailNetTaskProcessDtl = '/api/netTaskProcessDtl/detail',
}

// 增加任务处理明细
export const addNetTaskProcessDtl = (params?: any) =>
	request({
		url: Api.AddNetTaskProcessDtl,
		method: 'post',
		data: params,
	});

// 删除任务处理明细
export const deleteNetTaskProcessDtl = (params?: any) => 
	request({
			url: Api.DeleteNetTaskProcessDtl,
			method: 'post',
			data: params,
		});

// 编辑任务处理明细
export const updateNetTaskProcessDtl = (params?: any) => 
	request({
			url: Api.UpdateNetTaskProcessDtl,
			method: 'post',
			data: params,
		});

// 分页查询任务处理明细
export const pageNetTaskProcessDtl = (params?: any) => 
	request({
			url: Api.PageNetTaskProcessDtl,
			method: 'post',
			data: params,
		});

// 详情任务处理明细
export const detailNetTaskProcessDtl = (id: any) => 
	request({
			url: Api.DetailNetTaskProcessDtl,
			method: 'get',
			data: { id },
		});


