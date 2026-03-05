"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKeyResponse = void 0;
/**
 * An application key response.
 */
class ApplicationKeyResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationKeyResponse.attributeTypeMap;
    }
}
exports.ApplicationKeyResponse = ApplicationKeyResponse;
/**
 * @ignore
 */
ApplicationKeyResponse.attributeTypeMap = {
    applicationKey: {
        baseName: "application_key",
        type: "ApplicationKey",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationKeyResponse.js.map