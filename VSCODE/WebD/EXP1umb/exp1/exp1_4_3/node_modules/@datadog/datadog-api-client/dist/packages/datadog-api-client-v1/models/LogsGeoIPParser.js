"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsGeoIPParser = void 0;
/**
 * The GeoIP parser takes an IP address attribute and extracts if available
 * the Continent, Country, Subdivision, and City information in the target attribute path.
 */
class LogsGeoIPParser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsGeoIPParser.attributeTypeMap;
    }
}
exports.LogsGeoIPParser = LogsGeoIPParser;
/**
 * @ignore
 */
LogsGeoIPParser.attributeTypeMap = {
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
    target: {
        baseName: "target",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsGeoIPParserType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsGeoIPParser.js.map