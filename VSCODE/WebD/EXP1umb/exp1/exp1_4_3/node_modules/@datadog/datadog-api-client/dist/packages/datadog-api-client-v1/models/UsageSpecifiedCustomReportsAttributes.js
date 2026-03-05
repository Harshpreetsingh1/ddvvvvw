"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSpecifiedCustomReportsAttributes = void 0;
/**
 * The response containing attributes for specified custom reports.
 */
class UsageSpecifiedCustomReportsAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSpecifiedCustomReportsAttributes.attributeTypeMap;
    }
}
exports.UsageSpecifiedCustomReportsAttributes = UsageSpecifiedCustomReportsAttributes;
/**
 * @ignore
 */
UsageSpecifiedCustomReportsAttributes.attributeTypeMap = {
    computedOn: {
        baseName: "computed_on",
        type: "string",
    },
    endDate: {
        baseName: "end_date",
        type: "string",
    },
    location: {
        baseName: "location",
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
//# sourceMappingURL=UsageSpecifiedCustomReportsAttributes.js.map