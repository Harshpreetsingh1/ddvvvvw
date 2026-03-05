"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostMapWidgetDefinitionRequests = void 0;
/**
 * List of definitions.
 */
class HostMapWidgetDefinitionRequests {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HostMapWidgetDefinitionRequests.attributeTypeMap;
    }
}
exports.HostMapWidgetDefinitionRequests = HostMapWidgetDefinitionRequests;
/**
 * @ignore
 */
HostMapWidgetDefinitionRequests.attributeTypeMap = {
    fill: {
        baseName: "fill",
        type: "HostMapRequest",
    },
    size: {
        baseName: "size",
        type: "HostMapRequest",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HostMapWidgetDefinitionRequests.js.map