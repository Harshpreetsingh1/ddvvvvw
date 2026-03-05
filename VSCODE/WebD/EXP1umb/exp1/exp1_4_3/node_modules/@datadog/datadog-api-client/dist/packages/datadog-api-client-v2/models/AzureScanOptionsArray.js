"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureScanOptionsArray = void 0;
/**
 * Response object containing a list of Azure scan options.
 */
class AzureScanOptionsArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureScanOptionsArray.attributeTypeMap;
    }
}
exports.AzureScanOptionsArray = AzureScanOptionsArray;
/**
 * @ignore
 */
AzureScanOptionsArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<AzureScanOptionsData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureScanOptionsArray.js.map