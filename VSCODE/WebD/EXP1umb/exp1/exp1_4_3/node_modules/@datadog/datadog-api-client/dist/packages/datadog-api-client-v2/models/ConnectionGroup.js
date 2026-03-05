"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionGroup = void 0;
/**
 * The definition of `ConnectionGroup` object.
 */
class ConnectionGroup {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConnectionGroup.attributeTypeMap;
    }
}
exports.ConnectionGroup = ConnectionGroup;
/**
 * @ignore
 */
ConnectionGroup.attributeTypeMap = {
    connectionGroupId: {
        baseName: "connectionGroupId",
        type: "string",
        required: true,
    },
    label: {
        baseName: "label",
        type: "string",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConnectionGroup.js.map