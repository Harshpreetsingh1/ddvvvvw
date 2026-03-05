"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertEventAttributesLinksItem = void 0;
/**
 * A link.
 */
class AlertEventAttributesLinksItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AlertEventAttributesLinksItem.attributeTypeMap;
    }
}
exports.AlertEventAttributesLinksItem = AlertEventAttributesLinksItem;
/**
 * @ignore
 */
AlertEventAttributesLinksItem.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "AlertEventAttributesLinksItemCategory",
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
//# sourceMappingURL=AlertEventAttributesLinksItem.js.map