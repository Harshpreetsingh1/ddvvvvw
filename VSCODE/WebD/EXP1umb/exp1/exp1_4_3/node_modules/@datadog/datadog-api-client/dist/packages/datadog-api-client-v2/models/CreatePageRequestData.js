"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePageRequestData = void 0;
/**
 * The main request body, including attributes and resource type.
 */
class CreatePageRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreatePageRequestData.attributeTypeMap;
    }
}
exports.CreatePageRequestData = CreatePageRequestData;
/**
 * @ignore
 */
CreatePageRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreatePageRequestDataAttributes",
    },
    type: {
        baseName: "type",
        type: "CreatePageRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreatePageRequestData.js.map