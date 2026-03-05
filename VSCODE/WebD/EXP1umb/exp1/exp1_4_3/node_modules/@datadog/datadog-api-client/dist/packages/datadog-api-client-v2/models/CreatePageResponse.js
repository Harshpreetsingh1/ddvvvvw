"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePageResponse = void 0;
/**
 * The full response object after creating a new On-Call Page.
 */
class CreatePageResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreatePageResponse.attributeTypeMap;
    }
}
exports.CreatePageResponse = CreatePageResponse;
/**
 * @ignore
 */
CreatePageResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreatePageResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreatePageResponse.js.map