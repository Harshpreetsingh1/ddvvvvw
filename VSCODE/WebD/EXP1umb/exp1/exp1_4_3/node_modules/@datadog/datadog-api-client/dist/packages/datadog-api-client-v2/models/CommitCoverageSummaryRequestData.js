"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitCoverageSummaryRequestData = void 0;
/**
 * Data object for commit summary request.
 */
class CommitCoverageSummaryRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CommitCoverageSummaryRequestData.attributeTypeMap;
    }
}
exports.CommitCoverageSummaryRequestData = CommitCoverageSummaryRequestData;
/**
 * @ignore
 */
CommitCoverageSummaryRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CommitCoverageSummaryRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CommitCoverageSummaryRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CommitCoverageSummaryRequestData.js.map