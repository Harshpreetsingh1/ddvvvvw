"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsLookupProcessor = void 0;
/**
 * Use the Lookup Processor to define a mapping between a log attribute
 * and a human readable value saved in the processors mapping table.
 * For example, you can use the Lookup Processor to map an internal service ID
 * into a human readable service name. Alternatively, you could also use it to check
 * if the MAC address that just attempted to connect to the production
 * environment belongs to your list of stolen machines.
 */
class LogsLookupProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsLookupProcessor.attributeTypeMap;
    }
}
exports.LogsLookupProcessor = LogsLookupProcessor;
/**
 * @ignore
 */
LogsLookupProcessor.attributeTypeMap = {
    defaultLookup: {
        baseName: "default_lookup",
        type: "string",
    },
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    lookupTable: {
        baseName: "lookup_table",
        type: "Array<string>",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
    },
    source: {
        baseName: "source",
        type: "string",
        required: true,
    },
    target: {
        baseName: "target",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsLookupProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsLookupProcessor.js.map