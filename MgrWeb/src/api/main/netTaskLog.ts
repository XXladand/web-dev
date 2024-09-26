import request from '/@/utils/request';
enum Api {
  AddNetTaskLog = '/api/netTaskLog/add',
  DeleteNetTaskLog = '/api/netTaskLog/delete',
  UpdateNetTaskLog = '/api/netTaskLog/update',
  PageNetTaskLog = '/api/netTaskLog/page',
  DetailNetTaskLog = '/api/netTaskLog/detail',
  GetNetTaskNetTaskIdDropdown = '/api/netTaskLog/NetTaskNetTaskIdDropdown',
}

// 增加任务日志
export const addNetTaskLog = (params?: any) =>
	request({
		url: Api.AddNetTaskLog,
		method: 'post',
		data: params,
	});

// 删除任务日志
export const deleteNetTaskLog = (params?: any) => 
	request({
			url: Api.DeleteNetTaskLog,
			method: 'post',
			data: params,
		});

// 编辑任务日志
export const updateNetTaskLog = (params?: any) => 
	request({
			url: Api.UpdateNetTaskLog,
			method: 'post',
			data: params,
		});

// 分页查询任务日志
export const pageNetTaskLog = (params?: any) => 
	request({
			url: Api.PageNetTaskLog,
			method: 'post',
			data: params,
		});

// 详情任务日志
export const detailNetTaskLog = (id: any) => 
	request({
			url: Api.DetailNetTaskLog,
			method: 'get',
			data: { id },
		});

export const getNetTaskNetTaskIdDropdown = () =>
		request({
		url: Api.GetNetTaskNetTaskIdDropdown,
		method: 'get'
		});

