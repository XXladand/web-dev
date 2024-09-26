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

import { Assembly } from './assembly';
import { CustomAttributeData } from './custom-attribute-data';
import { ModuleHandle } from './module-handle';
 /**
 * 
 *
 * @export
 * @interface Module
 */
export interface Module {

    /**
     * @type {Assembly}
     * @memberof Module
     */
    assembly?: Assembly;

    /**
     * @type {string}
     * @memberof Module
     */
    fullyQualifiedName?: string | null;

    /**
     * @type {string}
     * @memberof Module
     */
    name?: string | null;

    /**
     * @type {number}
     * @memberof Module
     */
    mdStreamVersion?: number;

    /**
     * @type {string}
     * @memberof Module
     */
    moduleVersionId?: string;

    /**
     * @type {string}
     * @memberof Module
     */
    scopeName?: string | null;

    /**
     * @type {ModuleHandle}
     * @memberof Module
     */
    moduleHandle?: ModuleHandle;

    /**
     * @type {Array<CustomAttributeData>}
     * @memberof Module
     */
    customAttributes?: Array<CustomAttributeData> | null;

    /**
     * @type {number}
     * @memberof Module
     */
    metadataToken?: number;
}