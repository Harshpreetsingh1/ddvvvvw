"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStatusPageRequestData = void 0;
class CreateStatusPageRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateStatusPageRequestData.attributeTypeMap;
    }
}
exports.CreateStatusPageRequestData = CreateStatusPageRequestData;
/**
 * @ignore
 */
CreateStatusPageRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateStatusPageRequestDataAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "StatusPageDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateStatusPageRequestData.js.map