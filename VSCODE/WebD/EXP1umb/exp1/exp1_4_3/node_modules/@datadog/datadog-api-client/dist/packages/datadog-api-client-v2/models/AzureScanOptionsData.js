"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureScanOptionsData = void 0;
/**
 * Single Azure scan options entry.
 */
class AzureScanOptionsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureScanOptionsData.attributeTypeMap;
    }
}
exports.AzureScanOptionsData = AzureScanOptionsData;
/**
 * @ignore
 */
AzureScanOptionsData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AzureScanOptionsDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AzureScanOptionsDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureScanOptionsData.js.map