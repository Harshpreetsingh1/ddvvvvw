"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsOnDemandCreateData = void 0;
/**
 * Object for a single AWS on demand task.
 */
class AwsOnDemandCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsOnDemandCreateData.attributeTypeMap;
    }
}
exports.AwsOnDemandCreateData = AwsOnDemandCreateData;
/**
 * @ignore
 */
AwsOnDemandCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AwsOnDemandCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AwsOnDemandType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsOnDemandCreateData.js.map