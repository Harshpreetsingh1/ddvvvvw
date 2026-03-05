"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsScanOptionsUpdateRequest = void 0;
/**
 * Request object that includes the scan options to update.
 */
class AwsScanOptionsUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsScanOptionsUpdateRequest.attributeTypeMap;
    }
}
exports.AwsScanOptionsUpdateRequest = AwsScanOptionsUpdateRequest;
/**
 * @ignore
 */
AwsScanOptionsUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AwsScanOptionsUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsScanOptionsUpdateRequest.js.map