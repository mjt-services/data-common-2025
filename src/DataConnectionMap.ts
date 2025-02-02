export type Db<T = unknown> = {
  dbName: string;
  storeName: string;
};

export type DataConnectionMap<T = unknown> = {
  "data.add": {
    request: {
      options?: Partial<{}>;
      body: {
        db: Db<T>;
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
  "data.put": {
    request: {
      options?: Partial<{}>;
      body: {
        db: Db<T>;
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
        db: Db<T>;
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
        db: Db<T>;
        query?: IDBValidKey | IDBKeyRange | null;
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
        db: Db<T>;
        query: IDBValidKey | IDBKeyRange;
      };
    };
    response: { success: boolean };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
};
