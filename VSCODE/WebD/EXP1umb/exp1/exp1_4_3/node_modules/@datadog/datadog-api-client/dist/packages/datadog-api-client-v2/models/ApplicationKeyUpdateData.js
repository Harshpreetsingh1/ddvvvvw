"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKeyUpdateData = void 0;
/**
 * Object used to update an application key.
 */
class ApplicationKeyUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationKeyUpdateData.attributeTypeMap;
    }
}
exports.ApplicationKeyUpdateData = ApplicationKeyUpdateData;
/**
 * @ignore
 */
ApplicationKeyUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ApplicationKeyUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=ApplicationKeyUpdateData.js.map