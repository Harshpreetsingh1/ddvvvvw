"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropicIntegration = void 0;
/**
 * The definition of the `AnthropicIntegration` object.
 */
class AnthropicIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AnthropicIntegration.attributeTypeMap;
    }
}
exports.AnthropicIntegration = AnthropicIntegration;
/**
 * @ignore
 */
AnthropicIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "AnthropicCredentials",
        required: true,
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
//# sourceMappingURL=AnthropicIntegration.js.map