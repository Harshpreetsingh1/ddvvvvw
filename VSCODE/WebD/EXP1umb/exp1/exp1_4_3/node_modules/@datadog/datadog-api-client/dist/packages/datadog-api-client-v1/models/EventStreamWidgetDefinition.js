"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStreamWidgetDefinition = void 0;
/**
 * The event stream is a widget version of the stream of events
 * on the Event Stream view. Only available on FREE layout dashboards.
 */
class EventStreamWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventStreamWidgetDefinition.attributeTypeMap;
    }
}
exports.EventStreamWidgetDefinition = EventStreamWidgetDefinition;
/**
 * @ignore
 */
EventStreamWidgetDefinition.attributeTypeMap = {
    eventSize: {
        baseName: "event_size",
        type: "WidgetEventSize",
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    tagsExecution: {
        baseName: "tags_execution",
        type: "string",
    },
    time: {
        baseName: "time",
        type: "WidgetTime",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    titleAlign: {
        baseName: "title_align",
        type: "WidgetTextAlign",
    },
    titleSize: {
        baseName: "title_size",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "EventStreamWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventStreamWidgetDefinition.js.map