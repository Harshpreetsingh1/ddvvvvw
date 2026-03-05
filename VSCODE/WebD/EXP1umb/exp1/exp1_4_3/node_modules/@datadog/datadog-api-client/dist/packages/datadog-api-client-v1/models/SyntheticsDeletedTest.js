"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsDeletedTest = void 0;
/**
 * Object containing a deleted Synthetic test ID with the associated
 * deletion timestamp.
 */
class SyntheticsDeletedTest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsDeletedTest.attributeTypeMap;
    }
}
exports.SyntheticsDeletedTest = SyntheticsDeletedTest;
/**
 * @ignore
 */
SyntheticsDeletedTest.attributeTypeMap = {
    deletedAt: {
        baseName: "deleted_at",
        type: "Date",
        format: "date-time",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsDeletedTest.js.map