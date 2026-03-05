"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageTimeseriesResponse = void 0;
/**
 * Response containing hourly usage of timeseries.
 */
class UsageTimeseriesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageTimeseriesResponse.attributeTypeMap;
    }
}
exports.UsageTimeseriesResponse = UsageTimeseriesResponse;
/**
 * @ignore
 */
UsageTimeseriesResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageTimeseriesHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageTimeseriesResponse.js.map