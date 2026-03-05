"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComponentRequestData = void 0;
class CreateComponentRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateComponentRequestData.attributeTypeMap;
    }
}
exports.CreateComponentRequestData = CreateComponentRequestData;
/**
 * @ignore
 */
CreateComponentRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateComponentRequestDataAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "CreateComponentRequestDataRelationships",
    },
    type: {
        baseName: "type",
        type: "StatusPagesComponentGroupType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateComponentRequestData.js.map