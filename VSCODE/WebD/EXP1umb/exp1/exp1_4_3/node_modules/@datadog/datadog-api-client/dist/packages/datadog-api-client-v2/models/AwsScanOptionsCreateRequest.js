"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsScanOptionsCreateRequest = void 0;
/**
 * Request object that includes the scan options to create.
 */
class AwsScanOptionsCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsScanOptionsCreateRequest.attributeTypeMap;
    }
}
exports.AwsScanOptionsCreateRequest = AwsScanOptionsCreateRequest;
/**
 * @ignore
 */
AwsScanOptionsCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AwsScanOptionsCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsScanOptionsCreateRequest.js.map