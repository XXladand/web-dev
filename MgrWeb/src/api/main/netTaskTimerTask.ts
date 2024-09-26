import request from '/@/utils/request';
enum Api {
  AddNetTaskTimerTask = '/api/netTaskTimerTask/add',
  DeleteNetTaskTimerTask = '/api/netTaskTimerTask/delete',
  UpdateNetTaskTimerTask = '/api/netTaskTimerTask/update',
  PageNetTaskTimerTask = '/api/netTaskTimerTask/page',
  DetailNetTaskTimerTask = '/api/netTaskTimerTask/detail',
  GetNetTaskTimerNetTaskTimerIdDropdown = '/api/netTaskTimerTask/NetTaskTimerNetTaskTimerIdDropdown',
  GetTaskList = '/api/netTaskTimerTask/GetTaskList',
}

// 增加定时器任务
export const addNetTaskTimerTask = (params?: any) =>
	request({
		url: Api.AddNetTaskTimerTask,
		method: 'post',
		data: params,
	});

// 删除定时器任务
export const deleteNetTaskTimerTask = (params?: any) => 
	request({
			url: Api.DeleteNetTaskTimerTask,
			method: 'post',
			data: params,
		});

// 编辑定时器任务
export const updateNetTaskTimerTask = (params?: any) => 
	request({
			url: Api.UpdateNetTaskTimerTask,
			method: 'post',
			data: params,
		});

// 分页查询定时器任务
export const pageNetTaskTimerTask = (params?: any) => 
	request({
			url: Api.PageNetTaskTimerTask,
			method: 'post',
			data: params,
		});

// 详情定时器任务
export const detailNetTaskTimerTask = (id: any) => 
	request({
			url: Api.DetailNetTaskTimerTask,
			method: 'get',
			data: { id },
		});

export const getNetTaskTimerNetTaskTimerIdDropdown = () =>
		request({
		url: Api.GetNetTaskTimerNetTaskTimerIdDropdown,
		method: 'get'
		});
		
export const getTaskList = (id: any) => 
	request({
			url: Api.GetTaskList,
			method: 'get',
			data: { id },
		});

