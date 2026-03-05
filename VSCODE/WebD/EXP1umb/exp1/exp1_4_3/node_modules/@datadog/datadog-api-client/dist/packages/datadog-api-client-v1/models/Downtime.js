"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Downtime = void 0;
/**
 * Downtiming gives you greater control over monitor notifications by
 * allowing you to globally exclude scopes from alerting.
 * Downtime settings, which can be scheduled with start and end times,
 * prevent all alerting related to specified Datadog tags.
 */
class Downtime {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Downtime.attributeTypeMap;
    }
}
exports.Downtime = Downtime;
/**
 * @ignore
 */
Downtime.attributeTypeMap = {
    active: {
        baseName: "active",
        type: "boolean",
    },
    activeChild: {
        baseName: "active_child",
        type: "DowntimeChild",
    },
    canceled: {
        baseName: "canceled",
        type: "number",
        format: "int64",
    },
    creatorId: {
        baseName: "creator_id",
        type: "number",
        format: "int32",
    },
    disabled: {
        baseName: "disabled",
        type: "boolean",
    },
    downtimeType: {
        baseName: "downtime_type",
        type: "number",
        format: "int32",
    },
    end: {
        baseName: "end",
        type: "number",
        format: "int64",
    },
    id: {
        baseName: "id",
        type: "number",
        format: "int64",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    monitorId: {
        baseName: "monitor_id",
        type: "number",
        format: "int64",
    },
    monitorTags: {
        baseName: "monitor_tags",
        type: "Array<string>",
    },
    muteFirstRecoveryNotification: {
        baseName: "mute_first_recovery_notification",
        type: "boolean",
    },
    notifyEndStates: {
        baseName: "notify_end_states",
        type: "Array<NotifyEndState>",
    },
    notifyEndTypes: {
        baseName: "notify_end_types",
        type: "Array<NotifyEndType>",
    },
    parentId: {
        baseName: "parent_id",
        type: "number",
        format: "int64",
    },
    recurrence: {
        baseName: "recurrence",
        type: "DowntimeRecurrence",
    },
    scope: {
        baseName: "scope",
        type: "Array<string>",
    },
    start: {
        baseName: "start",
        type: "number",
        format: "int64",
    },
    timezone: {
        baseName: "timezone",
        type: "string",
    },
    updaterId: {
        baseName: "updater_id",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Downtime.js.map