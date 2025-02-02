export type DbStore<T = unknown> = {
    dbName: string;
    storeName: string;
};
export type DataConnectionMap<T = unknown> = {
    "data.put": {
        request: {
            options?: Partial<{}>;
            body: {
                dbStore: DbStore<T>;
                key: IDBValidKey;
                value: T;
            };
        };
        response: IDBValidKey;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "data.get": {
        request: {
            options?: Partial<{}>;
            body: {
                dbStore: DbStore<T>;
                key: IDBValidKey;
            };
        };
        response: T | undefined;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "data.list": {
        request: {
            options?: Partial<{}>;
            body: {
                dbStore: DbStore<T>;
                query?: IDBValidKey | null;
                count?: number;
            };
        };
        response: IDBValidKey[];
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "data.remove": {
        request: {
            options?: Partial<{}>;
            body: {
                dbStore: DbStore<T>;
                query: IDBValidKey;
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
