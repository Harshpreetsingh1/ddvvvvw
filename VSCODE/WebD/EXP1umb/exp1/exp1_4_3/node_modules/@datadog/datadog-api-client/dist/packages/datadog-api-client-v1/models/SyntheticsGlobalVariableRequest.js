"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsGlobalVariableRequest = void 0;
/**
 * Details of the global variable to create.
 */
class SyntheticsGlobalVariableRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsGlobalVariableRequest.attributeTypeMap;
    }
}
exports.SyntheticsGlobalVariableRequest = SyntheticsGlobalVariableRequest;
/**
 * @ignore
 */
SyntheticsGlobalVariableRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SyntheticsGlobalVariableAttributes",
    },
    description: {
        baseName: "description",
        type: "string",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    isFido: {
        baseName: "is_fido",
        type: "boolean",
    },
    isTotp: {
        baseName: "is_totp",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    parseTestOptions: {
        baseName: "parse_test_options",
        type: "SyntheticsGlobalVariableParseTestOptions",
    },
    parseTestPublicId: {
        baseName: "parse_test_public_id",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
        required: true,
    },
    value: {
        baseName: "value",
        type: "SyntheticsGlobalVariableValue",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsGlobalVariableRequest.js.map