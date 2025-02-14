export type ObjectStore<T = unknown> = {
    namespace: string;
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
                dbStore: ObjectStore<T>;
                key: string;
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
                dbStore: ObjectStore<T>;
                key: string;
            };
        };
        response: T | undefined;
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
                dbStore: ObjectStore<T>;
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
};
