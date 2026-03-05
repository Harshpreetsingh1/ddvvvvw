"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSTagFilterDeleteRequest = void 0;
/**
 * The objects used to delete an AWS tag filter entry.
 */
class AWSTagFilterDeleteRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSTagFilterDeleteRequest.attributeTypeMap;
    }
}
exports.AWSTagFilterDeleteRequest = AWSTagFilterDeleteRequest;
/**
 * @ignore
 */
AWSTagFilterDeleteRequest.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
    },
    namespace: {
        baseName: "namespace",
        type: "AWSNamespace",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSTagFilterDeleteRequest.js.map