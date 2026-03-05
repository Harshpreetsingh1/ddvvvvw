"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionConnectionData = void 0;
/**
 * Data related to the connection.
 */
class ActionConnectionData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ActionConnectionData.attributeTypeMap;
    }
}
exports.ActionConnectionData = ActionConnectionData;
/**
 * @ignore
 */
ActionConnectionData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ActionConnectionAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ActionConnectionDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ActionConnectionData.js.map