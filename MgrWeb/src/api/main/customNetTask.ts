import request from '/@/utils/request';
enum Api {
  AddCustomNetTask = '/api/customNetTask/add',
  DeleteCustomNetTask = '/api/customNetTask/delete',
  UpdateCustomNetTask = '/api/customNetTask/update',
  PageCustomNetTask = '/api/customNetTask/page',
  DetailCustomNetTask = '/api/customNetTask/detail',
  RunCustomNetTask = '/api/customNetTask/RunCustomTask',
}
// 执行
export const runCustomNetTask = (params?: any) =>
	request({
		url: Api.RunCustomNetTask,
		method: 'post',
		data: params,
	});

// 增加自定义任务
export const addCustomNetTask = (params?: any) =>
	request({
		url: Api.AddCustomNetTask,
		method: 'post',
		data: params,
	});

// 删除自定义任务
export const deleteCustomNetTask = (params?: any) => 
	request({
			url: Api.DeleteCustomNetTask,
			method: 'post',
			data: params,
		});

// 编辑自定义任务
export const updateCustomNetTask = (params?: any) => 
	request({
			url: Api.UpdateCustomNetTask,
			method: 'post',
			data: params,
		});

// 分页查询自定义任务
export const pageCustomNetTask = (params?: any) => 
	request({
			url: Api.PageCustomNetTask,
			method: 'post',
			data: params,
		});

// 详情自定义任务
export const detailCustomNetTask = (id: any) => 
	request({
			url: Api.DetailCustomNetTask,
			method: 'get',
			data: { id },
		});


