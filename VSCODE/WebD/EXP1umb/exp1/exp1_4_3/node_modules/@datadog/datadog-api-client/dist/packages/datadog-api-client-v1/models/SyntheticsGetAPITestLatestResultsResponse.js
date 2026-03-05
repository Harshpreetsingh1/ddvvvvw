"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsGetAPITestLatestResultsResponse = void 0;
/**
 * Object with the latest Synthetic API test run.
 */
class SyntheticsGetAPITestLatestResultsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsGetAPITestLatestResultsResponse.attributeTypeMap;
    }
}
exports.SyntheticsGetAPITestLatestResultsResponse = SyntheticsGetAPITestLatestResultsResponse;
/**
 * @ignore
 */
SyntheticsGetAPITestLatestResultsResponse.attributeTypeMap = {
    lastTimestampFetched: {
        baseName: "last_timestamp_fetched",
        type: "number",
        format: "int64",
    },
    results: {
        baseName: "results",
        type: "Array<SyntheticsAPITestResultShort>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsGetAPITestLatestResultsResponse.js.map