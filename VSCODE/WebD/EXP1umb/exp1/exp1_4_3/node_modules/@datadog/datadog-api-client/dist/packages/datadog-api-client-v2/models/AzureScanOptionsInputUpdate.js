"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureScanOptionsInputUpdate = void 0;
/**
 * Request object for updating Azure scan options.
 */
class AzureScanOptionsInputUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureScanOptionsInputUpdate.attributeTypeMap;
    }
}
exports.AzureScanOptionsInputUpdate = AzureScanOptionsInputUpdate;
/**
 * @ignore
 */
AzureScanOptionsInputUpdate.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AzureScanOptionsInputUpdateData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureScanOptionsInputUpdate.js.map