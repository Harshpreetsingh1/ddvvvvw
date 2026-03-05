"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSIntegration = void 0;
/**
 * The definition of `AWSIntegration` object.
 */
class AWSIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSIntegration.attributeTypeMap;
    }
}
exports.AWSIntegration = AWSIntegration;
/**
 * @ignore
 */
AWSIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "AWSCredentials",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AWSIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSIntegration.js.map