import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import type { DataConnectionMap } from "../DataConnectionMap";
export declare const Datas: {
    put: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => (body: DataConnectionMap["data.put"]["request"]["body"]) => Promise<M["data.put"]["response"]>;
    get: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => <T = unknown>(body: DataConnectionMap["data.get"]["request"]["body"]) => Promise<T | undefined>;
    getMany: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => <T = unknown>(body: DataConnectionMap["data.getMany"]["request"]["body"]) => Promise<T[]>;
    search: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => (body: DataConnectionMap["data.search"]["request"]["body"]) => Promise<M["data.search"]["response"]>;
    remove: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => (body: DataConnectionMap["data.remove"]["request"]["body"]) => Promise<M["data.remove"]["response"]>;
    putEntity: <C extends DataConnectionMap>(con: MessageConnectionInstance<C>) => <T extends import("..").Entity>(store: import("../DataConnectionMap").ObjectStore<T>) => (draft: Partial<T>) => Promise<C["data.put"]["response"]>;
};
