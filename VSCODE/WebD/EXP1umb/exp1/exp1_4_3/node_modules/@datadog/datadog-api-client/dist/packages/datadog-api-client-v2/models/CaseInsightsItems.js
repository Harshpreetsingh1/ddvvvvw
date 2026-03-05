"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseInsightsItems = void 0;
/**
 * An insight of the case.
 */
class CaseInsightsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseInsightsItems.attributeTypeMap;
    }
}
exports.CaseInsightsItems = CaseInsightsItems;
/**
 * @ignore
 */
CaseInsightsItems.attributeTypeMap = {
    ref: {
        baseName: "ref",
        type: "string",
    },
    resourceId: {
        baseName: "resource_id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseInsightsItems.js.map