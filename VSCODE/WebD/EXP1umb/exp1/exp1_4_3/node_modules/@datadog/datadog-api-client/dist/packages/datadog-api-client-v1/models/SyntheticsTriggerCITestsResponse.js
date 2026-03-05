"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTriggerCITestsResponse = void 0;
/**
 * Object containing information about the tests triggered.
 */
class SyntheticsTriggerCITestsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTriggerCITestsResponse.attributeTypeMap;
    }
}
exports.SyntheticsTriggerCITestsResponse = SyntheticsTriggerCITestsResponse;
/**
 * @ignore
 */
SyntheticsTriggerCITestsResponse.attributeTypeMap = {
    batchId: {
        baseName: "batch_id",
        type: "string",
    },
    locations: {
        baseName: "locations",
        type: "Array<SyntheticsTriggerCITestLocation>",
    },
    results: {
        baseName: "results",
        type: "Array<SyntheticsTriggerCITestRunResult>",
    },
    triggeredCheckIds: {
        baseName: "triggered_check_ids",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTriggerCITestsResponse.js.map