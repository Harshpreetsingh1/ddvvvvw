"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCURConfig = void 0;
/**
 * AWS CUR config.
 */
class AwsCURConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsCURConfig.attributeTypeMap;
    }
}
exports.AwsCURConfig = AwsCURConfig;
/**
 * @ignore
 */
AwsCURConfig.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AwsCURConfigAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "AwsCURConfigType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsCURConfig.js.map