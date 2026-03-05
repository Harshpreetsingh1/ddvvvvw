"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCURConfigPatchRequest = void 0;
/**
 * AWS CUR config Patch Request.
 */
class AwsCURConfigPatchRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsCURConfigPatchRequest.attributeTypeMap;
    }
}
exports.AwsCURConfigPatchRequest = AwsCURConfigPatchRequest;
/**
 * @ignore
 */
AwsCURConfigPatchRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AwsCURConfigPatchData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsCURConfigPatchRequest.js.map