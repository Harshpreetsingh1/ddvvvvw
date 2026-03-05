"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCustomReportsAttributes = void 0;
/**
 * The response containing attributes for custom reports.
 */
class UsageCustomReportsAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageCustomReportsAttributes.attributeTypeMap;
    }
}
exports.UsageCustomReportsAttributes = UsageCustomReportsAttributes;
/**
 * @ignore
 */
UsageCustomReportsAttributes.attributeTypeMap = {
    computedOn: {
        baseName: "computed_on",
        type: "string",
    },
    endDate: {
        baseName: "end_date",
        type: "string",
    },
    size: {
        baseName: "size",
        type: "number",
        format: "int64",
    },
    startDate: {
        baseName: "start_date",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageCustomReportsAttributes.js.map