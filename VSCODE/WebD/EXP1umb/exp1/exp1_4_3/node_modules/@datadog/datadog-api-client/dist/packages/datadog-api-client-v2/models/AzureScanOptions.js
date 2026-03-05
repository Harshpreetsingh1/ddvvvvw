"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureScanOptions = void 0;
/**
 * Response object containing Azure scan options for a single subscription.
 */
class AzureScanOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureScanOptions.attributeTypeMap;
    }
}
exports.AzureScanOptions = AzureScanOptions;
/**
 * @ignore
 */
AzureScanOptions.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AzureScanOptionsData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureScanOptions.js.map