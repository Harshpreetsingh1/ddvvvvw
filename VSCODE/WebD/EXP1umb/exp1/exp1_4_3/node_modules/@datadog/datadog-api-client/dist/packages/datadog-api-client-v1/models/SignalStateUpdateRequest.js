"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalStateUpdateRequest = void 0;
/**
 * Attributes describing the change of state for a given state.
 */
class SignalStateUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SignalStateUpdateRequest.attributeTypeMap;
    }
}
exports.SignalStateUpdateRequest = SignalStateUpdateRequest;
/**
 * @ignore
 */
SignalStateUpdateRequest.attributeTypeMap = {
    archiveComment: {
        baseName: "archiveComment",
        type: "string",
    },
    archiveReason: {
        baseName: "archiveReason",
        type: "SignalArchiveReason",
    },
    state: {
        baseName: "state",
        type: "SignalTriageState",
        required: true,
    },
    version: {
        baseName: "version",
        type: "number",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SignalStateUpdateRequest.js.map