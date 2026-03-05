"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsScanOptionsListResponse = void 0;
/**
 * Response object that includes a list of AWS scan options.
 */
class AwsScanOptionsListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsScanOptionsListResponse.attributeTypeMap;
    }
}
exports.AwsScanOptionsListResponse = AwsScanOptionsListResponse;
/**
 * @ignore
 */
AwsScanOptionsListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<AwsScanOptionsData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsScanOptionsListResponse.js.map