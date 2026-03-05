"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionQuerySpecObject = void 0;
/**
 * The action query spec object.
 */
class ActionQuerySpecObject {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ActionQuerySpecObject.attributeTypeMap;
    }
}
exports.ActionQuerySpecObject = ActionQuerySpecObject;
/**
 * @ignore
 */
ActionQuerySpecObject.attributeTypeMap = {
    connectionGroup: {
        baseName: "connectionGroup",
        type: "ActionQuerySpecConnectionGroup",
    },
    connectionId: {
        baseName: "connectionId",
        type: "string",
    },
    fqn: {
        baseName: "fqn",
        type: "string",
        required: true,
    },
    inputs: {
        baseName: "inputs",
        type: "ActionQuerySpecInputs",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ActionQuerySpecObject.js.map