"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickupIntegration = void 0;
/**
 * The definition of the `ClickupIntegration` object.
 */
class ClickupIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ClickupIntegration.attributeTypeMap;
    }
}
exports.ClickupIntegration = ClickupIntegration;
/**
 * @ignore
 */
ClickupIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "ClickupCredentials",
        required: true,
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
//# sourceMappingURL=ClickupIntegration.js.map