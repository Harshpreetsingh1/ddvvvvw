"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBatchDetailsData = void 0;
/**
 * Wrapper object that contains the details of a batch.
 */
class SyntheticsBatchDetailsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBatchDetailsData.attributeTypeMap;
    }
}
exports.SyntheticsBatchDetailsData = SyntheticsBatchDetailsData;
/**
 * @ignore
 */
SyntheticsBatchDetailsData.attributeTypeMap = {
    metadata: {
        baseName: "metadata",
        type: "SyntheticsCIBatchMetadata",
    },
    results: {
        baseName: "results",
        type: "Array<SyntheticsBatchResult>",
    },
    status: {
        baseName: "status",
        type: "SyntheticsBatchStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBatchDetailsData.js.map