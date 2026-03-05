"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSNewExternalIDResponse = void 0;
/**
 * AWS External ID response body.
 */
class AWSNewExternalIDResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSNewExternalIDResponse.attributeTypeMap;
    }
}
exports.AWSNewExternalIDResponse = AWSNewExternalIDResponse;
/**
 * @ignore
 */
AWSNewExternalIDResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSNewExternalIDResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSNewExternalIDResponse.js.map