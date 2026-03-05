"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOTimeSliceSpec = void 0;
/**
 * A time-slice SLI specification.
 */
class SLOTimeSliceSpec {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOTimeSliceSpec.attributeTypeMap;
    }
}
exports.SLOTimeSliceSpec = SLOTimeSliceSpec;
/**
 * @ignore
 */
SLOTimeSliceSpec.attributeTypeMap = {
    timeSlice: {
        baseName: "time_slice",
        type: "SLOTimeSliceCondition",
        required: true,
    },
};
//# sourceMappingURL=SLOTimeSliceSpec.js.map