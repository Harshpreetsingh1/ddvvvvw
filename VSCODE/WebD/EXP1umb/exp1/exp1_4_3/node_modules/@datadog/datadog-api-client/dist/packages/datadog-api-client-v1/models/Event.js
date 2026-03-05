"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
/**
 * Object representing an event.
 */
class Event {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Event.attributeTypeMap;
    }
}
exports.Event = Event;
/**
 * @ignore
 */
Event.attributeTypeMap = {
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
    id: {
        baseName: "id",
        type: "number",
        format: "int64",
    },
    idStr: {
        baseName: "id_str",
        type: "string",
    },
    payload: {
        baseName: "payload",
        type: "string",
    },
    priority: {
        baseName: "priority",
        type: "EventPriority",
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
    },
    title: {
        baseName: "title",
        type: "string",
    },
    url: {
        baseName: "url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Event.js.map