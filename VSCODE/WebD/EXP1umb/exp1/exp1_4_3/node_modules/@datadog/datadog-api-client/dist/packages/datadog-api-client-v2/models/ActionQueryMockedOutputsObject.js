"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionQueryMockedOutputsObject = void 0;
/**
 * The mocked outputs of the action query.
 */
class ActionQueryMockedOutputsObject {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ActionQueryMockedOutputsObject.attributeTypeMap;
    }
}
exports.ActionQueryMockedOutputsObject = ActionQueryMockedOutputsObject;
/**
 * @ignore
 */
ActionQueryMockedOutputsObject.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "ActionQueryMockedOutputsEnabled",
        required: true,
    },
    outputs: {
        baseName: "outputs",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ActionQueryMockedOutputsObject.js.map