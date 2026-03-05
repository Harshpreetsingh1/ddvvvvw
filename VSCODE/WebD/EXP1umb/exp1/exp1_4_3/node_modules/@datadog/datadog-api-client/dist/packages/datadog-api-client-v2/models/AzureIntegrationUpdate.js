"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureIntegrationUpdate = void 0;
/**
 * The definition of the `AzureIntegrationUpdate` object.
 */
class AzureIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureIntegrationUpdate.attributeTypeMap;
    }
}
exports.AzureIntegrationUpdate = AzureIntegrationUpdate;
/**
 * @ignore
 */
AzureIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "AzureCredentialsUpdate",
    },
    type: {
        baseName: "type",
        type: "AzureIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureIntegrationUpdate.js.map