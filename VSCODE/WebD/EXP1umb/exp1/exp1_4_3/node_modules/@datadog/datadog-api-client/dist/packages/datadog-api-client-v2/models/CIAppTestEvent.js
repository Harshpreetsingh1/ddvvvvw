"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppTestEvent = void 0;
/**
 * Object description of test event after being processed and stored by Datadog.
 */
class CIAppTestEvent {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppTestEvent.attributeTypeMap;
    }
}
exports.CIAppTestEvent = CIAppTestEvent;
/**
 * @ignore
 */
CIAppTestEvent.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CIAppEventAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CIAppTestEventTypeName",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppTestEvent.js.map