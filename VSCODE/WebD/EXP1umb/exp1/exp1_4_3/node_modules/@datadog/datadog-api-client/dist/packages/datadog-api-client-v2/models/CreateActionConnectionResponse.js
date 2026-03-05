"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateActionConnectionResponse = void 0;
/**
 * The response for a created connection
 */
class CreateActionConnectionResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateActionConnectionResponse.attributeTypeMap;
    }
}
exports.CreateActionConnectionResponse = CreateActionConnectionResponse;
/**
 * @ignore
 */
CreateActionConnectionResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ActionConnectionData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateActionConnectionResponse.js.map