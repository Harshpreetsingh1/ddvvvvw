"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkMuteFindingsRequestMetaFindings = void 0;
/**
 * Finding object containing the finding information.
 */
class BulkMuteFindingsRequestMetaFindings {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BulkMuteFindingsRequestMetaFindings.attributeTypeMap;
    }
}
exports.BulkMuteFindingsRequestMetaFindings = BulkMuteFindingsRequestMetaFindings;
/**
 * @ignore
 */
BulkMuteFindingsRequestMetaFindings.attributeTypeMap = {
    findingId: {
        baseName: "finding_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BulkMuteFindingsRequestMetaFindings.js.map