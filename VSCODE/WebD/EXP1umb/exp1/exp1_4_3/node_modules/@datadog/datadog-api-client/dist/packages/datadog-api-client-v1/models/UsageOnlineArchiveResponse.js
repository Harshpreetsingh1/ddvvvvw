"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageOnlineArchiveResponse = void 0;
/**
 * Online Archive usage response.
 */
class UsageOnlineArchiveResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageOnlineArchiveResponse.attributeTypeMap;
    }
}
exports.UsageOnlineArchiveResponse = UsageOnlineArchiveResponse;
/**
 * @ignore
 */
UsageOnlineArchiveResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageOnlineArchiveHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageOnlineArchiveResponse.js.map