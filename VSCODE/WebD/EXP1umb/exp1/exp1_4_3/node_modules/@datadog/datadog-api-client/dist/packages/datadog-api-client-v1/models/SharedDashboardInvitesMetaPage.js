"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedDashboardInvitesMetaPage = void 0;
/**
 * Object containing the total count of invitations across all pages
 */
class SharedDashboardInvitesMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SharedDashboardInvitesMetaPage.attributeTypeMap;
    }
}
exports.SharedDashboardInvitesMetaPage = SharedDashboardInvitesMetaPage;
/**
 * @ignore
 */
SharedDashboardInvitesMetaPage.attributeTypeMap = {
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
//# sourceMappingURL=SharedDashboardInvitesMetaPage.js.map