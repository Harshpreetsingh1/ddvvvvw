"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Advisory = void 0;
/**
 * Advisory.
 */
class Advisory {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Advisory.attributeTypeMap;
    }
}
exports.Advisory = Advisory;
/**
 * @ignore
 */
Advisory.attributeTypeMap = {
    baseSeverity: {
        baseName: "base_severity",
        type: "string",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    severity: {
        baseName: "severity",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Advisory.js.map