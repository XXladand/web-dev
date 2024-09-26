import request from '/@/utils/request';
enum Api {
	PageTaskLog = '/api/taskLog/page',
}

// 分页查询任务日志
export const pageTaskLog = (params?: any) => 
	request({
			url: Api.PageTaskLog,
			method: 'post',
			data: params,
		});
