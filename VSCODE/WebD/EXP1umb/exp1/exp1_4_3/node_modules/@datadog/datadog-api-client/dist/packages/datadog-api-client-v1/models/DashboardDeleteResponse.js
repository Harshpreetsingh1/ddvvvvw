"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardDeleteResponse = void 0;
/**
 * Response from the delete dashboard call.
 */
class DashboardDeleteResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardDeleteResponse.attributeTypeMap;
    }
}
exports.DashboardDeleteResponse = DashboardDeleteResponse;
/**
 * @ignore
 */
DashboardDeleteResponse.attributeTypeMap = {
    deletedDashboardId: {
        baseName: "deleted_dashboard_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardDeleteResponse.js.map