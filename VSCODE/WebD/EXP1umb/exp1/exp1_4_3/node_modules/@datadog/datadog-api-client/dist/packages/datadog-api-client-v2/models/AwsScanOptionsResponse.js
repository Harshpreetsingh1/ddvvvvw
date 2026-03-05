"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsScanOptionsResponse = void 0;
/**
 * Response object that includes the scan options of an AWS account.
 */
class AwsScanOptionsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsScanOptionsResponse.attributeTypeMap;
    }
}
exports.AwsScanOptionsResponse = AwsScanOptionsResponse;
/**
 * @ignore
 */
AwsScanOptionsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AwsScanOptionsData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsScanOptionsResponse.js.map