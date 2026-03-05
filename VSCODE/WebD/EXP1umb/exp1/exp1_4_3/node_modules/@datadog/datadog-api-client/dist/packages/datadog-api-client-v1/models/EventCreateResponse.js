"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateResponse = void 0;
/**
 * Object containing an event response.
 */
class EventCreateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventCreateResponse.attributeTypeMap;
    }
}
exports.EventCreateResponse = EventCreateResponse;
/**
 * @ignore
 */
EventCreateResponse.attributeTypeMap = {
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
//# sourceMappingURL=EventCreateResponse.js.map