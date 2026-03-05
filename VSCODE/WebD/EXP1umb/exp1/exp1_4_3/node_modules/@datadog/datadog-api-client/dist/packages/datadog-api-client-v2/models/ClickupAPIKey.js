"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickupAPIKey = void 0;
/**
 * The definition of the `ClickupAPIKey` object.
 */
class ClickupAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ClickupAPIKey.attributeTypeMap;
    }
}
exports.ClickupAPIKey = ClickupAPIKey;
/**
 * @ignore
 */
ClickupAPIKey.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ClickupAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ClickupAPIKey.js.map