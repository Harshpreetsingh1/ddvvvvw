"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsanaIntegrationUpdate = void 0;
/**
 * The definition of the `AsanaIntegrationUpdate` object.
 */
class AsanaIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AsanaIntegrationUpdate.attributeTypeMap;
    }
}
exports.AsanaIntegrationUpdate = AsanaIntegrationUpdate;
/**
 * @ignore
 */
AsanaIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "AsanaCredentialsUpdate",
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
//# sourceMappingURL=AsanaIntegrationUpdate.js.map