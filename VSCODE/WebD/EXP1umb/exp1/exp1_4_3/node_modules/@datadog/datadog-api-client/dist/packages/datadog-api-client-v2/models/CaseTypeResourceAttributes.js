"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTypeResourceAttributes = void 0;
/**
 * Case Type resource attributes
 */
class CaseTypeResourceAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseTypeResourceAttributes.attributeTypeMap;
    }
}
exports.CaseTypeResourceAttributes = CaseTypeResourceAttributes;
/**
 * @ignore
 */
CaseTypeResourceAttributes.attributeTypeMap = {
    deletedAt: {
        baseName: "deleted_at",
        type: "Date",
        format: "date-time",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    emoji: {
        baseName: "emoji",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseTypeResourceAttributes.js.map