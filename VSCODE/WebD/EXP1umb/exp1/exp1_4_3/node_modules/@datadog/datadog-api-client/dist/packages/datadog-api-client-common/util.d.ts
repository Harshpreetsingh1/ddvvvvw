export declare class UnparsedObject {
    _data: any;
    constructor(data: any);
}
export declare type AttributeTypeMap = {
    [key: string]: {
        baseName: string;
        type: string;
        required?: boolean;
        format?: string;
    };
};
export declare const isBrowser: boolean;
export declare const isNode: boolean;
export declare class DDate extends Date {
    originalDate: string | undefined;
}
export declare function dateFromRFC3339String(date: string): DDate;
export declare function dateToRFC3339String(date: Date | DDate): string;
