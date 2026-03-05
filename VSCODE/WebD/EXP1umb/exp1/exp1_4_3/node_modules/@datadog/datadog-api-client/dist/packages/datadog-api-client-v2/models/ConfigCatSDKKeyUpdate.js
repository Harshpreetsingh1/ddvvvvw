"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigCatSDKKeyUpdate = void 0;
/**
 * The definition of the `ConfigCatSDKKey` object.
 */
class ConfigCatSDKKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfigCatSDKKeyUpdate.attributeTypeMap;
    }
}
exports.ConfigCatSDKKeyUpdate = ConfigCatSDKKeyUpdate;
/**
 * @ignore
 */
ConfigCatSDKKeyUpdate.attributeTypeMap = {
    apiPassword: {
        baseName: "api_password",
        type: "string",
    },
    apiUsername: {
        baseName: "api_username",
        type: "string",
    },
    sdkKey: {
        baseName: "sdk_key",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ConfigCatSDKKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfigCatSDKKeyUpdate.js.map