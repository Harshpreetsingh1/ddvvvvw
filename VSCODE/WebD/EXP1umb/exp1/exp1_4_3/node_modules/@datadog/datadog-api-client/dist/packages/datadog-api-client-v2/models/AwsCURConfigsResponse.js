"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCURConfigsResponse = void 0;
/**
 * List of AWS CUR configs.
 */
class AwsCURConfigsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsCURConfigsResponse.attributeTypeMap;
    }
}
exports.AwsCURConfigsResponse = AwsCURConfigsResponse;
/**
 * @ignore
 */
AwsCURConfigsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<AwsCURConfig>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsCURConfigsResponse.js.map