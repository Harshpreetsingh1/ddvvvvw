"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertJobResultsToSignalsRequest = void 0;
/**
 * Request for converting threat hunting job results to signals.
 */
class ConvertJobResultsToSignalsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConvertJobResultsToSignalsRequest.attributeTypeMap;
    }
}
exports.ConvertJobResultsToSignalsRequest = ConvertJobResultsToSignalsRequest;
/**
 * @ignore
 */
ConvertJobResultsToSignalsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ConvertJobResultsToSignalsData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConvertJobResultsToSignalsRequest.js.map