"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConnectionRequest = void 0;
class CreateConnectionRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateConnectionRequest.attributeTypeMap;
    }
}
exports.CreateConnectionRequest = CreateConnectionRequest;
/**
 * @ignore
 */
CreateConnectionRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateConnectionRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateConnectionRequest.js.map