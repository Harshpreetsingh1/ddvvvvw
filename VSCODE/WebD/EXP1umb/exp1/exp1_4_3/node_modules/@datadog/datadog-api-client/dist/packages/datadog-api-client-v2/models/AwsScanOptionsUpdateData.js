"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsScanOptionsUpdateData = void 0;
/**
 * Object for the scan options of a single AWS account.
 */
class AwsScanOptionsUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsScanOptionsUpdateData.attributeTypeMap;
    }
}
exports.AwsScanOptionsUpdateData = AwsScanOptionsUpdateData;
/**
 * @ignore
 */
AwsScanOptionsUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AwsScanOptionsUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AwsScanOptionsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsScanOptionsUpdateData.js.map