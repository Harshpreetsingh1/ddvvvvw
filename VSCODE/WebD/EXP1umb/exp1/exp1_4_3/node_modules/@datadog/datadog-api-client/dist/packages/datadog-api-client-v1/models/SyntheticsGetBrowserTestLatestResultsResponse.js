"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsGetBrowserTestLatestResultsResponse = void 0;
/**
 * Object with the latest Synthetic browser test run.
 */
class SyntheticsGetBrowserTestLatestResultsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsGetBrowserTestLatestResultsResponse.attributeTypeMap;
    }
}
exports.SyntheticsGetBrowserTestLatestResultsResponse = SyntheticsGetBrowserTestLatestResultsResponse;
/**
 * @ignore
 */
SyntheticsGetBrowserTestLatestResultsResponse.attributeTypeMap = {
    lastTimestampFetched: {
        baseName: "last_timestamp_fetched",
        type: "number",
        format: "int64",
    },
    results: {
        baseName: "results",
        type: "Array<SyntheticsBrowserTestResultShort>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsGetBrowserTestLatestResultsResponse.js.map