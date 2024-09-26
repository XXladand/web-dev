import request from '/@/utils/request';
enum Api {
  AddNetTaskTimerRecord = '/api/netTaskTimerRecord/add',
  DeleteNetTaskTimerRecord = '/api/netTaskTimerRecord/delete',
  UpdateNetTaskTimerRecord = '/api/netTaskTimerRecord/update',
  PageNetTaskTimerRecord = '/api/netTaskTimerRecord/page',
  DetailNetTaskTimerRecord = '/api/netTaskTimerRecord/detail',
  GetNetTaskTimerNetTaskTimerIdDropdown = '/api/netTaskTimerRecord/NetTaskTimerNetTaskTimerIdDropdown',
}

// 增加任务定时记录
export const addNetTaskTimerRecord = (params?: any) =>
	request({
		url: Api.AddNetTaskTimerRecord,
		method: 'post',
		data: params,
	});

// 删除任务定时记录
export const deleteNetTaskTimerRecord = (params?: any) => 
	request({
			url: Api.DeleteNetTaskTimerRecord,
			method: 'post',
			data: params,
		});

// 编辑任务定时记录
export const updateNetTaskTimerRecord = (params?: any) => 
	request({
			url: Api.UpdateNetTaskTimerRecord,
			method: 'post',
			data: params,
		});

// 分页查询任务定时记录
export const pageNetTaskTimerRecord = (params?: any) => 
	request({
			url: Api.PageNetTaskTimerRecord,
			method: 'post',
			data: params,
		});

// 详情任务定时记录
export const detailNetTaskTimerRecord = (id: any) => 
	request({
			url: Api.DetailNetTaskTimerRecord,
			method: 'get',
			data: { id },
		});

export const getNetTaskTimerNetTaskTimerIdDropdown = () =>
		request({
		url: Api.GetNetTaskTimerNetTaskTimerIdDropdown,
		method: 'get'
		});

