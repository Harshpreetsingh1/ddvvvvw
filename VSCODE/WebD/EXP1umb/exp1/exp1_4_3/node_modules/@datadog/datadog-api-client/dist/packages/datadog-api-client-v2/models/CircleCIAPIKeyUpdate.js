"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleCIAPIKeyUpdate = void 0;
/**
 * The definition of the `CircleCIAPIKey` object.
 */
class CircleCIAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CircleCIAPIKeyUpdate.attributeTypeMap;
    }
}
exports.CircleCIAPIKeyUpdate = CircleCIAPIKeyUpdate;
/**
 * @ignore
 */
CircleCIAPIKeyUpdate.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CircleCIAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CircleCIAPIKeyUpdate.js.map