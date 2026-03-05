"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsOnDemandResponse = void 0;
/**
 * Response object that includes an AWS on demand task.
 */
class AwsOnDemandResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsOnDemandResponse.attributeTypeMap;
    }
}
exports.AwsOnDemandResponse = AwsOnDemandResponse;
/**
 * @ignore
 */
AwsOnDemandResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AwsOnDemandData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsOnDemandResponse.js.map