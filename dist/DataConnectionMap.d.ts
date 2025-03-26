export type ObjectStore<T = unknown> = {
    namespace?: string;
    store: string;
};
export type DataQuery = {
    query?: string;
    to?: ObjectStore;
    next?: DataQuery;
};
export type FromObjectStoreDataQuery = DataQuery & {
    from: ObjectStore | ObjectStore[];
};
export type FromUnknownDataQuery = DataQuery & {
    from: unknown;
};
export type DataConnectionMap<T = unknown> = {
    "data.put": {
        request: {
            options?: Partial<{}>;
            body: {
                objectStore?: ObjectStore<T>;
                key?: string;
                value: T;
            };
        };
        response: string;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "data.get": {
        request: {
            options?: Partial<{}>;
            body: {
                objectStore?: ObjectStore<T>;
                key: string;
            };
        };
        response: T | undefined;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "data.getMany": {
        request: {
            options?: Partial<{}>;
            body: {
                objectStore?: ObjectStore<T>;
                keys: string[];
            };
        };
        response: T[] | undefined;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "data.search": {
        request: {
            options?: Partial<{}>;
            body: FromObjectStoreDataQuery;
        };
        response: unknown;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "data.remove": {
        request: {
            options?: Partial<{}>;
            body: {
                objectStore?: ObjectStore<T>;
                query: string | string[] | FromObjectStoreDataQuery;
            };
        };
        response: {
            success: boolean;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "vector.createCollection": {
        request: {
            options?: Partial<{}>;
            body: {
                size: number;
                distance: "Dot" | "Cosine" | "Euclidean" | "Manhattan";
                dataType: "float32" | "float16" | "uint8";
                on_disk: boolean;
            };
        };
        response: {
            success: boolean;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "vector.put": {
        request: {
            options?: Partial<{}>;
            body: {
                point: Point | Point[];
            };
        };
        response: {
            success: boolean;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "vector.delete": {
        request: {
            options?: Partial<{}>;
            body: {
                point?: (string | number)[];
                filter?: unknown;
            };
        };
        response: {
            success: boolean;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "vector.search": {
        request: {
            options?: Partial<{}>;
            body: {
                query: Float32Array;
                filter?: unknown;
                limit?: number;
                scoreThreshold?: number;
            };
        };
        response: {
            result: {
                id: number | string;
                score: number;
                payload: Payload;
            }[];
            time: number;
            status: string;
        }[];
        headers: {
            url?: string;
            authToken?: string;
        };
    };
};
export type Point = {
    id: number | string;
    vector: Float32Array;
    payload: unknown;
};
export type Payload = {
    contentId: string;
    roomId?: string;
    assistantId?: string;
    userId?: string;
    start: number;
    end: number;
    timestamp: number;
    geo?: {
        lat: number;
        lon: number;
    };
};
