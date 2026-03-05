"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentResourceResponseData = void 0;
/**
 * Confluent Cloud resource data.
 */
class ConfluentResourceResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentResourceResponseData.attributeTypeMap;
    }
}
exports.ConfluentResourceResponseData = ConfluentResourceResponseData;
/**
 * @ignore
 */
ConfluentResourceResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ConfluentResourceResponseAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ConfluentResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfluentResourceResponseData.js.map