"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedDashboardInvitesDataObjectAttributes = void 0;
/**
 * Attributes of the shared dashboard invitation
 */
class SharedDashboardInvitesDataObjectAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SharedDashboardInvitesDataObjectAttributes.attributeTypeMap;
    }
}
exports.SharedDashboardInvitesDataObjectAttributes = SharedDashboardInvitesDataObjectAttributes;
/**
 * @ignore
 */
SharedDashboardInvitesDataObjectAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    email: {
        baseName: "email",
        type: "string",
    },
    hasSession: {
        baseName: "has_session",
        type: "boolean",
    },
    invitationExpiry: {
        baseName: "invitation_expiry",
        type: "Date",
        format: "date-time",
    },
    sessionExpiry: {
        baseName: "session_expiry",
        type: "Date",
        format: "date-time",
    },
    shareToken: {
        baseName: "share_token",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SharedDashboardInvitesDataObjectAttributes.js.map