export declare const from: (type?: string, unique?: `${string}-${string}-${string}-${string}-${string}`, timestamp?: string, separator?: string) => string;
export declare const parse: (id: string, separator?: string) => {
    type: string;
    timestamp: string;
    unique: string;
} | undefined;
export declare const Ids: {
    from: (type?: string, unique?: `${string}-${string}-${string}-${string}-${string}`, timestamp?: string, separator?: string) => string;
    parse: (id: string, separator?: string) => {
        type: string;
        timestamp: string;
        unique: string;
    } | undefined;
};
