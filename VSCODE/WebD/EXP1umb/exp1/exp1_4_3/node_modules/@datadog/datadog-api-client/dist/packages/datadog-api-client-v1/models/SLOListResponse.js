"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOListResponse = void 0;
/**
 * A response with one or more service level objective.
 */
class SLOListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOListResponse.attributeTypeMap;
    }
}
exports.SLOListResponse = SLOListResponse;
/**
 * @ignore
 */
SLOListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ServiceLevelObjective>",
    },
    errors: {
        baseName: "errors",
        type: "Array<string>",
    },
    metadata: {
        baseName: "metadata",
        type: "SLOListResponseMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOListResponse.js.map