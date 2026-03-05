"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComponentRequest = void 0;
class CreateComponentRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateComponentRequest.attributeTypeMap;
    }
}
exports.CreateComponentRequest = CreateComponentRequest;
/**
 * @ignore
 */
CreateComponentRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateComponentRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateComponentRequest.js.map