"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeEventAttributes = void 0;
/**
 * Change event attributes.
 */
class ChangeEventAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeEventAttributes.attributeTypeMap;
    }
}
exports.ChangeEventAttributes = ChangeEventAttributes;
/**
 * @ignore
 */
ChangeEventAttributes.attributeTypeMap = {
    aggregationKey: {
        baseName: "aggregation_key",
        type: "string",
    },
    author: {
        baseName: "author",
        type: "ChangeEventAttributesAuthor",
    },
    changeMetadata: {
        baseName: "change_metadata",
        type: "any",
    },
    changedResource: {
        baseName: "changed_resource",
        type: "ChangeEventAttributesChangedResource",
    },
    evt: {
        baseName: "evt",
        type: "EventSystemAttributes",
    },
    impactedResources: {
        baseName: "impacted_resources",
        type: "Array<ChangeEventAttributesImpactedResourcesItem>",
    },
    newValue: {
        baseName: "new_value",
        type: "any",
    },
    prevValue: {
        baseName: "prev_value",
        type: "any",
    },
    service: {
        baseName: "service",
        type: "string",
    },
    timestamp: {
        baseName: "timestamp",
        type: "number",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeEventAttributes.js.map