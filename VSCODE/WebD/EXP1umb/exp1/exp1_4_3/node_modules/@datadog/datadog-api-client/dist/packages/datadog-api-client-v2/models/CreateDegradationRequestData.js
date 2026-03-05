"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDegradationRequestData = void 0;
class CreateDegradationRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateDegradationRequestData.attributeTypeMap;
    }
}
exports.CreateDegradationRequestData = CreateDegradationRequestData;
/**
 * @ignore
 */
CreateDegradationRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateDegradationRequestDataAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "PatchDegradationRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateDegradationRequestData.js.map