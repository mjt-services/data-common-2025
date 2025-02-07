export declare const from: (type?: string, uuid?: `${string}-${string}-${string}-${string}-${string}`, timestamp?: string) => string;
export declare const parse: (id: string) => {
    type: string;
    timestamp: string;
    uuid: string;
} | undefined;
export declare const Ids: {
    from: (type?: string, uuid?: `${string}-${string}-${string}-${string}-${string}`, timestamp?: string) => string;
    parse: (id: string) => {
        type: string;
        timestamp: string;
        uuid: string;
    } | undefined;
};
