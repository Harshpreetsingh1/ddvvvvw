"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOHistoryResponse = void 0;
/**
 * A service level objective history response.
 */
class SLOHistoryResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOHistoryResponse.attributeTypeMap;
    }
}
exports.SLOHistoryResponse = SLOHistoryResponse;
/**
 * @ignore
 */
SLOHistoryResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SLOHistoryResponseData",
    },
    errors: {
        baseName: "errors",
        type: "Array<SLOHistoryResponseError>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOHistoryResponse.js.map