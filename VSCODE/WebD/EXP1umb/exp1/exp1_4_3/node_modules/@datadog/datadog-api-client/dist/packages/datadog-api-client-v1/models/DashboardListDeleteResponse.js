"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardListDeleteResponse = void 0;
/**
 * Deleted dashboard details.
 */
class DashboardListDeleteResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardListDeleteResponse.attributeTypeMap;
    }
}
exports.DashboardListDeleteResponse = DashboardListDeleteResponse;
/**
 * @ignore
 */
DashboardListDeleteResponse.attributeTypeMap = {
    deletedDashboardListId: {
        baseName: "deleted_dashboard_list_id",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardListDeleteResponse.js.map