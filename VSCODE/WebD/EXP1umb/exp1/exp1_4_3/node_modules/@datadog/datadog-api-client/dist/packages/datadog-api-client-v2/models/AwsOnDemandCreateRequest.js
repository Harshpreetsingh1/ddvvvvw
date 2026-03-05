"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsOnDemandCreateRequest = void 0;
/**
 * Request object that includes the on demand task to submit.
 */
class AwsOnDemandCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsOnDemandCreateRequest.attributeTypeMap;
    }
}
exports.AwsOnDemandCreateRequest = AwsOnDemandCreateRequest;
/**
 * @ignore
 */
AwsOnDemandCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AwsOnDemandCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsOnDemandCreateRequest.js.map