export type ObjectStore<T = unknown> = {
  namespace: string;
  store: string;
};

export type DataQuery = {
  query?: string; // JMESPath query
  to?: ObjectStore; // optional object type of result (query MUST return an array of IDs)
  next?: DataQuery; // optional next query to chain from the result of this query
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
        objectStore: ObjectStore<T>;
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
        objectStore: ObjectStore<T>;
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
        objectStore: ObjectStore<T>;
        key: string[];
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
        objectStore: ObjectStore<T>;
        query: string | string[] | FromObjectStoreDataQuery;
      };
    };
    response: { success: boolean };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
};
