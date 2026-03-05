"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureScanOptionsInputUpdateData = void 0;
/**
 * Data object for updating the scan options of a single Azure subscription.
 */
class AzureScanOptionsInputUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureScanOptionsInputUpdateData.attributeTypeMap;
    }
}
exports.AzureScanOptionsInputUpdateData = AzureScanOptionsInputUpdateData;
/**
 * @ignore
 */
AzureScanOptionsInputUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AzureScanOptionsInputUpdateDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AzureScanOptionsInputUpdateDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureScanOptionsInputUpdateData.js.map