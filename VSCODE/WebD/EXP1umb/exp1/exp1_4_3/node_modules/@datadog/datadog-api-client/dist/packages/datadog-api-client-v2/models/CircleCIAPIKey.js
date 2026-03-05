"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleCIAPIKey = void 0;
/**
 * The definition of the `CircleCIAPIKey` object.
 */
class CircleCIAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CircleCIAPIKey.attributeTypeMap;
    }
}
exports.CircleCIAPIKey = CircleCIAPIKey;
/**
 * @ignore
 */
CircleCIAPIKey.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
        required: true,
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
//# sourceMappingURL=CircleCIAPIKey.js.map