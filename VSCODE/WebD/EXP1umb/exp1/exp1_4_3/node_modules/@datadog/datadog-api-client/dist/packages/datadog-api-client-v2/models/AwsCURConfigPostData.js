"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCURConfigPostData = void 0;
/**
 * AWS CUR config Post data.
 */
class AwsCURConfigPostData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsCURConfigPostData.attributeTypeMap;
    }
}
exports.AwsCURConfigPostData = AwsCURConfigPostData;
/**
 * @ignore
 */
AwsCURConfigPostData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AwsCURConfigPostRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "AwsCURConfigPostRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsCURConfigPostData.js.map