"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsScanOptionsCreateData = void 0;
/**
 * Object for the scan options of a single AWS account.
 */
class AwsScanOptionsCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsScanOptionsCreateData.attributeTypeMap;
    }
}
exports.AwsScanOptionsCreateData = AwsScanOptionsCreateData;
/**
 * @ignore
 */
AwsScanOptionsCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AwsScanOptionsCreateAttributes",
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
//# sourceMappingURL=AwsScanOptionsCreateData.js.map