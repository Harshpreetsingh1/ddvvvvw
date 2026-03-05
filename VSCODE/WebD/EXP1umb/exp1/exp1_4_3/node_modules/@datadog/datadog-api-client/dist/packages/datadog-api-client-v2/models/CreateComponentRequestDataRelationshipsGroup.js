"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComponentRequestDataRelationshipsGroup = void 0;
class CreateComponentRequestDataRelationshipsGroup {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateComponentRequestDataRelationshipsGroup.attributeTypeMap;
    }
}
exports.CreateComponentRequestDataRelationshipsGroup = CreateComponentRequestDataRelationshipsGroup;
/**
 * @ignore
 */
CreateComponentRequestDataRelationshipsGroup.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateComponentRequestDataRelationshipsGroupData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateComponentRequestDataRelationshipsGroup.js.map