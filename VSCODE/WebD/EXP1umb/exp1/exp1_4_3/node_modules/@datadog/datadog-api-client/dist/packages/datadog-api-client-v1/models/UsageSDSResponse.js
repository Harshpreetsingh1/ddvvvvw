"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSDSResponse = void 0;
/**
 * Response containing the Sensitive Data Scanner usage for each hour for a given organization.
 */
class UsageSDSResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSDSResponse.attributeTypeMap;
    }
}
exports.UsageSDSResponse = UsageSDSResponse;
/**
 * @ignore
 */
UsageSDSResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageSDSHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageSDSResponse.js.map