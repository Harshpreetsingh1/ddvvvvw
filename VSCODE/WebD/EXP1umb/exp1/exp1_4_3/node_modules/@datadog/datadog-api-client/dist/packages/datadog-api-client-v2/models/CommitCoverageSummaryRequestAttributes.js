"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitCoverageSummaryRequestAttributes = void 0;
/**
 * Attributes for requesting code coverage summary for a commit.
 */
class CommitCoverageSummaryRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CommitCoverageSummaryRequestAttributes.attributeTypeMap;
    }
}
exports.CommitCoverageSummaryRequestAttributes = CommitCoverageSummaryRequestAttributes;
/**
 * @ignore
 */
CommitCoverageSummaryRequestAttributes.attributeTypeMap = {
    commitSha: {
        baseName: "commit_sha",
        type: "string",
        required: true,
    },
    repositoryId: {
        baseName: "repository_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CommitCoverageSummaryRequestAttributes.js.map