"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTimelineWidgetDefinition = void 0;
/**
 * The event timeline is a widget version of the timeline that appears at the top of the Event Stream view. Only available on FREE layout dashboards.
 */
class EventTimelineWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventTimelineWidgetDefinition.attributeTypeMap;
    }
}
exports.EventTimelineWidgetDefinition = EventTimelineWidgetDefinition;
/**
 * @ignore
 */
EventTimelineWidgetDefinition.attributeTypeMap = {
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
        type: "EventTimelineWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventTimelineWidgetDefinition.js.map