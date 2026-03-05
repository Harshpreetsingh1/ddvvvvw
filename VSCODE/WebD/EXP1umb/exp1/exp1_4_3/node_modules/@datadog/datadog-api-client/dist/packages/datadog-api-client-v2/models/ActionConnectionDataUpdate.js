"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionConnectionDataUpdate = void 0;
/**
 * Data related to the connection update.
 */
class ActionConnectionDataUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ActionConnectionDataUpdate.attributeTypeMap;
    }
}
exports.ActionConnectionDataUpdate = ActionConnectionDataUpdate;
/**
 * @ignore
 */
ActionConnectionDataUpdate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ActionConnectionAttributesUpdate",
        required: true,
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
//# sourceMappingURL=ActionConnectionDataUpdate.js.map