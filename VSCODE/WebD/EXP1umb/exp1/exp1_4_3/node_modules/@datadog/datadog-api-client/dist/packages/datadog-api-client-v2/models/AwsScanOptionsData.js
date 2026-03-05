"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsScanOptionsData = void 0;
/**
 * Single AWS Scan Options entry.
 */
class AwsScanOptionsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsScanOptionsData.attributeTypeMap;
    }
}
exports.AwsScanOptionsData = AwsScanOptionsData;
/**
 * @ignore
 */
AwsScanOptionsData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AwsScanOptionsAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "AwsScanOptionsType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsScanOptionsData.js.map