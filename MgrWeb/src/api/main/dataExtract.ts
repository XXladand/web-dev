import request from '/@/utils/request';
enum Api {
  AddDataExtract = '/api/dataExtract/add',
  DeleteDataExtract = '/api/dataExtract/delete',
  UpdateDataExtract = '/api/dataExtract/update',
  PageDataExtract = '/api/dataExtract/page',
  DetailDataExtract = '/api/dataExtract/detail',
  GetNetTaskNetTaskIdDropdown = '/api/dataExtract/NetTaskNetTaskIdDropdown',
}

// 增加数据提取
export const addDataExtract = (params?: any) =>
	request({
		url: Api.AddDataExtract,
		method: 'post',
		data: params,
	});

// 删除数据提取
export const deleteDataExtract = (params?: any) => 
	request({
			url: Api.DeleteDataExtract,
			method: 'post',
			data: params,
		});

// 编辑数据提取
export const updateDataExtract = (params?: any) => 
	request({
			url: Api.UpdateDataExtract,
			method: 'post',
			data: params,
		});

// 分页查询数据提取
export const pageDataExtract = (params?: any) => 
	request({
			url: Api.PageDataExtract,
			method: 'post',
			data: params,
		});

// 详情数据提取
export const detailDataExtract = (id: any) => 
	request({
			url: Api.DetailDataExtract,
			method: 'get',
			data: { id },
		});

export const getNetTaskNetTaskIdDropdown = () =>
		request({
		url: Api.GetNetTaskNetTaskIdDropdown,
		method: 'get'
		});

