"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertEventCustomAttributesLinksItems = void 0;
/**
 * A link.
 */
class AlertEventCustomAttributesLinksItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AlertEventCustomAttributesLinksItems.attributeTypeMap;
    }
}
exports.AlertEventCustomAttributesLinksItems = AlertEventCustomAttributesLinksItems;
/**
 * @ignore
 */
AlertEventCustomAttributesLinksItems.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "AlertEventCustomAttributesLinksItemsCategory",
        required: true,
    },
    title: {
        baseName: "title",
        type: "string",
    },
    url: {
        baseName: "url",
        type: "string",
        required: true,
    },
};
//# sourceMappingURL=AlertEventCustomAttributesLinksItems.js.map