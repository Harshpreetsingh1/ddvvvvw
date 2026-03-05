"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
/**
 * Object describing a log after being processed and stored by Datadog.
 */
class Log {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Log.attributeTypeMap;
    }
}
exports.Log = Log;
/**
 * @ignore
 */
Log.attributeTypeMap = {
    content: {
        baseName: "content",
        type: "LogContent",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Log.js.map