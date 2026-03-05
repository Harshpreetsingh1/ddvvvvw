"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestOptionsMonitorOptions = void 0;
/**
 * Object containing the options for a Synthetic test as a monitor
 * (for example, renotification).
 */
class SyntheticsTestOptionsMonitorOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestOptionsMonitorOptions.attributeTypeMap;
    }
}
exports.SyntheticsTestOptionsMonitorOptions = SyntheticsTestOptionsMonitorOptions;
/**
 * @ignore
 */
SyntheticsTestOptionsMonitorOptions.attributeTypeMap = {
    escalationMessage: {
        baseName: "escalation_message",
        type: "string",
    },
    notificationPresetName: {
        baseName: "notification_preset_name",
        type: "SyntheticsTestOptionsMonitorOptionsNotificationPresetName",
    },
    renotifyInterval: {
        baseName: "renotify_interval",
        type: "number",
        format: "int64",
    },
    renotifyOccurrences: {
        baseName: "renotify_occurrences",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestOptionsMonitorOptions.js.map