"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppGitInfo = void 0;
/**
 * If pipelines are triggered due to actions to a Git repository, then all payloads must contain this.
 * Note that either `tag` or `branch` has to be provided, but not both.
 */
class CIAppGitInfo {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppGitInfo.attributeTypeMap;
    }
}
exports.CIAppGitInfo = CIAppGitInfo;
/**
 * @ignore
 */
CIAppGitInfo.attributeTypeMap = {
    authorEmail: {
        baseName: "author_email",
        type: "string",
        required: true,
    },
    authorName: {
        baseName: "author_name",
        type: "string",
    },
    authorTime: {
        baseName: "author_time",
        type: "string",
    },
    branch: {
        baseName: "branch",
        type: "string",
    },
    commitTime: {
        baseName: "commit_time",
        type: "string",
    },
    committerEmail: {
        baseName: "committer_email",
        type: "string",
    },
    committerName: {
        baseName: "committer_name",
        type: "string",
    },
    defaultBranch: {
        baseName: "default_branch",
        type: "string",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    repositoryUrl: {
        baseName: "repository_url",
        type: "string",
        required: true,
    },
    sha: {
        baseName: "sha",
        type: "string",
        required: true,
    },
    tag: {
        baseName: "tag",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppGitInfo.js.map