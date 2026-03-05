"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCountSpec = void 0;
/**
 * A metric SLI specification.
 */
class SLOCountSpec {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCountSpec.attributeTypeMap;
    }
}
exports.SLOCountSpec = SLOCountSpec;
/**
 * @ignore
 */
SLOCountSpec.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "SLOCountDefinition",
        required: true,
    },
};
//# sourceMappingURL=SLOCountSpec.js.map