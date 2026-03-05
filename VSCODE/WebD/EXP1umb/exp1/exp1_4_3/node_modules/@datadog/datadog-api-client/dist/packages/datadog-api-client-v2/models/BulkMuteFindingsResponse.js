"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkMuteFindingsResponse = void 0;
/**
 * The expected response schema.
 */
class BulkMuteFindingsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BulkMuteFindingsResponse.attributeTypeMap;
    }
}
exports.BulkMuteFindingsResponse = BulkMuteFindingsResponse;
/**
 * @ignore
 */
BulkMuteFindingsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "BulkMuteFindingsResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BulkMuteFindingsResponse.js.map