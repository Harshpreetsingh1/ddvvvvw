"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCURConfigPatchData = void 0;
/**
 * AWS CUR config Patch data.
 */
class AwsCURConfigPatchData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsCURConfigPatchData.attributeTypeMap;
    }
}
exports.AwsCURConfigPatchData = AwsCURConfigPatchData;
/**
 * @ignore
 */
AwsCURConfigPatchData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AwsCURConfigPatchRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AwsCURConfigPatchRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsCURConfigPatchData.js.map