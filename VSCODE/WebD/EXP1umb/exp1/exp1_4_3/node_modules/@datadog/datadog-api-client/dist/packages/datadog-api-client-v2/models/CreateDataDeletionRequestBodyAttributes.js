"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDataDeletionRequestBodyAttributes = void 0;
/**
 * Attributes for creating a data deletion request.
 */
class CreateDataDeletionRequestBodyAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateDataDeletionRequestBodyAttributes.attributeTypeMap;
    }
}
exports.CreateDataDeletionRequestBodyAttributes = CreateDataDeletionRequestBodyAttributes;
/**
 * @ignore
 */
CreateDataDeletionRequestBodyAttributes.attributeTypeMap = {
    from: {
        baseName: "from",
        type: "number",
        required: true,
        format: "int64",
    },
    indexes: {
        baseName: "indexes",
        type: "Array<string>",
    },
    query: {
        baseName: "query",
        type: "{ [key: string]: string; }",
        required: true,
    },
    to: {
        baseName: "to",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateDataDeletionRequestBodyAttributes.js.map