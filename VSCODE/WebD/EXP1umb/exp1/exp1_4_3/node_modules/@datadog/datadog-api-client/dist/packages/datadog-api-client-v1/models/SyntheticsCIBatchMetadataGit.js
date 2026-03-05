"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsCIBatchMetadataGit = void 0;
/**
 * Git information.
 */
class SyntheticsCIBatchMetadataGit {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsCIBatchMetadataGit.attributeTypeMap;
    }
}
exports.SyntheticsCIBatchMetadataGit = SyntheticsCIBatchMetadataGit;
/**
 * @ignore
 */
SyntheticsCIBatchMetadataGit.attributeTypeMap = {
    branch: {
        baseName: "branch",
        type: "string",
    },
    commitSha: {
        baseName: "commitSha",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsCIBatchMetadataGit.js.map