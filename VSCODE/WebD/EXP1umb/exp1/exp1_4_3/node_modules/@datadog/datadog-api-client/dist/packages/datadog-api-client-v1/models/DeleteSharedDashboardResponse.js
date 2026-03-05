"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSharedDashboardResponse = void 0;
/**
 * Response containing token of deleted shared dashboard.
 */
class DeleteSharedDashboardResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteSharedDashboardResponse.attributeTypeMap;
    }
}
exports.DeleteSharedDashboardResponse = DeleteSharedDashboardResponse;
/**
 * @ignore
 */
DeleteSharedDashboardResponse.attributeTypeMap = {
    deletedPublicDashboardToken: {
        baseName: "deleted_public_dashboard_token",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeleteSharedDashboardResponse.js.map