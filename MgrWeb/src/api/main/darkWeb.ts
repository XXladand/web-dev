import request from '/@/utils/request';
enum Api {
  AddDarkWeb = '/api/darkWeb/add',
  DeleteDarkWeb = '/api/darkWeb/delete',
  UpdateDarkWeb = '/api/darkWeb/update',
  PageDarkWeb = '/api/darkWeb/page',
  DetailDarkWeb = '/api/darkWeb/detail',
  RunDarkTask = '/api/darkWeb/RunDarkTask',
}

// 执行
export const runDarkTask = (params?: any) =>
	request({
		url: Api.RunDarkTask,
		method: 'post',
		data: params,
	});

// 增加暗网任务
export const addDarkWeb = (params?: any) =>
	request({
		url: Api.AddDarkWeb,
		method: 'post',
		data: params,
	});

// 删除暗网任务
export const deleteDarkWeb = (params?: any) => 
	request({
			url: Api.DeleteDarkWeb,
			method: 'post',
			data: params,
		});

// 编辑暗网任务
export const updateDarkWeb = (params?: any) => 
	request({
			url: Api.UpdateDarkWeb,
			method: 'post',
			data: params,
		});

// 分页查询暗网任务
export const pageDarkWeb = (params?: any) => 
	request({
			url: Api.PageDarkWeb,
			method: 'post',
			data: params,
		});

// 详情暗网任务
export const detailDarkWeb = (id: any) => 
	request({
			url: Api.DetailDarkWeb,
			method: 'get',
			data: { id },
		});


