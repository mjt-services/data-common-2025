import type { Messages } from "@mjt-engine/message";
import type { DataConnectionMap } from "./DataConnectionMap";
type DataConnection = Awaited<ReturnType<typeof Messages.createConnection<DataConnectionMap>>>;
export declare const get: (con: DataConnection) => <T = unknown>(body: DataConnectionMap["data.get"]["request"]["body"]) => Promise<T | undefined>;
export declare const getMany: (con: DataConnection) => <T = unknown>(body: DataConnectionMap["data.getMany"]["request"]["body"]) => Promise<T[]>;
export declare const put: (con: DataConnection) => (body: DataConnectionMap["data.put"]["request"]["body"]) => Promise<string>;
export declare const search: (con: DataConnection) => (body: DataConnectionMap["data.search"]["request"]["body"]) => Promise<unknown>;
export declare const remove: (con: DataConnection) => (body: DataConnectionMap["data.remove"]["request"]["body"]) => Promise<{
    success: boolean;
}>;
export declare const Datas: {
    put: (con: DataConnection) => (body: DataConnectionMap["data.put"]["request"]["body"]) => Promise<string>;
    get: (con: DataConnection) => <T = unknown>(body: DataConnectionMap["data.get"]["request"]["body"]) => Promise<T | undefined>;
    getMany: (con: DataConnection) => <T = unknown>(body: DataConnectionMap["data.getMany"]["request"]["body"]) => Promise<T[]>;
    search: (con: DataConnection) => (body: DataConnectionMap["data.search"]["request"]["body"]) => Promise<unknown>;
    remove: (con: DataConnection) => (body: DataConnectionMap["data.remove"]["request"]["body"]) => Promise<{
        success: boolean;
    }>;
};
export {};
