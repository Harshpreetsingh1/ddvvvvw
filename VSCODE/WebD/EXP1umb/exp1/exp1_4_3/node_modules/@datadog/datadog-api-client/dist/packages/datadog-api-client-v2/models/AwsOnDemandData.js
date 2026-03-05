"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsOnDemandData = void 0;
/**
 * Single AWS on demand task.
 */
class AwsOnDemandData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsOnDemandData.attributeTypeMap;
    }
}
exports.AwsOnDemandData = AwsOnDemandData;
/**
 * @ignore
 */
AwsOnDemandData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AwsOnDemandAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "AwsOnDemandType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsOnDemandData.js.map