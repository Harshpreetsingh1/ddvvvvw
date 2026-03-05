"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsServiceRemapper = void 0;
/**
 * Use this processor if you want to assign one or more attributes as the official service.
 *
 * **Note:** If multiple service remapper processors can be applied to a given log,
 * only the first one (according to the pipeline order) is taken into account.
 */
class LogsServiceRemapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsServiceRemapper.attributeTypeMap;
    }
}
exports.LogsServiceRemapper = LogsServiceRemapper;
/**
 * @ignore
 */
LogsServiceRemapper.attributeTypeMap = {
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
        type: "LogsServiceRemapperType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsServiceRemapper.js.map