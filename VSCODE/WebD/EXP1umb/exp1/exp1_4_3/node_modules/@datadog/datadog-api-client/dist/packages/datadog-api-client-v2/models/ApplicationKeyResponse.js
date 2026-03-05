"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKeyResponse = void 0;
/**
 * Response for retrieving an application key.
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
    data: {
        baseName: "data",
        type: "FullApplicationKey",
    },
    included: {
        baseName: "included",
        type: "Array<ApplicationKeyResponseIncludedItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationKeyResponse.js.map