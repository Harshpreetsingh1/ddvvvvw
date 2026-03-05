"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageIndexedSpansResponse = void 0;
/**
 * A response containing indexed spans usage.
 */
class UsageIndexedSpansResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageIndexedSpansResponse.attributeTypeMap;
    }
}
exports.UsageIndexedSpansResponse = UsageIndexedSpansResponse;
/**
 * @ignore
 */
UsageIndexedSpansResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageIndexedSpansHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageIndexedSpansResponse.js.map