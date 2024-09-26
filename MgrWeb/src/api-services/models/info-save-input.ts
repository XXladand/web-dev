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

 /**
 * 系统信息保存输入参数
 *
 * @export
 * @interface InfoSaveInput
 */
export interface InfoSaveInput {

    /**
     * 系统图标（Data URI scheme base64 编码）
     *
     * @type {string}
     * @memberof InfoSaveInput
     */
    sysLogoBase64?: string | null;

    /**
     * 系统图标文件名
     *
     * @type {string}
     * @memberof InfoSaveInput
     */
    sysLogoFileName?: string | null;

    /**
     * 系统主标题
     *
     * @type {string}
     * @memberof InfoSaveInput
     */
    sysTitle?: string | null;

    /**
     * 系统副标题
     *
     * @type {string}
     * @memberof InfoSaveInput
     */
    sysViceTitle?: string | null;

    /**
     * 系统描述
     *
     * @type {string}
     * @memberof InfoSaveInput
     */
    sysViceDesc?: string | null;

    /**
     * 水印内容
     *
     * @type {string}
     * @memberof InfoSaveInput
     */
    sysWatermark?: string | null;

    /**
     * 版权说明
     *
     * @type {string}
     * @memberof InfoSaveInput
     */
    sysCopyright?: string | null;

    /**
     * ICP备案号
     *
     * @type {string}
     * @memberof InfoSaveInput
     */
    sysIcp?: string | null;

    /**
     * ICP地址
     *
     * @type {string}
     * @memberof InfoSaveInput
     */
    sysIcpUrl?: string | null;
}