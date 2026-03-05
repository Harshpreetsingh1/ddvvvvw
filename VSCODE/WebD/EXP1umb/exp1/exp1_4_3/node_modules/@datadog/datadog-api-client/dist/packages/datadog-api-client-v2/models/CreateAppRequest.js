"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppRequest = void 0;
/**
 * A request object for creating a new app.
 */
class CreateAppRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAppRequest.attributeTypeMap;
    }
}
exports.CreateAppRequest = CreateAppRequest;
/**
 * @ignore
 */
CreateAppRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateAppRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateAppRequest.js.map