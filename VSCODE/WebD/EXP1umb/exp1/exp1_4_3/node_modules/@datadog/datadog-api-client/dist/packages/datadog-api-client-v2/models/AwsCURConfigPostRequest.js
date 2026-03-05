"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCURConfigPostRequest = void 0;
/**
 * AWS CUR config Post Request.
 */
class AwsCURConfigPostRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsCURConfigPostRequest.attributeTypeMap;
    }
}
exports.AwsCURConfigPostRequest = AwsCURConfigPostRequest;
/**
 * @ignore
 */
AwsCURConfigPostRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AwsCURConfigPostData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsCURConfigPostRequest.js.map