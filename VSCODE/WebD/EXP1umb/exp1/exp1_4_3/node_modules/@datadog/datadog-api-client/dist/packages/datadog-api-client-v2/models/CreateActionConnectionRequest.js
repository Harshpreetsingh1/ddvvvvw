"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateActionConnectionRequest = void 0;
/**
 * Request used to create an action connection.
 */
class CreateActionConnectionRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateActionConnectionRequest.attributeTypeMap;
    }
}
exports.CreateActionConnectionRequest = CreateActionConnectionRequest;
/**
 * @ignore
 */
CreateActionConnectionRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ActionConnectionData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateActionConnectionRequest.js.map