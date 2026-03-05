"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropicIntegrationUpdate = void 0;
/**
 * The definition of the `AnthropicIntegrationUpdate` object.
 */
class AnthropicIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AnthropicIntegrationUpdate.attributeTypeMap;
    }
}
exports.AnthropicIntegrationUpdate = AnthropicIntegrationUpdate;
/**
 * @ignore
 */
AnthropicIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "AnthropicCredentialsUpdate",
    },
    type: {
        baseName: "type",
        type: "AnthropicIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AnthropicIntegrationUpdate.js.map