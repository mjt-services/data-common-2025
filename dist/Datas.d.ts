import type { DataConnectionMap } from "./DataConnectionMap";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
type DataConnectionInstance = MessageConnectionInstance<DataConnectionMap>;
export declare const get: (con: DataConnectionInstance) => <T = unknown>(body: DataConnectionMap["data.get"]["request"]["body"]) => Promise<T | undefined>;
export declare const getMany: (con: DataConnectionInstance) => <T = unknown>(body: DataConnectionMap["data.getMany"]["request"]["body"]) => Promise<T[]>;
export declare const put: (con: DataConnectionInstance) => (body: DataConnectionMap["data.put"]["request"]["body"]) => Promise<string>;
export declare const search: (con: DataConnectionInstance) => (body: DataConnectionMap["data.search"]["request"]["body"]) => Promise<unknown>;
export declare const remove: (con: DataConnectionInstance) => (body: DataConnectionMap["data.remove"]["request"]["body"]) => Promise<{
    success: boolean;
}>;
export declare const Datas: {
    put: (con: DataConnectionInstance) => (body: DataConnectionMap["data.put"]["request"]["body"]) => Promise<string>;
    get: (con: DataConnectionInstance) => <T = unknown>(body: DataConnectionMap["data.get"]["request"]["body"]) => Promise<T | undefined>;
    getMany: (con: DataConnectionInstance) => <T = unknown>(body: DataConnectionMap["data.getMany"]["request"]["body"]) => Promise<T[]>;
    search: (con: DataConnectionInstance) => (body: DataConnectionMap["data.search"]["request"]["body"]) => Promise<unknown>;
    remove: (con: DataConnectionInstance) => (body: DataConnectionMap["data.remove"]["request"]["body"]) => Promise<{
        success: boolean;
    }>;
};
export {};
