"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCustomReportsPage = void 0;
/**
 * The object containing page total count.
 */
class UsageCustomReportsPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageCustomReportsPage.attributeTypeMap;
    }
}
exports.UsageCustomReportsPage = UsageCustomReportsPage;
/**
 * @ignore
 */
UsageCustomReportsPage.attributeTypeMap = {
    totalCount: {
        baseName: "total_count",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageCustomReportsPage.js.map