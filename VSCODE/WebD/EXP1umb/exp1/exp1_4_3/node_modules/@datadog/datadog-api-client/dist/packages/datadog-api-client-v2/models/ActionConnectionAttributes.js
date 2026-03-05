"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionConnectionAttributes = void 0;
/**
 * The definition of `ActionConnectionAttributes` object.
 */
class ActionConnectionAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ActionConnectionAttributes.attributeTypeMap;
    }
}
exports.ActionConnectionAttributes = ActionConnectionAttributes;
/**
 * @ignore
 */
ActionConnectionAttributes.attributeTypeMap = {
    integration: {
        baseName: "integration",
        type: "ActionConnectionIntegration",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ActionConnectionAttributes.js.map