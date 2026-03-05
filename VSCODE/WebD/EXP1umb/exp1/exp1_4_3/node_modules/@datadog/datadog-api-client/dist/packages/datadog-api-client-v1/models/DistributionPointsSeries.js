"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionPointsSeries = void 0;
/**
 * A distribution points metric to submit to Datadog.
 */
class DistributionPointsSeries {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DistributionPointsSeries.attributeTypeMap;
    }
}
exports.DistributionPointsSeries = DistributionPointsSeries;
/**
 * @ignore
 */
DistributionPointsSeries.attributeTypeMap = {
    host: {
        baseName: "host",
        type: "string",
    },
    metric: {
        baseName: "metric",
        type: "string",
        required: true,
    },
    points: {
        baseName: "points",
        type: "Array<[DistributionPointItem, DistributionPointItem]>",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "DistributionPointsType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DistributionPointsSeries.js.map