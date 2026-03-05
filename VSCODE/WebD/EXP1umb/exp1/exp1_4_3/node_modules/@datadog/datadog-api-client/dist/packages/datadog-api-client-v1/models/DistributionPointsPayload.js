"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionPointsPayload = void 0;
/**
 * The distribution points payload.
 */
class DistributionPointsPayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DistributionPointsPayload.attributeTypeMap;
    }
}
exports.DistributionPointsPayload = DistributionPointsPayload;
/**
 * @ignore
 */
DistributionPointsPayload.attributeTypeMap = {
    series: {
        baseName: "series",
        type: "Array<DistributionPointsSeries>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DistributionPointsPayload.js.map