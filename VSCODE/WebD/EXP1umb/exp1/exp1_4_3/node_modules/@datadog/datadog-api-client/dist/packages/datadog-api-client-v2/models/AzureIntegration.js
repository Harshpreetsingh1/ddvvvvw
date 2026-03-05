"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureIntegration = void 0;
/**
 * The definition of the `AzureIntegration` object.
 */
class AzureIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureIntegration.attributeTypeMap;
    }
}
exports.AzureIntegration = AzureIntegration;
/**
 * @ignore
 */
AzureIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "AzureCredentials",
        required: true,
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
//# sourceMappingURL=AzureIntegration.js.map