"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKeyCreateRequest = void 0;
/**
 * Request used to create an application key.
 */
class ApplicationKeyCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationKeyCreateRequest.attributeTypeMap;
    }
}
exports.ApplicationKeyCreateRequest = ApplicationKeyCreateRequest;
/**
 * @ignore
 */
ApplicationKeyCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ApplicationKeyCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationKeyCreateRequest.js.map