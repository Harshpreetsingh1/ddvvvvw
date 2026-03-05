"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchCoverageSummaryRequestData = void 0;
/**
 * Data object for branch summary request.
 */
class BranchCoverageSummaryRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BranchCoverageSummaryRequestData.attributeTypeMap;
    }
}
exports.BranchCoverageSummaryRequestData = BranchCoverageSummaryRequestData;
/**
 * @ignore
 */
BranchCoverageSummaryRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "BranchCoverageSummaryRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "BranchCoverageSummaryRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BranchCoverageSummaryRequestData.js.map