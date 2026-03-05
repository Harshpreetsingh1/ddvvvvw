"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComponentRequestDataRelationshipsGroupData = void 0;
class CreateComponentRequestDataRelationshipsGroupData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateComponentRequestDataRelationshipsGroupData.attributeTypeMap;
    }
}
exports.CreateComponentRequestDataRelationshipsGroupData = CreateComponentRequestDataRelationshipsGroupData;
/**
 * @ignore
 */
CreateComponentRequestDataRelationshipsGroupData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
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
//# sourceMappingURL=CreateComponentRequestDataRelationshipsGroupData.js.map