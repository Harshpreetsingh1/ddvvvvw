"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKeysResponseMetaPage = void 0;
/**
 * Additional information related to the API keys response.
 */
class APIKeysResponseMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return APIKeysResponseMetaPage.attributeTypeMap;
    }
}
exports.APIKeysResponseMetaPage = APIKeysResponseMetaPage;
/**
 * @ignore
 */
APIKeysResponseMetaPage.attributeTypeMap = {
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
//# sourceMappingURL=APIKeysResponseMetaPage.js.map