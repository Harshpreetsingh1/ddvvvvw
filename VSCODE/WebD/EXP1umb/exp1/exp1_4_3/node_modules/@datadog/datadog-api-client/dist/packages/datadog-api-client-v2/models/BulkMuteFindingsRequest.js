"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkMuteFindingsRequest = void 0;
/**
 * The new bulk mute finding request.
 */
class BulkMuteFindingsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BulkMuteFindingsRequest.attributeTypeMap;
    }
}
exports.BulkMuteFindingsRequest = BulkMuteFindingsRequest;
/**
 * @ignore
 */
BulkMuteFindingsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "BulkMuteFindingsRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BulkMuteFindingsRequest.js.map