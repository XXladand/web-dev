/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。整合最新技术，模块插件式开发，前后端分离，开箱即用。<br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！</font></b></u>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Filter } from './filter';
import { Search } from './search';
 /**
 * 开放接口身份输入参数
 *
 * @export
 * @interface OpenAccessInput
 */
export interface OpenAccessInput {

    /**
     * @type {Search}
     * @memberof OpenAccessInput
     */
    search?: Search;

    /**
     * 模糊查询关键字
     *
     * @type {string}
     * @memberof OpenAccessInput
     */
    keyword?: string | null;

    /**
     * @type {Filter}
     * @memberof OpenAccessInput
     */
    filter?: Filter;

    /**
     * 当前页码
     *
     * @type {number}
     * @memberof OpenAccessInput
     */
    page?: number;

    /**
     * 页码容量
     *
     * @type {number}
     * @memberof OpenAccessInput
     */
    pageSize?: number;

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof OpenAccessInput
     */
    field?: string | null;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof OpenAccessInput
     */
    order?: string | null;

    /**
     * 降序排序
     *
     * @type {string}
     * @memberof OpenAccessInput
     */
    descStr?: string | null;

    /**
     * 身份标识
     *
     * @type {string}
     * @memberof OpenAccessInput
     */
    accessKey?: string | null;
}