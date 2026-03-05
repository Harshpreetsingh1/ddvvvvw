"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickupAPIKeyUpdate = void 0;
/**
 * The definition of the `ClickupAPIKey` object.
 */
class ClickupAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ClickupAPIKeyUpdate.attributeTypeMap;
    }
}
exports.ClickupAPIKeyUpdate = ClickupAPIKeyUpdate;
/**
 * @ignore
 */
ClickupAPIKeyUpdate.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
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
//# sourceMappingURL=ClickupAPIKeyUpdate.js.map