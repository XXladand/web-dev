/* tslint:disable */
/* eslint-disable */
/**
 * DingTalk
 * 集成钉钉开放平台<br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！</font></b></u>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { DingTalkBaseResponseListDingTalkEmpRosterFieldVo } from './ding-talk-base-response-list-ding-talk-emp-roster-field-vo';
 /**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultDingTalkBaseResponseListDingTalkEmpRosterFieldVo
 */
export interface AdminResultDingTalkBaseResponseListDingTalkEmpRosterFieldVo {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultDingTalkBaseResponseListDingTalkEmpRosterFieldVo
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultDingTalkBaseResponseListDingTalkEmpRosterFieldVo
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultDingTalkBaseResponseListDingTalkEmpRosterFieldVo
     */
    message?: string | null;

    /**
     * @type {DingTalkBaseResponseListDingTalkEmpRosterFieldVo}
     * @memberof AdminResultDingTalkBaseResponseListDingTalkEmpRosterFieldVo
     */
    result?: DingTalkBaseResponseListDingTalkEmpRosterFieldVo;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultDingTalkBaseResponseListDingTalkEmpRosterFieldVo
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultDingTalkBaseResponseListDingTalkEmpRosterFieldVo
     */
    time?: Date;
}
