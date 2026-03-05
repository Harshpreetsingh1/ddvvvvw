"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateRequest = void 0;
/**
 * Object representing an event.
 */
class EventCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventCreateRequest.attributeTypeMap;
    }
}
exports.EventCreateRequest = EventCreateRequest;
/**
 * @ignore
 */
EventCreateRequest.attributeTypeMap = {
    aggregationKey: {
        baseName: "aggregation_key",
        type: "string",
    },
    alertType: {
        baseName: "alert_type",
        type: "EventAlertType",
    },
    dateHappened: {
        baseName: "date_happened",
        type: "number",
        format: "int64",
    },
    deviceName: {
        baseName: "device_name",
        type: "string",
    },
    host: {
        baseName: "host",
        type: "string",
    },
    priority: {
        baseName: "priority",
        type: "EventPriority",
    },
    relatedEventId: {
        baseName: "related_event_id",
        type: "number",
        format: "int64",
    },
    sourceTypeName: {
        baseName: "source_type_name",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    text: {
        baseName: "text",
        type: "string",
        required: true,
    },
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventCreateRequest.js.map