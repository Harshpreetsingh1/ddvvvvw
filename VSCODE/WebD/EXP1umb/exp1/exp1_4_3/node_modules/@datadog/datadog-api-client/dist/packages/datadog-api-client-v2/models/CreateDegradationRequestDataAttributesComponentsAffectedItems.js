"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDegradationRequestDataAttributesComponentsAffectedItems = void 0;
class CreateDegradationRequestDataAttributesComponentsAffectedItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateDegradationRequestDataAttributesComponentsAffectedItems.attributeTypeMap;
    }
}
exports.CreateDegradationRequestDataAttributesComponentsAffectedItems = CreateDegradationRequestDataAttributesComponentsAffectedItems;
/**
 * @ignore
 */
CreateDegradationRequestDataAttributesComponentsAffectedItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "StatusPagesComponentDataAttributesStatus",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateDegradationRequestDataAttributesComponentsAffectedItems.js.map