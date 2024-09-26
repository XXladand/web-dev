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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddSubscribeMessageTemplateInput } from '../models';
import { AdminResultObject } from '../models';
import { AdminResultWxOpenIdOutput } from '../models';
import { AdminResultWxPhoneOutput } from '../models';
import { SendSubscribeMessageInput } from '../models';
import { WxOpenIdLoginInput } from '../models';
/**
 * SysWxOpenApi - axios parameter creator
 * @export
 */
export const SysWxOpenApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加订阅消息模板 🔖
         * @param {AddSubscribeMessageTemplateInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWxOpenAddSubscribeMessageTemplatePost: async (body?: AddSubscribeMessageTemplateInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysWxOpen/addSubscribeMessageTemplate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取订阅消息模板列表 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWxOpenMessageTemplateListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysWxOpen/messageTemplateList`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 发送订阅消息 🔖
         * @param {SendSubscribeMessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWxOpenSendSubscribeMessagePost: async (body?: SendSubscribeMessageInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysWxOpen/sendSubscribeMessage`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取微信用户OpenId 🔖
         * @param {string} jsCode JsCode
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWxOpenWxOpenIdGet: async (jsCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jsCode' is not null or undefined
            if (jsCode === null || jsCode === undefined) {
                throw new RequiredError('jsCode','Required parameter jsCode was null or undefined when calling apiSysWxOpenWxOpenIdGet.');
            }
            const localVarPath = `/api/sysWxOpen/wxOpenId`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (jsCode !== undefined) {
                localVarQueryParameter['JsCode'] = jsCode;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 微信小程序登录OpenId 🔖
         * @param {WxOpenIdLoginInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWxOpenWxOpenIdLoginPost: async (body?: WxOpenIdLoginInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysWxOpen/wxOpenIdLogin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取微信用户电话号码 🔖
         * @param {string} code Code
         * @param {string} openId OpenId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysWxOpenWxPhoneGet: async (code: string, openId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            if (code === null || code === undefined) {
                throw new RequiredError('code','Required parameter code was null or undefined when calling apiSysWxOpenWxPhoneGet.');
            }
            // verify required parameter 'openId' is not null or undefined
            if (openId === null || openId === undefined) {
                throw new RequiredError('openId','Required parameter openId was null or undefined when calling apiSysWxOpenWxPhoneGet.');
            }
            const localVarPath = `/api/sysWxOpen/wxPhone`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (code !== undefined) {
                localVarQueryParameter['Code'] = code;
            }

            if (openId !== undefined) {
                localVarQueryParameter['OpenId'] = openId;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SysWxOpenApi - functional programming interface
 * @export
 */
export const SysWxOpenApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加订阅消息模板 🔖
         * @param {AddSubscribeMessageTemplateInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWxOpenAddSubscribeMessageTemplatePost(body?: AddSubscribeMessageTemplateInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysWxOpenApiAxiosParamCreator(configuration).apiSysWxOpenAddSubscribeMessageTemplatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取订阅消息模板列表 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWxOpenMessageTemplateListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysWxOpenApiAxiosParamCreator(configuration).apiSysWxOpenMessageTemplateListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 发送订阅消息 🔖
         * @param {SendSubscribeMessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWxOpenSendSubscribeMessagePost(body?: SendSubscribeMessageInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysWxOpenApiAxiosParamCreator(configuration).apiSysWxOpenSendSubscribeMessagePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取微信用户OpenId 🔖
         * @param {string} jsCode JsCode
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWxOpenWxOpenIdGet(jsCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultWxOpenIdOutput>>> {
            const localVarAxiosArgs = await SysWxOpenApiAxiosParamCreator(configuration).apiSysWxOpenWxOpenIdGet(jsCode, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 微信小程序登录OpenId 🔖
         * @param {WxOpenIdLoginInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWxOpenWxOpenIdLoginPost(body?: WxOpenIdLoginInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysWxOpenApiAxiosParamCreator(configuration).apiSysWxOpenWxOpenIdLoginPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取微信用户电话号码 🔖
         * @param {string} code Code
         * @param {string} openId OpenId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWxOpenWxPhoneGet(code: string, openId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultWxPhoneOutput>>> {
            const localVarAxiosArgs = await SysWxOpenApiAxiosParamCreator(configuration).apiSysWxOpenWxPhoneGet(code, openId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysWxOpenApi - factory interface
 * @export
 */
export const SysWxOpenApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 增加订阅消息模板 🔖
         * @param {AddSubscribeMessageTemplateInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWxOpenAddSubscribeMessageTemplatePost(body?: AddSubscribeMessageTemplateInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysWxOpenApiFp(configuration).apiSysWxOpenAddSubscribeMessageTemplatePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取订阅消息模板列表 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWxOpenMessageTemplateListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysWxOpenApiFp(configuration).apiSysWxOpenMessageTemplateListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 发送订阅消息 🔖
         * @param {SendSubscribeMessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWxOpenSendSubscribeMessagePost(body?: SendSubscribeMessageInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysWxOpenApiFp(configuration).apiSysWxOpenSendSubscribeMessagePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取微信用户OpenId 🔖
         * @param {string} jsCode JsCode
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWxOpenWxOpenIdGet(jsCode: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultWxOpenIdOutput>> {
            return SysWxOpenApiFp(configuration).apiSysWxOpenWxOpenIdGet(jsCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 微信小程序登录OpenId 🔖
         * @param {WxOpenIdLoginInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWxOpenWxOpenIdLoginPost(body?: WxOpenIdLoginInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysWxOpenApiFp(configuration).apiSysWxOpenWxOpenIdLoginPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取微信用户电话号码 🔖
         * @param {string} code Code
         * @param {string} openId OpenId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysWxOpenWxPhoneGet(code: string, openId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultWxPhoneOutput>> {
            return SysWxOpenApiFp(configuration).apiSysWxOpenWxPhoneGet(code, openId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysWxOpenApi - object-oriented interface
 * @export
 * @class SysWxOpenApi
 * @extends {BaseAPI}
 */
export class SysWxOpenApi extends BaseAPI {
    /**
     * 
     * @summary 增加订阅消息模板 🔖
     * @param {AddSubscribeMessageTemplateInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWxOpenApi
     */
    public async apiSysWxOpenAddSubscribeMessageTemplatePost(body?: AddSubscribeMessageTemplateInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysWxOpenApiFp(this.configuration).apiSysWxOpenAddSubscribeMessageTemplatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取订阅消息模板列表 🔖
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWxOpenApi
     */
    public async apiSysWxOpenMessageTemplateListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysWxOpenApiFp(this.configuration).apiSysWxOpenMessageTemplateListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 发送订阅消息 🔖
     * @param {SendSubscribeMessageInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWxOpenApi
     */
    public async apiSysWxOpenSendSubscribeMessagePost(body?: SendSubscribeMessageInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysWxOpenApiFp(this.configuration).apiSysWxOpenSendSubscribeMessagePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取微信用户OpenId 🔖
     * @param {string} jsCode JsCode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWxOpenApi
     */
    public async apiSysWxOpenWxOpenIdGet(jsCode: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultWxOpenIdOutput>> {
        return SysWxOpenApiFp(this.configuration).apiSysWxOpenWxOpenIdGet(jsCode, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 微信小程序登录OpenId 🔖
     * @param {WxOpenIdLoginInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWxOpenApi
     */
    public async apiSysWxOpenWxOpenIdLoginPost(body?: WxOpenIdLoginInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysWxOpenApiFp(this.configuration).apiSysWxOpenWxOpenIdLoginPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取微信用户电话号码 🔖
     * @param {string} code Code
     * @param {string} openId OpenId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysWxOpenApi
     */
    public async apiSysWxOpenWxPhoneGet(code: string, openId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultWxPhoneOutput>> {
        return SysWxOpenApiFp(this.configuration).apiSysWxOpenWxPhoneGet(code, openId, options).then((request) => request(this.axios, this.basePath));
    }
}
