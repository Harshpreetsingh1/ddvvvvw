"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppTestsBucketResponse = void 0;
/**
 * Bucket values.
 */
class CIAppTestsBucketResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppTestsBucketResponse.attributeTypeMap;
    }
}
exports.CIAppTestsBucketResponse = CIAppTestsBucketResponse;
/**
 * @ignore
 */
CIAppTestsBucketResponse.attributeTypeMap = {
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
//# sourceMappingURL=CIAppTestsBucketResponse.js.map