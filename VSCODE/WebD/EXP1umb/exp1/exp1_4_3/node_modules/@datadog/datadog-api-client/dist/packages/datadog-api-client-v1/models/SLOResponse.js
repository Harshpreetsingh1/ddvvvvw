"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOResponse = void 0;
/**
 * A service level objective response containing a single service level objective.
 */
class SLOResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOResponse.attributeTypeMap;
    }
}
exports.SLOResponse = SLOResponse;
/**
 * @ignore
 */
SLOResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SLOResponseData",
    },
    errors: {
        baseName: "errors",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOResponse.js.map