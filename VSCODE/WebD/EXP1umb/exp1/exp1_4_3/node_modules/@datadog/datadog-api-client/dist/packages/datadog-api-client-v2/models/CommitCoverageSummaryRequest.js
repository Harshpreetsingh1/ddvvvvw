"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitCoverageSummaryRequest = void 0;
/**
 * Request object for getting code coverage summary for a commit.
 */
class CommitCoverageSummaryRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CommitCoverageSummaryRequest.attributeTypeMap;
    }
}
exports.CommitCoverageSummaryRequest = CommitCoverageSummaryRequest;
/**
 * @ignore
 */
CommitCoverageSummaryRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CommitCoverageSummaryRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CommitCoverageSummaryRequest.js.map