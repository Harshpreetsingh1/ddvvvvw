"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunnelWidgetRequest = void 0;
/**
 * Updated funnel widget.
 */
class FunnelWidgetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FunnelWidgetRequest.attributeTypeMap;
    }
}
exports.FunnelWidgetRequest = FunnelWidgetRequest;
/**
 * @ignore
 */
FunnelWidgetRequest.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "FunnelQuery",
        required: true,
    },
    requestType: {
        baseName: "request_type",
        type: "FunnelRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FunnelWidgetRequest.js.map