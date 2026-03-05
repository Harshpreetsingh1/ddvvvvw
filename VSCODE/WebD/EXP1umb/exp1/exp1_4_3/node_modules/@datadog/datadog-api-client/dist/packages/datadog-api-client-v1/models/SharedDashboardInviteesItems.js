"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedDashboardInviteesItems = void 0;
/**
 * The allowlisted invitees for an INVITE-only shared dashboard.
 */
class SharedDashboardInviteesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SharedDashboardInviteesItems.attributeTypeMap;
    }
}
exports.SharedDashboardInviteesItems = SharedDashboardInviteesItems;
/**
 * @ignore
 */
SharedDashboardInviteesItems.attributeTypeMap = {
    accessExpiration: {
        baseName: "access_expiration",
        type: "Date",
        format: "date-time",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    email: {
        baseName: "email",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SharedDashboardInviteesItems.js.map