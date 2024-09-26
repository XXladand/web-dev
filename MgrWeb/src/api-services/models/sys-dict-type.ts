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

import { StatusEnum } from './status-enum';
import { SysDictData } from './sys-dict-data';
 /**
 * 系统字典类型表
 *
 * @export
 * @interface SysDictType
 */
export interface SysDictType {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysDictType
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof SysDictType
     */
    createTime?: Date;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof SysDictType
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof SysDictType
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof SysDictType
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof SysDictType
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof SysDictType
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof SysDictType
     */
    isDelete?: boolean;

    /**
     * 名称
     *
     * @type {string}
     * @memberof SysDictType
     */
    name: string;

    /**
     * 编码
     *
     * @type {string}
     * @memberof SysDictType
     */
    code: string;

    /**
     * 排序
     *
     * @type {number}
     * @memberof SysDictType
     */
    orderNo?: number;

    /**
     * 备注
     *
     * @type {string}
     * @memberof SysDictType
     */
    remark?: string | null;

    /**
     * @type {StatusEnum}
     * @memberof SysDictType
     */
    status?: StatusEnum;

    /**
     * 字典值集合
     *
     * @type {Array<SysDictData>}
     * @memberof SysDictType
     */
    children?: Array<SysDictData> | null;
}