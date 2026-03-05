"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeEventCustomAttributesChangedResource = void 0;
/**
 * A uniquely identified resource.
 */
class ChangeEventCustomAttributesChangedResource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeEventCustomAttributesChangedResource.attributeTypeMap;
    }
}
exports.ChangeEventCustomAttributesChangedResource = ChangeEventCustomAttributesChangedResource;
/**
 * @ignore
 */
ChangeEventCustomAttributesChangedResource.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ChangeEventCustomAttributesChangedResourceType",
        required: true,
    },
};
//# sourceMappingURL=ChangeEventCustomAttributesChangedResource.js.map