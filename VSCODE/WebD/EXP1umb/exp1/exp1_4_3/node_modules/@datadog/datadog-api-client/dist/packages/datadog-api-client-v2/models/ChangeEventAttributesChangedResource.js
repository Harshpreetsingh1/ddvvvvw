"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeEventAttributesChangedResource = void 0;
/**
 * A uniquely identified resource.
 */
class ChangeEventAttributesChangedResource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeEventAttributesChangedResource.attributeTypeMap;
    }
}
exports.ChangeEventAttributesChangedResource = ChangeEventAttributesChangedResource;
/**
 * @ignore
 */
ChangeEventAttributesChangedResource.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ChangeEventAttributesChangedResourceType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeEventAttributesChangedResource.js.map