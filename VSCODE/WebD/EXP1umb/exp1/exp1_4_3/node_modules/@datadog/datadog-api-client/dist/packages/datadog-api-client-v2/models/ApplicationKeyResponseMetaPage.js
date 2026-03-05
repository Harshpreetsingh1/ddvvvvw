"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKeyResponseMetaPage = void 0;
/**
 * Additional information related to the application key response.
 */
class ApplicationKeyResponseMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationKeyResponseMetaPage.attributeTypeMap;
    }
}
exports.ApplicationKeyResponseMetaPage = ApplicationKeyResponseMetaPage;
/**
 * @ignore
 */
ApplicationKeyResponseMetaPage.attributeTypeMap = {
    totalFilteredCount: {
        baseName: "total_filtered_count",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationKeyResponseMetaPage.js.map