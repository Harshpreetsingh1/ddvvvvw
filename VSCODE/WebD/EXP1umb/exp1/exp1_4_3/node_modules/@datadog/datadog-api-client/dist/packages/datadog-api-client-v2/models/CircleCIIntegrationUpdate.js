"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleCIIntegrationUpdate = void 0;
/**
 * The definition of the `CircleCIIntegrationUpdate` object.
 */
class CircleCIIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CircleCIIntegrationUpdate.attributeTypeMap;
    }
}
exports.CircleCIIntegrationUpdate = CircleCIIntegrationUpdate;
/**
 * @ignore
 */
CircleCIIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "CircleCICredentialsUpdate",
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
//# sourceMappingURL=CircleCIIntegrationUpdate.js.map