"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOListWidgetRequest = void 0;
/**
 * Updated SLO List widget.
 */
class SLOListWidgetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOListWidgetRequest.attributeTypeMap;
    }
}
exports.SLOListWidgetRequest = SLOListWidgetRequest;
/**
 * @ignore
 */
SLOListWidgetRequest.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "SLOListWidgetQuery",
        required: true,
    },
    requestType: {
        baseName: "request_type",
        type: "SLOListWidgetRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOListWidgetRequest.js.map