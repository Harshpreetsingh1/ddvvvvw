"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCIVisibilityResponse = void 0;
/**
 * CI visibility usage response
 */
class UsageCIVisibilityResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageCIVisibilityResponse.attributeTypeMap;
    }
}
exports.UsageCIVisibilityResponse = UsageCIVisibilityResponse;
/**
 * @ignore
 */
UsageCIVisibilityResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageCIVisibilityHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageCIVisibilityResponse.js.map