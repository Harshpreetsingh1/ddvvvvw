"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigCatSDKKey = void 0;
/**
 * The definition of the `ConfigCatSDKKey` object.
 */
class ConfigCatSDKKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfigCatSDKKey.attributeTypeMap;
    }
}
exports.ConfigCatSDKKey = ConfigCatSDKKey;
/**
 * @ignore
 */
ConfigCatSDKKey.attributeTypeMap = {
    apiPassword: {
        baseName: "api_password",
        type: "string",
        required: true,
    },
    apiUsername: {
        baseName: "api_username",
        type: "string",
        required: true,
    },
    sdkKey: {
        baseName: "sdk_key",
        type: "string",
        required: true,
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
//# sourceMappingURL=ConfigCatSDKKey.js.map