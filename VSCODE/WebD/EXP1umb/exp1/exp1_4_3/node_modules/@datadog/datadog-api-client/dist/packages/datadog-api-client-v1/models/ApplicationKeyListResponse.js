"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKeyListResponse = void 0;
/**
 * An application key response.
 */
class ApplicationKeyListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationKeyListResponse.attributeTypeMap;
    }
}
exports.ApplicationKeyListResponse = ApplicationKeyListResponse;
/**
 * @ignore
 */
ApplicationKeyListResponse.attributeTypeMap = {
    applicationKeys: {
        baseName: "application_keys",
        type: "Array<ApplicationKey>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationKeyListResponse.js.map