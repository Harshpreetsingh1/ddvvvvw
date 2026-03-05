"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComponentRequestDataRelationships = void 0;
/**
 * The supported relationships for creating a component.
 */
class CreateComponentRequestDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateComponentRequestDataRelationships.attributeTypeMap;
    }
}
exports.CreateComponentRequestDataRelationships = CreateComponentRequestDataRelationships;
/**
 * @ignore
 */
CreateComponentRequestDataRelationships.attributeTypeMap = {
    group: {
        baseName: "group",
        type: "CreateComponentRequestDataRelationshipsGroup",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateComponentRequestDataRelationships.js.map