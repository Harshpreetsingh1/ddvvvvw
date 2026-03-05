"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertEventAttributes = void 0;
/**
 * Alert event attributes.
 */
class AlertEventAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AlertEventAttributes.attributeTypeMap;
    }
}
exports.AlertEventAttributes = AlertEventAttributes;
/**
 * @ignore
 */
AlertEventAttributes.attributeTypeMap = {
    aggregationKey: {
        baseName: "aggregation_key",
        type: "string",
    },
    custom: {
        baseName: "custom",
        type: "any",
    },
    evt: {
        baseName: "evt",
        type: "EventSystemAttributes",
    },
    links: {
        baseName: "links",
        type: "Array<AlertEventAttributesLinksItem>",
    },
    priority: {
        baseName: "priority",
        type: "AlertEventAttributesPriority",
    },
    service: {
        baseName: "service",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "AlertEventAttributesStatus",
    },
    timestamp: {
        baseName: "timestamp",
        type: "number",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AlertEventAttributes.js.map