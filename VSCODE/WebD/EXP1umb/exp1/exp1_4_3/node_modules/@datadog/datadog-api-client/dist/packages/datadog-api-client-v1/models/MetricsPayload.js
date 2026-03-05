"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsPayload = void 0;
/**
 * The metrics' payload.
 */
class MetricsPayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricsPayload.attributeTypeMap;
    }
}
exports.MetricsPayload = MetricsPayload;
/**
 * @ignore
 */
MetricsPayload.attributeTypeMap = {
    series: {
        baseName: "series",
        type: "Array<Series>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricsPayload.js.map