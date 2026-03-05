"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertEventCustomAttributes = void 0;
/**
 * Alert event attributes.
 */
class AlertEventCustomAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AlertEventCustomAttributes.attributeTypeMap;
    }
}
exports.AlertEventCustomAttributes = AlertEventCustomAttributes;
/**
 * @ignore
 */
AlertEventCustomAttributes.attributeTypeMap = {
    custom: {
        baseName: "custom",
        type: "{ [key: string]: any; }",
    },
    links: {
        baseName: "links",
        type: "Array<AlertEventCustomAttributesLinksItems>",
    },
    priority: {
        baseName: "priority",
        type: "AlertEventCustomAttributesPriority",
    },
    status: {
        baseName: "status",
        type: "AlertEventCustomAttributesStatus",
        required: true,
    },
};
//# sourceMappingURL=AlertEventCustomAttributes.js.map