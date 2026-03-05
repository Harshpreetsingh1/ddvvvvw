"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelDataDeletionResponseBody = void 0;
/**
 * The response from the cancel data deletion request endpoint.
 */
class CancelDataDeletionResponseBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CancelDataDeletionResponseBody.attributeTypeMap;
    }
}
exports.CancelDataDeletionResponseBody = CancelDataDeletionResponseBody;
/**
 * @ignore
 */
CancelDataDeletionResponseBody.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DataDeletionResponseItem",
    },
    meta: {
        baseName: "meta",
        type: "DataDeletionResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CancelDataDeletionResponseBody.js.map