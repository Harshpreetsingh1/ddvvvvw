"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePageRequest = void 0;
/**
 * Full request to trigger an On-Call Page.
 */
class CreatePageRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreatePageRequest.attributeTypeMap;
    }
}
exports.CreatePageRequest = CreatePageRequest;
/**
 * @ignore
 */
CreatePageRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreatePageRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreatePageRequest.js.map