"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKeyCreateData = void 0;
/**
 * Object used to create an application key.
 */
class ApplicationKeyCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationKeyCreateData.attributeTypeMap;
    }
}
exports.ApplicationKeyCreateData = ApplicationKeyCreateData;
/**
 * @ignore
 */
ApplicationKeyCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ApplicationKeyCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ApplicationKeysType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationKeyCreateData.js.map