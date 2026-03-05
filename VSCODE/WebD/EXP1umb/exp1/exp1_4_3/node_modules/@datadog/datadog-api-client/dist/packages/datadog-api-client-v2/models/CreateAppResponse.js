"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppResponse = void 0;
/**
 * The response object after a new app is successfully created, with the app ID.
 */
class CreateAppResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAppResponse.attributeTypeMap;
    }
}
exports.CreateAppResponse = CreateAppResponse;
/**
 * @ignore
 */
CreateAppResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateAppResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateAppResponse.js.map