"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKeyResponseMeta = void 0;
/**
 * Additional information related to the application key response.
 */
class ApplicationKeyResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationKeyResponseMeta.attributeTypeMap;
    }
}
exports.ApplicationKeyResponseMeta = ApplicationKeyResponseMeta;
/**
 * @ignore
 */
ApplicationKeyResponseMeta.attributeTypeMap = {
    maxAllowedPerUser: {
        baseName: "max_allowed_per_user",
        type: "number",
        format: "int64",
    },
    page: {
        baseName: "page",
        type: "ApplicationKeyResponseMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationKeyResponseMeta.js.map