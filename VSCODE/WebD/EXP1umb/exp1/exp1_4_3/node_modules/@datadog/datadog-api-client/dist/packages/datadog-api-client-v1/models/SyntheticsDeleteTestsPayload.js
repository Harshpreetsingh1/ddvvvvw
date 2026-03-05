"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsDeleteTestsPayload = void 0;
/**
 * A JSON list of the ID or IDs of the Synthetic tests that you want
 * to delete.
 */
class SyntheticsDeleteTestsPayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsDeleteTestsPayload.attributeTypeMap;
    }
}
exports.SyntheticsDeleteTestsPayload = SyntheticsDeleteTestsPayload;
/**
 * @ignore
 */
SyntheticsDeleteTestsPayload.attributeTypeMap = {
    forceDeleteDependencies: {
        baseName: "force_delete_dependencies",
        type: "boolean",
    },
    publicIds: {
        baseName: "public_ids",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsDeleteTestsPayload.js.map