"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKeyUpdateRequest = void 0;
/**
 * Request used to update an application key.
 */
class ApplicationKeyUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationKeyUpdateRequest.attributeTypeMap;
    }
}
exports.ApplicationKeyUpdateRequest = ApplicationKeyUpdateRequest;
/**
 * @ignore
 */
ApplicationKeyUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ApplicationKeyUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationKeyUpdateRequest.js.map