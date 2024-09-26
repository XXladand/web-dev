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

import { CultureInfo } from './culture-info';
import { IContainer } from './icontainer';
import { ISite } from './isite';
import { SchemaSerializationMode } from './schema-serialization-mode';
import { SerializationFormat } from './serialization-format';
 /**
 * 
 *
 * @export
 * @interface DataSet
 */
export interface DataSet {

    /**
     * @type {IContainer}
     * @memberof DataSet
     */
    container?: IContainer;

    /**
     * @type {boolean}
     * @memberof DataSet
     */
    designMode?: boolean;

    /**
     * @type {SerializationFormat}
     * @memberof DataSet
     */
    remotingFormat?: SerializationFormat;

    /**
     * @type {SchemaSerializationMode}
     * @memberof DataSet
     */
    schemaSerializationMode?: SchemaSerializationMode;

    /**
     * @type {boolean}
     * @memberof DataSet
     */
    caseSensitive?: boolean;

    /**
     * @type {Array<any>}
     * @memberof DataSet
     */
    defaultViewManager?: Array<any> | null;

    /**
     * @type {boolean}
     * @memberof DataSet
     */
    enforceConstraints?: boolean;

    /**
     * @type {string}
     * @memberof DataSet
     */
    dataSetName?: string | null;

    /**
     * @type {string}
     * @memberof DataSet
     */
    namespace?: string | null;

    /**
     * @type {string}
     * @memberof DataSet
     */
    prefix?: string | null;

    /**
     * @type {{ [key: string]: any; }}
     * @memberof DataSet
     */
    extendedProperties?: { [key: string]: any; } | null;

    /**
     * @type {boolean}
     * @memberof DataSet
     */
    hasErrors?: boolean;

    /**
     * @type {boolean}
     * @memberof DataSet
     */
    isInitialized?: boolean;

    /**
     * @type {CultureInfo}
     * @memberof DataSet
     */
    locale?: CultureInfo;

    /**
     * @type {ISite}
     * @memberof DataSet
     */
    site?: ISite;

    /**
     * @type {Array<any>}
     * @memberof DataSet
     */
    relations?: Array<any> | null;

    /**
     * @type {Array<any>}
     * @memberof DataSet
     */
    tables?: Array<any> | null;
}
