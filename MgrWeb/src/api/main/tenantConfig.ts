import request from '/@/utils/request';
enum Api {
  AddTenantConfig = '/api/tenantConfig/add',
  DeleteTenantConfig = '/api/tenantConfig/delete',
  UpdateTenantConfig = '/api/tenantConfig/update',
  PageTenantConfig = '/api/tenantConfig/page',
  DetailTenantConfig = '/api/tenantConfig/detail',
  TenantList = '/api/tenantConfig/TenantList',
}

// 增加租户配置
export const addTenantConfig = (params?: any) =>
	request({
		url: Api.AddTenantConfig,
		method: 'post',
		data: params,
	});

// 删除租户配置
export const deleteTenantConfig = (params?: any) => 
	request({
			url: Api.DeleteTenantConfig,
			method: 'post',
			data: params,
		});

// 编辑租户配置
export const updateTenantConfig = (params?: any) => 
	request({
			url: Api.UpdateTenantConfig,
			method: 'post',
			data: params,
		});

// 分页查询租户配置
export const pageTenantConfig = (params?: any) => 
	request({
			url: Api.PageTenantConfig,
			method: 'post',
			data: params,
		});

// 详情租户配置
export const detailTenantConfig = (id: any) => 
	request({
			url: Api.DetailTenantConfig,
			method: 'get',
			data: { id },
		});
// 详情租户配置
export const getTenantList = () => 
	request({
			url: Api.TenantList,
			method: 'get',
			data: {  },
		});


