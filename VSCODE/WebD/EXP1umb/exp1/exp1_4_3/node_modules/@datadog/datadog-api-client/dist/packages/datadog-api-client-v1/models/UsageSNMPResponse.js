"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSNMPResponse = void 0;
/**
 * Response containing the number of SNMP devices for each hour for a given organization.
 */
class UsageSNMPResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSNMPResponse.attributeTypeMap;
    }
}
exports.UsageSNMPResponse = UsageSNMPResponse;
/**
 * @ignore
 */
UsageSNMPResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageSNMPHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageSNMPResponse.js.map