"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCommentAttributes = void 0;
/**
 * Case comment attributes
 */
class CaseCommentAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseCommentAttributes.attributeTypeMap;
    }
}
exports.CaseCommentAttributes = CaseCommentAttributes;
/**
 * @ignore
 */
CaseCommentAttributes.attributeTypeMap = {
    comment: {
        baseName: "comment",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseCommentAttributes.js.map