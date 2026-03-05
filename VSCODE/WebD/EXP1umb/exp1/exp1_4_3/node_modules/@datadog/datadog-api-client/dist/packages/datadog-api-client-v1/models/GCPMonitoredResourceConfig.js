"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPMonitoredResourceConfig = void 0;
/**
 * Configuration for a GCP monitored resource.
 */
class GCPMonitoredResourceConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPMonitoredResourceConfig.attributeTypeMap;
    }
}
exports.GCPMonitoredResourceConfig = GCPMonitoredResourceConfig;
/**
 * @ignore
 */
GCPMonitoredResourceConfig.attributeTypeMap = {
    filters: {
        baseName: "filters",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "GCPMonitoredResourceConfigType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPMonitoredResourceConfig.js.map