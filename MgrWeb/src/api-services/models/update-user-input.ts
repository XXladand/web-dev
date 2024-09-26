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

import { AccountTypeEnum } from './account-type-enum';
import { CardTypeEnum } from './card-type-enum';
import { CultureLevelEnum } from './culture-level-enum';
import { GenderEnum } from './gender-enum';
import { StatusEnum } from './status-enum';
import { SysOrg } from './sys-org';
import { SysUserExtOrg } from './sys-user-ext-org';
 /**
 * 更新用户输入参数
 *
 * @export
 * @interface UpdateUserInput
 */
export interface UpdateUserInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof UpdateUserInput
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof UpdateUserInput
     */
    createTime?: Date;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof UpdateUserInput
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof UpdateUserInput
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof UpdateUserInput
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof UpdateUserInput
     */
    isDelete?: boolean;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof UpdateUserInput
     */
    tenantId?: number | null;

    /**
     * 昵称
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    nickName?: string | null;

    /**
     * 头像
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    avatar?: string | null;

    /**
     * @type {GenderEnum}
     * @memberof UpdateUserInput
     */
    sex?: GenderEnum;

    /**
     * 年龄
     *
     * @type {number}
     * @memberof UpdateUserInput
     */
    age?: number;

    /**
     * 出生日期
     *
     * @type {Date}
     * @memberof UpdateUserInput
     */
    birthday?: Date | null;

    /**
     * 民族
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    nation?: string | null;

    /**
     * 手机号码
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    phone?: string | null;

    /**
     * @type {CardTypeEnum}
     * @memberof UpdateUserInput
     */
    cardType?: CardTypeEnum;

    /**
     * 身份证号
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    idCardNum?: string | null;

    /**
     * 邮箱
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    email?: string | null;

    /**
     * 地址
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    address?: string | null;

    /**
     * @type {CultureLevelEnum}
     * @memberof UpdateUserInput
     */
    cultureLevel?: CultureLevelEnum;

    /**
     * 政治面貌
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    politicalOutlook?: string | null;

    /**
     * 毕业院校
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    college?: string | null;

    /**
     * 办公电话
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    officePhone?: string | null;

    /**
     * 紧急联系人
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    emergencyContact?: string | null;

    /**
     * 紧急联系人电话
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    emergencyPhone?: string | null;

    /**
     * 紧急联系人地址
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    emergencyAddress?: string | null;

    /**
     * 个人简介
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    introduction?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof UpdateUserInput
     */
    orderNo?: number;

    /**
     * @type {StatusEnum}
     * @memberof UpdateUserInput
     */
    status?: StatusEnum;

    /**
     * 备注
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    remark?: string | null;

    /**
     * @type {AccountTypeEnum}
     * @memberof UpdateUserInput
     */
    accountType?: AccountTypeEnum;

    /**
     * 直属机构Id
     *
     * @type {number}
     * @memberof UpdateUserInput
     */
    orgId?: number;

    /**
     * @type {SysOrg}
     * @memberof UpdateUserInput
     */
    sysOrg?: SysOrg;

    /**
     * 直属主管Id
     *
     * @type {number}
     * @memberof UpdateUserInput
     */
    managerUserId?: number | null;

    /**
     * 职位Id
     *
     * @type {number}
     * @memberof UpdateUserInput
     */
    posId?: number;

    /**
     * 工号
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    jobNum?: string | null;

    /**
     * 职级
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    posLevel?: string | null;

    /**
     * 职称
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    posTitle?: string | null;

    /**
     * 擅长领域
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    expertise?: string | null;

    /**
     * 办公区域
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    officeZone?: string | null;

    /**
     * 办公室
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    office?: string | null;

    /**
     * 入职日期
     *
     * @type {Date}
     * @memberof UpdateUserInput
     */
    joinDate?: Date | null;

    /**
     * 最新登录Ip
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    lastLoginIp?: string | null;

    /**
     * 最新登录地点
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    lastLoginAddress?: string | null;

    /**
     * 最新登录时间
     *
     * @type {Date}
     * @memberof UpdateUserInput
     */
    lastLoginTime?: Date | null;

    /**
     * 最新登录设备
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    lastLoginDevice?: string | null;

    /**
     * 电子签名
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    signature?: string | null;

    /**
     * 账号
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    account: string;

    /**
     * 真实姓名
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    realName: string;

    /**
     * 域用户
     *
     * @type {string}
     * @memberof UpdateUserInput
     */
    domainAccount?: string | null;

    /**
     * 角色集合
     *
     * @type {Array<number>}
     * @memberof UpdateUserInput
     */
    roleIdList?: Array<number> | null;

    /**
     * 扩展机构集合
     *
     * @type {Array<SysUserExtOrg>}
     * @memberof UpdateUserInput
     */
    extOrgIdList?: Array<SysUserExtOrg> | null;
}