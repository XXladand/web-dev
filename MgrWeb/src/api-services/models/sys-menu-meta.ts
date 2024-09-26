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
 * 菜单Meta配置
 *
 * @export
 * @interface SysMenuMeta
 */
export interface SysMenuMeta {

    /**
     * 标题
     *
     * @type {string}
     * @memberof SysMenuMeta
     */
    title?: string | null;

    /**
     * 图标
     *
     * @type {string}
     * @memberof SysMenuMeta
     */
    icon?: string | null;

    /**
     * 是否内嵌
     *
     * @type {boolean}
     * @memberof SysMenuMeta
     */
    isIframe?: boolean;

    /**
     * 外链链接
     *
     * @type {string}
     * @memberof SysMenuMeta
     */
    isLink?: string | null;

    /**
     * 是否隐藏
     *
     * @type {boolean}
     * @memberof SysMenuMeta
     */
    isHide?: boolean;

    /**
     * 是否缓存
     *
     * @type {boolean}
     * @memberof SysMenuMeta
     */
    isKeepAlive?: boolean;

    /**
     * 是否固定
     *
     * @type {boolean}
     * @memberof SysMenuMeta
     */
    isAffix?: boolean;
}