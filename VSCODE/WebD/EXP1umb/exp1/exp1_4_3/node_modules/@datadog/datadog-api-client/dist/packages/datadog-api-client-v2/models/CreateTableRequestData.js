"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRequestData = void 0;
/**
 * The data object containing the table definition.
 */
class CreateTableRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTableRequestData.attributeTypeMap;
    }
}
exports.CreateTableRequestData = CreateTableRequestData;
/**
 * @ignore
 */
CreateTableRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateTableRequestDataAttributes",
    },
    type: {
        baseName: "type",
        type: "CreateTableRequestDataType",
        required: true,
    },
};
//# sourceMappingURL=CreateTableRequestData.js.map