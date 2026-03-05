"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceTableLogsLookupProcessor = void 0;
/**
 * **Note**: Reference Tables are in public beta.
 * Use the Lookup Processor to define a mapping between a log attribute
 * and a human readable value saved in a Reference Table.
 * For example, you can use the Lookup Processor to map an internal service ID
 * into a human readable service name. Alternatively, you could also use it to check
 * if the MAC address that just attempted to connect to the production
 * environment belongs to your list of stolen machines.
 */
class ReferenceTableLogsLookupProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ReferenceTableLogsLookupProcessor.attributeTypeMap;
    }
}
exports.ReferenceTableLogsLookupProcessor = ReferenceTableLogsLookupProcessor;
/**
 * @ignore
 */
ReferenceTableLogsLookupProcessor.attributeTypeMap = {
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    lookupEnrichmentTable: {
        baseName: "lookup_enrichment_table",
        type: "string",
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
//# sourceMappingURL=ReferenceTableLogsLookupProcessor.js.map