"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsStatusRemapper = void 0;
/**
 * Use this Processor if you want to assign some attributes as the official status.
 *
 * Each incoming status value is mapped as follows.
 *
 *   - Integers from 0 to 7 map to the Syslog severity standards
 *   - Strings beginning with `emerg` or f (case-insensitive) map to `emerg` (0)
 *   - Strings beginning with `a` (case-insensitive) map to `alert` (1)
 *   - Strings beginning with `c` (case-insensitive) map to `critical` (2)
 *   - Strings beginning with `err` (case-insensitive) map to `error` (3)
 *   - Strings beginning with `w` (case-insensitive) map to `warning` (4)
 *   - Strings beginning with `n` (case-insensitive) map to `notice` (5)
 *   - Strings beginning with `i` (case-insensitive) map to `info` (6)
 *   - Strings beginning with `d`, `trace` or `verbose` (case-insensitive) map to `debug` (7)
 *   - Strings beginning with `o` or matching `OK` or `Success` (case-insensitive) map to OK
 *   - All others map to `info` (6)
 *
 *   **Note:** If multiple log status remapper processors can be applied to a given log,
 *   only the first one (according to the pipelines order) is taken into account.
 */
class LogsStatusRemapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsStatusRemapper.attributeTypeMap;
    }
}
exports.LogsStatusRemapper = LogsStatusRemapper;
/**
 * @ignore
 */
LogsStatusRemapper.attributeTypeMap = {
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    sources: {
        baseName: "sources",
        type: "Array<string>",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsStatusRemapperType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsStatusRemapper.js.map