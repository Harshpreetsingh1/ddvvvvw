"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigCatIntegrationUpdate = void 0;
/**
 * The definition of the `ConfigCatIntegrationUpdate` object.
 */
class ConfigCatIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfigCatIntegrationUpdate.attributeTypeMap;
    }
}
exports.ConfigCatIntegrationUpdate = ConfigCatIntegrationUpdate;
/**
 * @ignore
 */
ConfigCatIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "ConfigCatCredentialsUpdate",
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
//# sourceMappingURL=ConfigCatIntegrationUpdate.js.map