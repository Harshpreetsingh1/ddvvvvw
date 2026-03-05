"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventListResponse = void 0;
/**
 * An event list response.
 */
class EventListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventListResponse.attributeTypeMap;
    }
}
exports.EventListResponse = EventListResponse;
/**
 * @ignore
 */
EventListResponse.attributeTypeMap = {
    events: {
        baseName: "events",
        type: "Array<Event>",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventListResponse.js.map