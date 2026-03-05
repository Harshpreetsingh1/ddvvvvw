"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseNotificationRuleRecipientData = void 0;
/**
 * Recipient data
 */
class CaseNotificationRuleRecipientData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseNotificationRuleRecipientData.attributeTypeMap;
    }
}
exports.CaseNotificationRuleRecipientData = CaseNotificationRuleRecipientData;
/**
 * @ignore
 */
CaseNotificationRuleRecipientData.attributeTypeMap = {
    channel: {
        baseName: "channel",
        type: "string",
    },
    channelId: {
        baseName: "channel_id",
        type: "string",
    },
    channelName: {
        baseName: "channel_name",
        type: "string",
    },
    connectorName: {
        baseName: "connector_name",
        type: "string",
    },
    email: {
        baseName: "email",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    serviceName: {
        baseName: "service_name",
        type: "string",
    },
    teamId: {
        baseName: "team_id",
        type: "string",
    },
    teamName: {
        baseName: "team_name",
        type: "string",
    },
    tenantId: {
        baseName: "tenant_id",
        type: "string",
    },
    tenantName: {
        baseName: "tenant_name",
        type: "string",
    },
    workspace: {
        baseName: "workspace",
        type: "string",
    },
    workspaceId: {
        baseName: "workspace_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseNotificationRuleRecipientData.js.map