"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionConnectionAttributesUpdate = void 0;
/**
 * The definition of `ActionConnectionAttributesUpdate` object.
 */
class ActionConnectionAttributesUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ActionConnectionAttributesUpdate.attributeTypeMap;
    }
}
exports.ActionConnectionAttributesUpdate = ActionConnectionAttributesUpdate;
/**
 * @ignore
 */
ActionConnectionAttributesUpdate.attributeTypeMap = {
    integration: {
        baseName: "integration",
        type: "ActionConnectionIntegrationUpdate",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ActionConnectionAttributesUpdate.js.map