"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchCoverageSummaryRequest = void 0;
/**
 * Request object for getting code coverage summary for a branch.
 */
class BranchCoverageSummaryRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BranchCoverageSummaryRequest.attributeTypeMap;
    }
}
exports.BranchCoverageSummaryRequest = BranchCoverageSummaryRequest;
/**
 * @ignore
 */
BranchCoverageSummaryRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "BranchCoverageSummaryRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BranchCoverageSummaryRequest.js.map