"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleCIIntegration = void 0;
/**
 * The definition of the `CircleCIIntegration` object.
 */
class CircleCIIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CircleCIIntegration.attributeTypeMap;
    }
}
exports.CircleCIIntegration = CircleCIIntegration;
/**
 * @ignore
 */
CircleCIIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "CircleCICredentials",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CircleCIIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CircleCIIntegration.js.map