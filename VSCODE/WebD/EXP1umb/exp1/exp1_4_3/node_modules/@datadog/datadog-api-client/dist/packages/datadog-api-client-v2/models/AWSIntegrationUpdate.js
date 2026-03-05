"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSIntegrationUpdate = void 0;
/**
 * The definition of `AWSIntegrationUpdate` object.
 */
class AWSIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSIntegrationUpdate.attributeTypeMap;
    }
}
exports.AWSIntegrationUpdate = AWSIntegrationUpdate;
/**
 * @ignore
 */
AWSIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "AWSCredentialsUpdate",
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
//# sourceMappingURL=AWSIntegrationUpdate.js.map