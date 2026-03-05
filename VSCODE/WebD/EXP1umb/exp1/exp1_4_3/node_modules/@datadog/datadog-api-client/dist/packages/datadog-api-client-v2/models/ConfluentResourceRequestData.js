"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentResourceRequestData = void 0;
/**
 * JSON:API request for updating a Confluent resource.
 */
class ConfluentResourceRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentResourceRequestData.attributeTypeMap;
    }
}
exports.ConfluentResourceRequestData = ConfluentResourceRequestData;
/**
 * @ignore
 */
ConfluentResourceRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ConfluentResourceRequestAttributes",
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
//# sourceMappingURL=ConfluentResourceRequestData.js.map