"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionQuery = void 0;
/**
 * An action query. This query type is used to trigger an action, such as sending a HTTP request.
 */
class ActionQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ActionQuery.attributeTypeMap;
    }
}
exports.ActionQuery = ActionQuery;
/**
 * @ignore
 */
ActionQuery.attributeTypeMap = {
    events: {
        baseName: "events",
        type: "Array<AppBuilderEvent>",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    properties: {
        baseName: "properties",
        type: "ActionQueryProperties",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ActionQueryType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ActionQuery.js.map