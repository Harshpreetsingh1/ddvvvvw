"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckCanDeleteSLOResponse = void 0;
/**
 * A service level objective response containing the requested object.
 */
class CheckCanDeleteSLOResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CheckCanDeleteSLOResponse.attributeTypeMap;
    }
}
exports.CheckCanDeleteSLOResponse = CheckCanDeleteSLOResponse;
/**
 * @ignore
 */
CheckCanDeleteSLOResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CheckCanDeleteSLOResponseData",
    },
    errors: {
        baseName: "errors",
        type: "{ [key: string]: string; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CheckCanDeleteSLOResponse.js.map