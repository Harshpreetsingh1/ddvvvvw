"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsanaIntegration = void 0;
/**
 * The definition of the `AsanaIntegration` object.
 */
class AsanaIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AsanaIntegration.attributeTypeMap;
    }
}
exports.AsanaIntegration = AsanaIntegration;
/**
 * @ignore
 */
AsanaIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "AsanaCredentials",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AsanaIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AsanaIntegration.js.map