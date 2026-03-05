"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseNotificationRuleTriggerData = void 0;
/**
 * Trigger data
 */
class CaseNotificationRuleTriggerData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseNotificationRuleTriggerData.attributeTypeMap;
    }
}
exports.CaseNotificationRuleTriggerData = CaseNotificationRuleTriggerData;
/**
 * @ignore
 */
CaseNotificationRuleTriggerData.attributeTypeMap = {
    changeType: {
        baseName: "change_type",
        type: "string",
    },
    field: {
        baseName: "field",
        type: "string",
    },
    fromStatus: {
        baseName: "from_status",
        type: "string",
    },
    fromStatusName: {
        baseName: "from_status_name",
        type: "string",
    },
    toStatus: {
        baseName: "to_status",
        type: "string",
    },
    toStatusName: {
        baseName: "to_status_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseNotificationRuleTriggerData.js.map