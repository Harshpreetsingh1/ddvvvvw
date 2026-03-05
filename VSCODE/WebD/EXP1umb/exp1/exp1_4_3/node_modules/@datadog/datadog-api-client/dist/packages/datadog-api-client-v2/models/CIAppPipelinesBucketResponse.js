"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelinesBucketResponse = void 0;
/**
 * Bucket values.
 */
class CIAppPipelinesBucketResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelinesBucketResponse.attributeTypeMap;
    }
}
exports.CIAppPipelinesBucketResponse = CIAppPipelinesBucketResponse;
/**
 * @ignore
 */
CIAppPipelinesBucketResponse.attributeTypeMap = {
    by: {
        baseName: "by",
        type: "{ [key: string]: any; }",
    },
    computes: {
        baseName: "computes",
        type: "{ [key: string]: CIAppAggregateBucketValue; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppPipelinesBucketResponse.js.map