"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsOnDemandListResponse = void 0;
/**
 * Response object that includes a list of AWS on demand tasks.
 */
class AwsOnDemandListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsOnDemandListResponse.attributeTypeMap;
    }
}
exports.AwsOnDemandListResponse = AwsOnDemandListResponse;
/**
 * @ignore
 */
AwsOnDemandListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<AwsOnDemandData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsOnDemandListResponse.js.map