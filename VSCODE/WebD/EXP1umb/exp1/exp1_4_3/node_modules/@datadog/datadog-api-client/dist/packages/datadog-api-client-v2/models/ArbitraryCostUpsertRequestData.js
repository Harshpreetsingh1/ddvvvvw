"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitraryCostUpsertRequestData = void 0;
/**
 * The definition of `ArbitraryCostUpsertRequestData` object.
 */
class ArbitraryCostUpsertRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ArbitraryCostUpsertRequestData.attributeTypeMap;
    }
}
exports.ArbitraryCostUpsertRequestData = ArbitraryCostUpsertRequestData;
/**
 * @ignore
 */
ArbitraryCostUpsertRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ArbitraryCostUpsertRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ArbitraryCostUpsertRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ArbitraryCostUpsertRequestData.js.map