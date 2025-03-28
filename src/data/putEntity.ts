import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import type { DataConnectionMap, ObjectStore } from "../DataConnectionMap";
import { Datas } from "./Datas";
import { Ids } from "../id/Ids";
import type { Entity } from "../type/Entity";

export const putEntity =
  <C extends DataConnectionMap>(con: MessageConnectionInstance<C>) =>
  <T extends Entity>(store: ObjectStore<T>) =>
  async (draft: Partial<T>) => {
    const { id = Ids.fromObjectStore(store), ...rest } = draft;
    return Datas.put(con)({
      value: {
        id,
        ...rest,
      } as Partial<T>,
    });
  };
