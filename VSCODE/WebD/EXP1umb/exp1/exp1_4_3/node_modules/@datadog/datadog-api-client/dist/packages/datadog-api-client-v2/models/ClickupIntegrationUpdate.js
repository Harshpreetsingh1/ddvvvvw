"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickupIntegrationUpdate = void 0;
/**
 * The definition of the `ClickupIntegrationUpdate` object.
 */
class ClickupIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ClickupIntegrationUpdate.attributeTypeMap;
    }
}
exports.ClickupIntegrationUpdate = ClickupIntegrationUpdate;
/**
 * @ignore
 */
ClickupIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "ClickupCredentialsUpdate",
    },
    type: {
        baseName: "type",
        type: "ClickupIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ClickupIntegrationUpdate.js.map