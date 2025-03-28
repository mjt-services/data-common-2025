import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import type { DataConnectionMap, ObjectStore } from "../DataConnectionMap";
import type { Entity } from "../type/Entity";
export declare const putEntity: <C extends DataConnectionMap>(con: MessageConnectionInstance<C>) => <T extends Entity>(store: ObjectStore<T>) => (draft: Partial<T>) => Promise<C["data.put"]["response"]>;
