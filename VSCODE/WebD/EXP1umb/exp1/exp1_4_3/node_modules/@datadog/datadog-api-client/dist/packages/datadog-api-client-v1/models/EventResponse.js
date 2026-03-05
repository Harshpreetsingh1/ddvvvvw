"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventResponse = void 0;
/**
 * Object containing an event response.
 */
class EventResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventResponse.attributeTypeMap;
    }
}
exports.EventResponse = EventResponse;
/**
 * @ignore
 */
EventResponse.attributeTypeMap = {
    event: {
        baseName: "event",
        type: "Event",
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
//# sourceMappingURL=EventResponse.js.map