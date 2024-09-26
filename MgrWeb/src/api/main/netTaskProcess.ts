import request from '/@/utils/request';
enum Api {
  AddNetTaskProcess = '/api/netTaskProcess/add',
  DeleteNetTaskProcess = '/api/netTaskProcess/delete',
  UpdateNetTaskProcess = '/api/netTaskProcess/update',
  PageNetTaskProcess = '/api/netTaskProcess/page',
  DetailNetTaskProcess = '/api/netTaskProcess/detail',
  GetNetTaskNetTaskIdDropdown = '/api/netTaskProcess/NetTaskNetTaskIdDropdown',
}

// 增加数据处理
export const addNetTaskProcess = (params?: any) =>
	request({
		url: Api.AddNetTaskProcess,
		method: 'post',
		data: params,
	});

// 删除数据处理
export const deleteNetTaskProcess = (params?: any) => 
	request({
			url: Api.DeleteNetTaskProcess,
			method: 'post',
			data: params,
		});

// 编辑数据处理
export const updateNetTaskProcess = (params?: any) => 
	request({
			url: Api.UpdateNetTaskProcess,
			method: 'post',
			data: params,
		});

// 分页查询数据处理
export const pageNetTaskProcess = (params?: any) => 
	request({
			url: Api.PageNetTaskProcess,
			method: 'post',
			data: params,
		});

// 详情数据处理
export const detailNetTaskProcess = (id: any) => 
	request({
			url: Api.DetailNetTaskProcess,
			method: 'get',
			data: { id },
		});

export const getNetTaskNetTaskIdDropdown = () =>
		request({
		url: Api.GetNetTaskNetTaskIdDropdown,
		method: 'get'
		});

