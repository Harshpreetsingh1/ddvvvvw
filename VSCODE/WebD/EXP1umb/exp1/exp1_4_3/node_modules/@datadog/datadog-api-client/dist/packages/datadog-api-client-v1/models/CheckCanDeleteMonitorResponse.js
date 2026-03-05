"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckCanDeleteMonitorResponse = void 0;
/**
 * Response of monitor IDs that can or can't be safely deleted.
 */
class CheckCanDeleteMonitorResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CheckCanDeleteMonitorResponse.attributeTypeMap;
    }
}
exports.CheckCanDeleteMonitorResponse = CheckCanDeleteMonitorResponse;
/**
 * @ignore
 */
CheckCanDeleteMonitorResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CheckCanDeleteMonitorResponseData",
        required: true,
    },
    errors: {
        baseName: "errors",
        type: "{ [key: string]: Array<string>; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CheckCanDeleteMonitorResponse.js.map