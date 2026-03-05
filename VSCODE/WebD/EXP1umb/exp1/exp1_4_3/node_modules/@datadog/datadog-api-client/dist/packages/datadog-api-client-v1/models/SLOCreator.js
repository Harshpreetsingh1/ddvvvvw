"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCreator = void 0;
/**
 * The creator of the SLO
 */
class SLOCreator {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCreator.attributeTypeMap;
    }
}
exports.SLOCreator = SLOCreator;
/**
 * @ignore
 */
SLOCreator.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOCreator.js.map