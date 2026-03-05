"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBatchDetails = void 0;
/**
 * Details about a batch response.
 */
class SyntheticsBatchDetails {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBatchDetails.attributeTypeMap;
    }
}
exports.SyntheticsBatchDetails = SyntheticsBatchDetails;
/**
 * @ignore
 */
SyntheticsBatchDetails.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SyntheticsBatchDetailsData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBatchDetails.js.map