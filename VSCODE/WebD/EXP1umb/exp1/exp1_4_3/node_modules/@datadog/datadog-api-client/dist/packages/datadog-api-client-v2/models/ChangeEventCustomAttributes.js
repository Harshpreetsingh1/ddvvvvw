"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeEventCustomAttributes = void 0;
/**
 * Change event attributes.
 */
class ChangeEventCustomAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeEventCustomAttributes.attributeTypeMap;
    }
}
exports.ChangeEventCustomAttributes = ChangeEventCustomAttributes;
/**
 * @ignore
 */
ChangeEventCustomAttributes.attributeTypeMap = {
    author: {
        baseName: "author",
        type: "ChangeEventCustomAttributesAuthor",
    },
    changeMetadata: {
        baseName: "change_metadata",
        type: "{ [key: string]: any; }",
    },
    changedResource: {
        baseName: "changed_resource",
        type: "ChangeEventCustomAttributesChangedResource",
        required: true,
    },
    impactedResources: {
        baseName: "impacted_resources",
        type: "Array<ChangeEventCustomAttributesImpactedResourcesItems>",
    },
    newValue: {
        baseName: "new_value",
        type: "{ [key: string]: any; }",
    },
    prevValue: {
        baseName: "prev_value",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeEventCustomAttributes.js.map