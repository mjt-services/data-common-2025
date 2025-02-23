import type { ObjectStore } from "../DataConnectionMap";
export type Link<T extends Record<string, string> = {}> = {
    id: string;
} & T;
export declare const LINK_OBJECT_STORE: ObjectStore<Link>;
