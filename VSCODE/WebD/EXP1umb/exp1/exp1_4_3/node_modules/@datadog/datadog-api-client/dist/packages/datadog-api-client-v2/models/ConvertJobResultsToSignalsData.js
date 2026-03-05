"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertJobResultsToSignalsData = void 0;
/**
 * Data for converting threat hunting job results to signals.
 */
class ConvertJobResultsToSignalsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConvertJobResultsToSignalsData.attributeTypeMap;
    }
}
exports.ConvertJobResultsToSignalsData = ConvertJobResultsToSignalsData;
/**
 * @ignore
 */
ConvertJobResultsToSignalsData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ConvertJobResultsToSignalsAttributes",
    },
    type: {
        baseName: "type",
        type: "ConvertJobResultsToSignalsDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConvertJobResultsToSignalsData.js.map