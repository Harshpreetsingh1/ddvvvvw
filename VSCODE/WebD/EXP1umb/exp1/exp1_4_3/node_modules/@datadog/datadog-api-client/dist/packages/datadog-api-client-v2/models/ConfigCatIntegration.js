"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigCatIntegration = void 0;
/**
 * The definition of the `ConfigCatIntegration` object.
 */
class ConfigCatIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfigCatIntegration.attributeTypeMap;
    }
}
exports.ConfigCatIntegration = ConfigCatIntegration;
/**
 * @ignore
 */
ConfigCatIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "ConfigCatCredentials",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ConfigCatIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfigCatIntegration.js.map