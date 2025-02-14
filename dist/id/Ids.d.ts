import type { ObjectStore } from "../DataConnectionMap";
export declare const from: (type?: string, namespace?: string, unique?: `${string}-${string}-${string}-${string}-${string}`, timestamp?: string, separator?: string) => string;
export declare const fromObjectStore: (objectStore: ObjectStore) => string;
export declare const parse: (id: string, separator?: string) => {
    namespace: string;
    type: string;
    timestamp: string;
    unique: string;
} | undefined;
export declare const toObjectStore: (id: string) => {
    namespace: string;
    store: string;
} | undefined;
export declare const Ids: {
    from: (type?: string, namespace?: string, unique?: `${string}-${string}-${string}-${string}-${string}`, timestamp?: string, separator?: string) => string;
    parse: (id: string, separator?: string) => {
        namespace: string;
        type: string;
        timestamp: string;
        unique: string;
    } | undefined;
    fromObjectStore: (objectStore: ObjectStore) => string;
    toObjectStore: (id: string) => {
        namespace: string;
        store: string;
    } | undefined;
};
