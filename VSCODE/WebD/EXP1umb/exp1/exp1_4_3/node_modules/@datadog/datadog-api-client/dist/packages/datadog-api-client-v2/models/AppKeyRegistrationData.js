"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppKeyRegistrationData = void 0;
/**
 * Data related to the app key registration.
 */
class AppKeyRegistrationData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AppKeyRegistrationData.attributeTypeMap;
    }
}
exports.AppKeyRegistrationData = AppKeyRegistrationData;
/**
 * @ignore
 */
AppKeyRegistrationData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    type: {
        baseName: "type",
        type: "AppKeyRegistrationDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AppKeyRegistrationData.js.map