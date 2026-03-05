"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSTagFilterCreateRequest = void 0;
/**
 * The objects used to set an AWS tag filter.
 */
class AWSTagFilterCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSTagFilterCreateRequest.attributeTypeMap;
    }
}
exports.AWSTagFilterCreateRequest = AWSTagFilterCreateRequest;
/**
 * @ignore
 */
AWSTagFilterCreateRequest.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
    },
    namespace: {
        baseName: "namespace",
        type: "AWSNamespace",
    },
    tagFilterStr: {
        baseName: "tag_filter_str",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSTagFilterCreateRequest.js.map