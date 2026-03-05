"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkMuteFindingsResponseData = void 0;
/**
 * Data object containing the ID of the request that was updated.
 */
class BulkMuteFindingsResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BulkMuteFindingsResponseData.attributeTypeMap;
    }
}
exports.BulkMuteFindingsResponseData = BulkMuteFindingsResponseData;
/**
 * @ignore
 */
BulkMuteFindingsResponseData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "FindingType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BulkMuteFindingsResponseData.js.map