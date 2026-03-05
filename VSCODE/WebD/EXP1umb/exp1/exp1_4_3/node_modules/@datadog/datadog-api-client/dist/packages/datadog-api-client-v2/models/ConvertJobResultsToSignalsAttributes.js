"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertJobResultsToSignalsAttributes = void 0;
/**
 * Attributes for converting threat hunting job results to signals.
 */
class ConvertJobResultsToSignalsAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConvertJobResultsToSignalsAttributes.attributeTypeMap;
    }
}
exports.ConvertJobResultsToSignalsAttributes = ConvertJobResultsToSignalsAttributes;
/**
 * @ignore
 */
ConvertJobResultsToSignalsAttributes.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    jobResultIds: {
        baseName: "jobResultIds",
        type: "Array<string>",
        required: true,
    },
    notifications: {
        baseName: "notifications",
        type: "Array<string>",
        required: true,
    },
    signalMessage: {
        baseName: "signalMessage",
        type: "string",
        required: true,
    },
    signalSeverity: {
        baseName: "signalSeverity",
        type: "SecurityMonitoringRuleSeverity",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConvertJobResultsToSignalsAttributes.js.map